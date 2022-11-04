<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts" setup>
import { IonApp, IonRouterOutlet } from '@ionic/vue'
import { onBeforeMount, onMounted } from 'vue'
console.log('App.vue setup')

onBeforeMount(() => {
  console.log('App.vue onBeforeMount')
})

onMounted(() => {
  console.log('App.vue onMounted')
})
</script>
