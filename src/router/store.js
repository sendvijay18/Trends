import Vue from 'vue'
import Vuex from 'vuex'
// var userDB = new PouchDB('userdb')
import PouchDB from 'pouchdb'
import VTooltip from 'v-tooltip'
// var appDB = new PouchDB('appdb')
const username = '6cc07182-318f-4a74-9f1f-ddaa79678bc4-bluemix'
const password = 'a9bcd15ceec4598b549427123816bd747713fbe6e9b0b869ff9936a0e7b9fd6f'
const dbName = 'posts'

/**
 * Chat database URL
 */
const dbUrl = `https://${username}:${password}@${username}.cloudantnosqldb.appdomain.cloud/${dbName}`

/**
 * Local database connection
 */
// let local = null
/**
 * Remote database connection
 */
// let remote = null

Vue.use(Vuex)
Vue.use(VTooltip)
var appDB = null;
var local = new PouchDB(dbName)
// export function connect ({ onConnected, onChanged, onError } = {}) {
  // this.remote = new PouchDB(dbUrl)
  if(navigator.onLine){
    local.sync(dbUrl, { live: true, retry: true })
  } else {
    
  }
  
  // local
  //   .sync(remote, { live: true, retry: true })
  //   .on('change', changes => onChanged ? onChanged(changes) : undefined)
  //   .on('error', error => onError ? onError(error) : undefined)
  // if (onConnected) {
  //   // onConnected()
  //   debugger
  // }
// }

export default new Vuex.Store({
  state: {
    trends: []
  },
  mutations: {
    setTrends(state, payload) {
        state.trends = payload.array.forEach(element => {
            console.log(element.doc)
            return element.doc
        });
    }
  },
  actions: {
    async readTrends( ) {
        const docs = await local.allDocs({
            include_docs: true,
            attachments: true
        })
        // console.log(docs.rows)
        return docs.rows
    },
    async createTrend( {}, payload ) {
    try{
        const response  = await local.put(payload)
        // console.log(response)
    } catch(err) {
        console.error(err)
    }
    },

    async checkConnection() {

    }

  },
  getters: {
    connection(){
      if(navigator.onLine){
        debugger
        this.connectionStatus = "Connected to internet.";
        }else{
        this.connectionStatus = "Unable to connect to internet.";	
        }
    }
  }
})