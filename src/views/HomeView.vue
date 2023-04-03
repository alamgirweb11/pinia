<script setup>
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const counter = store.count
</script>
<template>
  <div class="home">
    <h4>This is home page.</h4>
    <h5>Counter Value: {{ counter }}</h5>
  </div>
</template>
