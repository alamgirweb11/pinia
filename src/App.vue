<script setup>
import { useAuthUser } from '@/stores/auth'
const authUser = useAuthUser()
</script>
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <button v-if="authUser.isAuthenticate" @click="authUser.logout" style="margin-left: 20px">Logout</button>
    <button v-else @click="authUser.login" style="margin-left: 20px">Login</button>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
