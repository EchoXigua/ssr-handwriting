<template>
<div class="app" style="padding: 24px 56px;">
  <h2>Vue app</h2>
  <div>{{ count }}</div>
  <button @click="addCounter">+1</button>

  <div>
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <br>
    <div style="margin-left: 36px;">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>
<script setup>
import { ref } from 'vue';
const count = ref(0)
const addCounter = () => {
  count.value += 1
}
</script>
<style scoped>
    
</style>