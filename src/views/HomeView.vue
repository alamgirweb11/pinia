<script setup>
import { storeToRefs } from 'pinia'
import CounterComponent from '@/components/CounterComponent.vue'
import { useAuthUser } from '@/stores/auth'
const authStore = useAuthUser()
const { isAuthenticate, user } = storeToRefs(authStore)
</script>
<template>
  <div class="home">
    <div v-if="isAuthenticate">User Name : {{ user.name }}</div>
   <CounterComponent />
  </div>
</template>
