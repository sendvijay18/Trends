<template>
  <q-page class="constrain-more q-pa-md">
    <div class="camara-frame q-pa-md">
      <Video class="full-width" v-show="!imageCaptured" ref="video" autoplay playsinline />
      <canvas class="full-width" v-show="imageCaptured" ref="canvas" height="240"  />
    </div>
    <div class="text-center q-pa-md">
      <q-btn round v-show="hasCameraSupport && !showReloadCamera" color="grey-10" @click="captureImage" size="lg" icon="eva-camera" />
      <q-btn round v-show="hasCameraSupport && showReloadCamera" color="grey-10" @click="reLoadCamera" size="lg" icon="eva-refresh" />
      <q-file v-show="!hasCameraSupport" label="Choose an Image" outlined v-model="imageUpload" accept="image/*" @input="captureImageFallback">
        <template v-slot:prepend>
          <q-icon name="eva-attach-outline" />
        </template>
      </q-file>
      <div class="row justify-center q-ma-md">
        <q-input v-model="post.caption" class="col col-sm-6" label="Caption" dense />
      </div>
      <div class="row justify-center q-ma-md">
        <q-input v-model="post.category" class="col col-sm-6" label="Category" type="number" dense />
      </div>
      <div class="row justify-center q-ma-md">
        <q-input v-model="post.location" class="col col-sm-6" :loading="locationLoading" label="Location" dense >
          <template v-slot:append>
            <q-btn @click="getLocation" v-if="!locationLoading && locationSupported" v-show="!showReloadLocation" icon="eva-navigation-2-outline" round dense flat />
          </template>          
        </q-input>
      </div>
      <div class="row justify-center q-mt-lg">
        <q-btn unelevated rounded color="primary" @click="submitTrend" label="Post Image" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { uid } from 'quasar'
require('md-gum-polyfill');
import { Stream } from 'stream';
import { mapActions } from 'vuex'
export default {
  name: 'PageCamera',
  data() {
    return {
      post: {
        _id: uid(),
        caption:'',
        location:'',
        category:'',
        photoUrl:'',
        photo: null,
        date: Date.now()
      },
      imageCaptured: false,
      imageUpload: [],
      locationLoading: false,
      showReloadLocation: false,
      showReloadCamera: false,
      hasCameraSupport: true
    }
  },
  computed: {
    locationSupported() {
      if('geolocation' in navigator) return true
      return false
    }
  },
  methods: {
    ...mapActions(['createTrend']),
    initCamara() {
      navigator.mediaDevices.getUserMedia({
        video: true
      }).then(stream => {
        this.$refs.video.srcObject = stream
      }).catch( error => {
        this.hasCameraSupport = false
        alert("May the browser didn't support or there is some errors.");
      })
    },
    submitTrend() {
      // const data = "data"
      // this.post._attachments = {
      //     data: this.post.photo
      // },
      console.log(this.post)
      debugger;
      this.createTrend(this.post)
      // this.post.reset()
    },
    captureImage() {
      this.showReloadCamera = true
      console.log("capture iage")
      let video = this.$refs.video
      let canvas = this.$refs.canvas
      canvas.width = video.getBoundingClientRect().width
      canvas.height = video.getBoundingClientRect().height
      let context = canvas.getContext('2d')
      context.drawImage(video, 0, 0, canvas.width, canvas.height)
      this.imageCaptured = true
      debugger;
      
      this.post.photo = this.dataURItoBlob(canvas.toDataURL())
      console.log(canvas.toDataURL())
      // this.disableCamera()
    },
    reLoadCamera() {
      console.log("reloading...")
      this.showReloadCamera = false
      this.imageCaptured = false
      this.initCamara()
    },
    disableCamera() {
      this.$refs.video.srcObject.getVideoTracks().forEach(track => {
        track.stop()
      })
    },
    captureImageFallback(file) {
      this.post.photo = file
      let canvas = this.$refs.canvas
      let context = canvas.getContext('2d')
      var reader = new FileReader()
      reader.onload = event => {
          var img = new Image()
          img.onload = () => {
            canvas.width = img.width
            canvas.height = img.height
            context.drawImage(img,0,0)
            this.imageCaptured = true
          }
          img.src = event.target.result
      }
      reader.readAsDataURL(file)
    },
    dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);

    // create a view into the buffer
    var ia = new Uint8Array(ab);

    // set the bytes of the buffer to the correct values
      for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
      }

    // write the ArrayBuffer to a blob, and you're done
    var blob = new Blob([ab], {type: mimeString});
    return blob;
    },
    getLocation() {
      this.locationLoading = true
      this.showReloadLocation = true
      navigator.geolocation.getCurrentPosition( position => {
        this.getCityAndCountry(position)
      }, err => {
        this.locationError()
      }, {
        timeout:7000
      })
    },
    getCityAndCountry(position) {
      let apiUrl = `https://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?json=1`
      this.$axios.get(apiUrl).then( result => {
        this.locationSuccess(result)
      }).catch(err => {
        this.locationError()
      })

    },
    locationSuccess(result) {
      this.post.location = result.data.city
      console.log(result)
      if(result.data.region) {
        this.post.location += `, ${result.data.region}` 

      }
      this.locationLoading = false
    },
    locationError() {
      this.$q.dialog({
        title: 'Error',
        message: 'could not found location'
      })
      this.locationLoading = false
      this.showReloadLocation = false
    }
  },
  mounted() {
    this.initCamara()
  },
  beforeDestroy() {
    if(this.hasCameraSupport) {
      this.disableCamera()
    }
  }
}
</script>

<style lang="sass">
  .camara-frame
    border: 2px solid $grey-10
    border-radius: 10px

</style>
