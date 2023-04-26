<script setup>
import CounterComponent from '@/components/CounterComponent.vue'
import { useAuthUser } from '@/stores/auth'
const authStore = useAuthUser()

</script>
<template>
  <div class="home">
    <div v-if="authStore.isAuthenticate">User Name : {{ authStore.user.name }}</div>
   <CounterComponent />
  </div>
</template>
