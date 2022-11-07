import { log } from '../log'
import { useMainStore } from '../stores/main.store'

export async function appWillMount() {
  await new Promise((_) => setTimeout(_, 3000))

  const mainStore = useMainStore()

  mainStore.increment()

  log(`🍍 ${mainStore.title}`)
  log('🪝 beforeMountApp end')
}
