import { log } from './log'

log('start import')
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
import * as hooks from './composables/useAppHooks'

// https://stackoverflow.com/a/72916673
const inc = ref(0)
inc.value++

log('💚 ref before create Vue app - ' + inc.value)

const pinia = createPinia()

// create app
log(`💚 before create app`)
const app = createApp(App).use(IonicVue).use(router).use(pinia)
log(`💚 app created`)

// https://pinia.vuejs.org/core-concepts/outside-component-usage.html#single-page-applications
const mainStore = useMainStore()
log(`🍍 ${mainStore.title}`)

// before init hook
log('🪝 beforeMountApp start')
await hooks.beforeAppReady()

// router
log('🛣️ before ready')
await router.isReady()
log(`🛣️ ready`)

// mount app
log('🔨 before mount')
app.mount('#app')
log('🔨 mounted')
