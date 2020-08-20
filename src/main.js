import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueSocketIO from 'vue-socket.io'
// import io from 'socket.io-client'

Vue.config.productionTip = false

// const options = {
//   // path: '/chat',
//   // namespaceName: 'chat',
//   // transports: ['websocket'],
//   useConnectionNamespace: true,
// } // Options object to pass into SocketIO

// Vue.use(
//   new VueSocketIO({
//     debug: true,
//     vuex: {
//       store,
//       // actionPrefix: 'SOCKET_',
//       // mutationPrefix: 'SOCKET_',
//       options: {
//         useConnectionNamespace: true,
//       },
//     },
//     connection: 'http://localhost:5000/chat',
//     options,
//   }),
// )

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
