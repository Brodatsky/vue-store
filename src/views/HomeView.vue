<script setup lang="ts">
import { useProductStore } from '@/stores/useProductStore'

const productStore = useProductStore()
</script>

<template>
  <div class="flex justify-center flex-col items-center px-5">
    <div class="mb-3 text-2xl">Current Count: {{ productStore.count }}</div>
    <div class="mb-3 text-2xl">Current data: {{ productStore.data }}</div>
    <button
      class="px-4 py-2 border rounded-lg hover:bg-sky-100 w-20"
      @click="productStore.increment"
    >
      +
    </button>
    <button
      class="px-4 py-2 border rounded-lg hover:bg-sky-100 w-20"
      @click="productStore.fetchPosts"
    >
      Posts
    </button>
  </div>
</template>
<style scoped></style>
