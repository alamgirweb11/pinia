<script setup>
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
</script>
<template>
  <div style="width: 220px; margin: 0 auto; display: flex; justify-content: space-around;">
    <button @click="store.increment">+</button>
    <h5>Counter Value: {{ store.count }}</h5>
    <button @click="store.decrement">-</button>
  </div>
    <h6>Digit Length {{ store.countDigitLength }}</h6>
</template>
