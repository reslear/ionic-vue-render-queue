<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts" setup>
import { IonApp, IonRouterOutlet } from '@ionic/vue'
import { onMounted } from 'vue'
import { log } from './log'
log('🪀 App.vue setup')

onMounted(() => {
  log('🪀 App.vue onMounted')
})
</script>
