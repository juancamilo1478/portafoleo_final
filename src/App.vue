<script setup>
import { RouterLink, RouterView } from 'vue-router'
 
</script>

<template>
  <div class="Style_Main_Home no-gutters" >
 
  <RouterView />
</div>
</template>
<style>
html, body, #app {
  margin: 0;
  width: 100%;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  background-color:var(--primary-color)  ;
}
.Style_Main_Home{
  width: 100%;
  background-color:var(--primary-color)  ;
 
  display: block;
 
}
 
</style>