<script setup>
import { storeToRefs } from 'pinia'
import CounterComponent from '@/components/CounterComponent.vue'
import { useAuthUser } from '@/stores/auth'
const authStore = useAuthUser()
const { isAuthenticate, fullName } = storeToRefs(authStore)
</script>
<template>
  <div class="home">
    <div v-if="isAuthenticate">User Name : {{ fullName }}</div>
   <CounterComponent />
  </div>
</template>
