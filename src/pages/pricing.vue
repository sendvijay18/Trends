<template>
	<div class="homecontainer">
		<div class="vueGallery">
			<div class="activePhoto" :style="'background-image: url('+photos[activePhoto]+');'">
				<button type="button" aria-label="Previous Photo" class="previous" @click="previousPhoto()">
					Pre
				</button>
				<button type="button" aria-label="Next Photo" class="next" @click="nextPhoto()">
					Next
				</button>
			</div>
			<!-- <div class="thumbnails">
				<div
					v-for="(photo, index) in photos"
					:src="photo"
					:key="index"
					@click="activePhoto = index"
					:class="{'active': activePhoto == index}" :style="'background-image: url('+photo+')'">
				</div>
			</div> -->
		</div>
	</div>
</template>
<script>
	export default {
		name: 'PagePrising',
		// props: ['photos'],
		data: function () {
			return {
			activePhoto: null,
			photos: [
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-01-min.jpg',
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-02-min.jpg',
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-03-min.jpg',
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-04-min.jpg',
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-05-min.jpg',
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-06-min.jpg',
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-07-min.jpg',
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-08-min.jpg'
				]
			}
		},
		mounted() {
			this.activePhoto = 0
			document.addEventListener("keydown", (event) => {
			if (event.which == 37)
				this.previousPhoto()
			if (event.which == 39)
				this.nextPhoto()
			})
		},
		methods: {
			nextPhoto () {
			this.activePhoto = ( this.activePhoto+1 < this.photos.length ? this.activePhoto+1 : 0 )
			},
			previousPhoto () {
			this.activePhoto = ( this.activePhoto-1 >= 0 ? this.activePhoto-1 : this.photos.length-1 )
			}
		}
	}
</script>
<style lang="sass">
	.homecontainer
		width: 100%
		height: 100%
		padding: 1px
		background: text-grey-2
		display: flex
		flex-direction: row
		justify-content: space-around
		flex-flow: wrap;
		
</style>
