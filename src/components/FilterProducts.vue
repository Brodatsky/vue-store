<template>
  <div class="filter mb-3 flex flex-col">
    <select v-model="productStore.selectedFilter" class="border-2">
      <option disabled value="">Please select one</option>
      <option>All</option>
      <option>men's clothing</option>
      <option>women's clothing</option>
      <option>jewelery</option>
      <option>electronics</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/store/useProductStore'

const productStore = useProductStore()
</script>

<style></style>
