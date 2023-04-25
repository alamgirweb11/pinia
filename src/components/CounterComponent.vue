<script setup>
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const counter = store.count
function increment () {
  counter.value++
}
function decrement () {
  counter.value--
}
</script>
<template>
    <button @click="increment">+</button>
    <h5>Counter Value: {{ counter }}</h5>
    <h6>Digit Length {{ store.countDigitLength }}</h6>
    <button @click="decrement">-</button>
</template>
