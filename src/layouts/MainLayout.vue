<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-grey-10" bordered>
      <q-toolbar class="constrain">
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        /> -->
        <q-btn flat round dense to="/camera" v-tooltip.top-center="msg" class="large-screen-only" size="18px" icon="eva-camera-outline" />
        <q-separator q-pa-md class="large-screen-only" vertical inset />
        <q-btn outline rounded  color="primary" flat  dense to="/pricing" class="large-screen-only" size="15px">
          <!-- <q-chip color="red" text-color="white" size="15px"> -->
            <!-- <q-avatar ><img src="../assets/model.jpeg"></q-avatar> -->
            wedding
          <!-- </q-chip> -->
        </q-btn>
        <!-- <q-separator q-pa-md class="large-screen-only" vertical inset /> -->
        <q-btn outline rounded  color="primary" flat dense to="/pricing" class="large-screen-only" size="15px">
        <!-- v-tooltip.top-center="msg"  -->
          <!-- <q-chip color="blue-10" size="15px" text-color="black"> -->
            <!-- <q-avatar color="red" text-color="white"><img src="https://cdn.quasar.dev/img/boy-avatar.png"></q-avatar> -->
            Garment
          <!-- </q-chip> -->
        </q-btn>
        <q-btn outline rounded  color="primary" flat dense to="/pricing" class="large-screen-only" size="15px">
        <!-- v-tooltip.top-center="msg"  -->
          <!-- <q-chip color="blue-10" size="15px" text-color="black"> -->
            <!-- <q-avatar color="red" text-color="white"><img src="https://cdn.quasar.dev/img/boy-avatar.png"></q-avatar> -->
            Fashion
          <!-- </q-chip> -->
        </q-btn>
        <q-btn outline rounded  color="primary" flat dense to="/contact" class="large-screen-only" size="15px">
          Maternity
        </q-btn>
        <!-- <q-separator class="large-screen-only" vertical inset /> -->
        <!-- <q-btn flat round dense to="/contact" v-tooltip.top-center="msg" class="large-screen-only" size="18px" icon="eva-calendar-outline" /> -->
        <!-- <q-separator class="large-screen-only" vertical inset /> -->
        <q-toolbar-title class="text-grand-hotel text-bold">
          <!-- Trends App - <small>Post Your Trends</small> -->
        </q-toolbar-title>

        <q-btn flat round dense to="/" v-tooltip.top-center="msg" class="large-screen-only" size="18px" icon="eva-home-outline" />
        <!-- <q-toggle
          v-model="onLineStatus"
          label="On Right"
        /> -->
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-footer class="bg-white small-screen-only" bordered>
      <q-tabs class="text-grey-10" active-color="primary" indicator-color="transparent"> 
        <q-route-tab to="/camera" v-tooltip.top-center="msg" icon="eva-camera-outline"  />
        <q-route-tab to="/pricing">
        <q-avatar color="red" text-color="white"><img src="../assets/model.jpeg"></q-avatar>
        </q-route-tab>
        <q-route-tab to="/" v-tooltip.top-center="msg" icon="eva-home-outline"  />
        <q-route-tab to="/contact" v-tooltip.top-center="msg">
        <q-avatar color="red" text-color="white"><img src="../assets/IMG-20201130-WA0032.jpg"></q-avatar></q-route-tab>
      </q-tabs>
    </q-footer>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container class="bg-gray-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'
import VTooltip from 'v-tooltip'
import Vue from 'vue'
Vue.use(VTooltip)

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

export default {
  name: 'MainLayout',
  // components: { EssentialLink },
  data () {
    return {
      msg: 'This is a button.',
      onLineStatus : this.chechOnline()
      // leftDrawerOpen: false,
      // essentialLinks: linksData
    }
  },
  methods: {
    chechOnline() {
      if(navigator.onLine){
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="sass">
  .q-toolbar__title
    font-size: 30px
    @media (max-width: $breakpoint-xs-max)
      text-align: center
  .q-footer
    .q-tab__icon
      font-size: 30px
</style>
