<script setup>
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const counter = store.count
</script>
<template>
    <h5>Counter Value: {{ counter }}</h5>
</template>
