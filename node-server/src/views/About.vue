<template>
  <div class="app" style="border: 1px solid pink;">
    <h2>About page</h2>
    <div>{{ count }}</div>
    <button @click="addCounter">+1</button>
  </div>
  </template>
  <script setup>
  import { ref } from 'vue';
  import { useHomeStore } from '../store/index'
  import { storeToRefs } from 'pinia'

  const homeStore = useHomeStore()  
  const { count } = storeToRefs(homeStore)
  const addCounter = () => {
    count.value += 1
  }
  </script>
  <style scoped>
      
  </style>