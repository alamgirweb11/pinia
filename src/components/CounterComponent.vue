<script setup>
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()

function increment () {
  store.count++
}
function decrement () {
  store.count--
}
</script>
<template>
  <div style="width: 220px; margin: 0 auto; display: flex; justify-content: space-around;">
    <button @click="increment">+</button>
    <h5>Counter Value: {{ store.count }}</h5>
    <button @click="decrement">-</button>
  </div>
    <h6>Digit Length {{ store.countDigitLength }}</h6>
</template>
