import Vue from 'vue'
import axios from 'axios'
import store from 'app/src/router/store'
import pouchDB from 'assets/js/pouchdb-7.2.1'

Vue.prototype.$axios = axios
Vue.prototype.$pouchDB = pouchDB
Vue.prototype.$store = store
//ext:sassm
// split html attributes