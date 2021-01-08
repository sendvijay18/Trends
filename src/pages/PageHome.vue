<template>
  <div class="homecontainer">
    <!-- <q-card v-if="posts.length > 0" class="box constrain-slideone">
      <q-carousel
        animated
        v-model="slide"
        infinite
        :autoplay="autoplay"
        transition-prev="rotate"
        transition-next="rotate"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        >
        <q-carousel-slide v-for:"(post, index) In posts" :key="post._id" :name= post.doc._id :img-src = post.doc.photo >
          <div class="absolute-top custom-caption">
            <div class="text-h2">{{ post.doc.location }}</div>
            <div class="text-subtitle1">{{ post.doc.date }}</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </q-card> -->
    <q-card class="box constrain-slidetwo">
      <q-carousel
        animated
        height="500px"
        v-model="slide"
        infinite
        :autoplay="autoplay"
        transition-next="slide-left"
        @mouseenter="autoplay = true"
        @mouseleave="autoplay = true"
        >
        <q-carousel-slide :name="2" img-src="../assets/IMG-20201130-WA0012.jpg" >
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">First stop</div>
            <div class="text-subtitle1">Mountains</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" img-src="../assets/IMG-20201130-WA0013.jpg" />
        <q-carousel-slide :name="1" img-src="../assets/IMG-20201130-WA0016.jpg" />
        <q-carousel-slide :name="4" img-src="IMG-20201130-WA0015.jpg" />
      </q-carousel>
    </q-card>
    <!-- <q-card class="box constrain-slideone"> -->
      <!-- <div> -->
        <!-- <q-parallax >
        <template v-slot:media> -->
          <video class="box constrain-slidethree" style="background-color:black;" poster="https://cdn.quasar.dev/img/polina.jpg" autoplay loop muted>
            <!-- <source type="video/webm" src="https://cdn.quasar.dev/img/cvideo.webm"> -->
            <source type="video/mp4" src="../assets/cvideo.mp4">
          </video>
        <!-- </template>
      </q-parallax> -->
    <!-- </q-card> -->
    <q-card class="box constrain-slidethree">
      <h5>About Us</h5>
      <p> 
Here comes the end of your search for the beautiful and best Photo shoot location in Telangana. “Memorable pictures are always the treasure of loved ones for the rest of your life”. So here we help you to create such memories with pleasing and attractive sets over 2 plus acer’s land. We at Chayachitram have over 50 plus sets including Outdoor and Indoor sets for Pre-Wedding Photography, Maternity/Pre-Birthday Photography, Fashion/Modelling Photography, Commercial(Music Shoots, Shot films) and Videography.  
This is a hassle-free private area for the shoots with all good facilities like Air conditioned changing and Makeup rooms. We are located in Bowrampet with good access to ORR and Just 8 KM away from JNTUH metro station.</p>

    </q-card>
      <!-- </div> -->
    <q-card class="box constrain-slidethree">
      <p> 
Here comes the end of your search for the beautiful and best Photo shoot location in Telangana. “Memorable pictures are always the treasure of loved ones for the rest of your life”. So here we help you to create such memories with pleasing and attractive sets over 2 plus acer’s land. We at Chayachitram have over 50 plus sets including Outdoor and Indoor sets for Pre-Wedding Photography, Maternity/Pre-Birthday Photography, Fashion/Modelling Photography, Commercial(Music Shoots, Shot films) and Videography.  
This is a hassle-free private area for the shoots with all good facilities like Air conditioned changing and Makeup rooms. We are located in Bowrampet with good access to ORR and Just 8 KM away from JNTUH metro station.</p>
    </q-card>
    <q-card class="box constrain-slideone">
      <q-carousel
        animated
        v-model="slide"
        infinite
        :autoplay="autoplay"
        transition-next="slide-left"
        @mouseenter="autoplay = true"
        @mouseleave="autoplay = true"
        >
        <q-carousel-slide :name="2" style="padding:20px" img-src="https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg" />
        <q-carousel-slide :name="1" img-src="../assets/IMG-20200707-WA0010.jpg" />
        <q-carousel-slide :name="3" img-src="../assets/personal (5).jpg" />
      </q-carousel>
    </q-card>
    
    
    
    
    
    
    
    <footer class="flex-rw">
      <section class="footer-social-section flex-rw">
          <span class="footer-social-overlap footer-social-connect">
          CONNECT <span class="footer-social-small">with</span> US
          </span>
          <span class="footer-social-overlap footer-social-icons-wrapper flex-rw">
          <q-btn flat dense href="https://www.instagram.com/chayachitram_studio/?hl=en" class="large-screen-only" size="20px" icon="eva-facebook"></q-btn>
          <q-btn flat dense href="https://www.instagram.com/chayachitram_studio/?hl=en" class="large-screen-only" size="20px" icon="eva-twitter"></q-btn>
          <q-btn flat dense to="https://www.instagram.com/chayachitram_studio/?hl=en" class="large-screen-only" size="20px" icon="eva-linkedin"></q-btn>
          </span>
      </section>
      <section class="footer-bottom-section flex-rw">
        <div class="footer-bottom-wrapper">   
            <i class="fa fa-copyright" role="copyright"></i> chayachitram studio <address class="footer-address" role="company address">Bachupally, Hyderabad, Telangana 500090 © 2020</address><span class="footer-bottom-rights"> - All Rights Reserved. </span>
            </div>
            <div class="footer-bottom-wrapper">
            <a href="/terms-of-use.html" class="generic-anchor" rel="nofollow">Terms</a> | <a href="/privacy-policy.html" class="generic-anchor" rel="nofollow">Privacy</a>
              </div>
      </section>
    </footer>
  </div>
</template>

<script>
import { date } from 'quasar'
import { mapActions } from 'vuex'
export default {
  name: 'PageHome',
  data() {
    return {
      slide: 1,
      autoplay: true,
      posts: []
    }
  },
  methods: {
    ...mapActions(['readTrends']),
    blobToDataURL(blob, callback) {
    var a = new FileReader();
    a.onload = function(e) {callback(e.target.result);}
     return a.readAsDataURL(blob);
    },
    // getPosts(){
    //   // let apiUrl = `https://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?json=1`
    //   this.$axios.get(this.readTrends()).then( results => {
    //     posts = results
    //     console.log(posts)
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // }
  },
  mounted() {
    // this.posts = this.getPosts
    // const test1 = temp[0].doc.photo
    // const test = this.blobToDataURL(test1)
    // console.log(this.readTrends())

    this.readTrends().then(results => {
      const posts = results
      debugger;
      console.log(posts)
    })

    // this.posts = this.readTrends()

    // this.$axios.get(this.readTrends()).then( results => {
    //   this.posts = results
    //   console.log(posts)
    // }).catch(err => {
    //   console.log(err)
    // })
    
  }
}
</script>
 
<style lang="sass">
  .box
    width: 100%
    height: 100%
    background: $grey-2
    padding: 0px
    margin-top: 3px
    box-sizing: border-box
    font-size: 18px
  .homecontainer
    width: 100%
    height: 100%
    padding: 1px
    background: text-grey-2
    display: flex
    flex-direction: row
    justify-content: space-around
    flex-flow: wrap;
  .constrain-slideone
    max-width: 50%
    max-height: 100%
    margin-bottom: 2px
  .constrain-slidetwo
    max-width: 100%
    max-height: 100%
    margin-bottom: 1px
  .constrain-slidethree
    max-width: 50%
    max-height: 100%
    padding: 10px
    

  .flex-rw
    display: flex;
    flex-flow: row wrap;
  
  
  main 
    flex: 1 1 auto; //For IE11
    display: flex;
    align-items: center;
    justify-content: center;
    font: 10em "Oswald", sans-serif;
    color: rgb(155,155,155);
    line-height: 1
  
  footer 
    background: rgb(55,55,55);
    margin-top: auto;
    width: 100%
  
  .footer-list-top 
    width: 33.333%
  
  .footer-list-top > li 
    text-align: center;
    padding-bottom: 10px
  
  .footer-list-header 
    padding: 10px 0 5px 0;
    color: #fff;
    font: 2.3vw "Oswald", sans-serif
  
  .footer-list-anchor 
    font: 1.3em "Open Sans", sans-serif
  
  .footer-social-section 
    width: 100%;
    align-items: center;
    justify-content: space-around;
    position: relative;
    margin-top: 2px;
  
  .footer-social-section::after 
    content: "";
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 10px;
    border-top: 1px solid gray;
    width: calc(100% - 20px)
  
  .footer-social-overlap 
    position: relative;
    z-index: 2;
    background: rgb(55,55,55);
    padding: 0 20px
  
  .footer-social-connect 
    display: flex;
    align-items: center;
    font: 1.5em "Oswald", sans-serif;
    color: #fff
  
  .footer-social-small 
    font-size: 0.6em;
    padding: 0px 20px
  
  .footer-social-overlap > a 
    font-size: 3em
  
  .footer-social-overlap > a:not(:first-child) 
    margin-left: 0.38em
  
  .footer-bottom-section 
    width: 100%;
    padding: 5px;
    border-top: 1px solid gray;
    margin-top: 10px
  
  .footer-bottom-section > div:first-child 
    margin-right: auto
  
  .footer-bottom-wrapper 
    font-size: 1em;
    color: #fff
  
  .footer-address 
    display: inline;
    font-style: normal;
</style>
