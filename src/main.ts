import { createApp, ref } from 'vue'
import { IonicVue } from '@ionic/vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css'
import '@ionic/vue/css/float-elements.css'
import '@ionic/vue/css/text-alignment.css'
import '@ionic/vue/css/text-transformation.css'
import '@ionic/vue/css/flex-utils.css'
import '@ionic/vue/css/display.css'

/* Theme variables */
import './theme/variables.css'
import { useMainStore } from './stores/main.store'

const pinia = createPinia()
const app = createApp(App).use(IonicVue).use(router).use(pinia)

// https://stackoverflow.com/a/72916673
const inc = ref(0)

inc.value++

console.log('main: before useMainStore - ' + inc.value)

// https://pinia.vuejs.org/core-concepts/outside-component-usage.html#single-page-applications
const mainStore = useMainStore()

console.log('main: before router is ready')

router.isReady().then(() => {
  console.log(`main: store - ${mainStore.title}`)
  console.log('main: before app mount')
  app.mount('#app')
  console.log('main: after app mount')
})
