<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav className="h-[50px] flex justify-center bg-green-700 items-center text-white mb-3">
      <RouterLink class="px-3" to="/"> Home </RouterLink>
      <RouterLink class="px-3" to="/about">About</RouterLink>
    </nav>
  </header>
  <main><RouterView /></main>
</template>

<style scoped></style>
