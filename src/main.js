import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
// import { createStore } from 'vuex'

// const store = createStore({
//   state: {
//     count: 1
//   },
//   mutations: {
//   }
// })

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
