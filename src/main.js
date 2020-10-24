import { createApp } from 'vue'

import App from './App.vue'
import './index.css'

createApp(App).mount('#app')
const CounterApp = {
    data() {

      return {
        counter: 0
      }
    }
    mounted() {
      setInterval(() => {
        this.counter++
      }, 1000)
    }
  }