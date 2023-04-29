<template>
  <div class="p-4 max-w-7xl mx-auto flex flex-col">
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-3">
      <template v-for="product in productStore.products" :key="product.id">
        <ProductCard v-if="product.id" :product="product" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/store/useProductStore'
import { useCartStore } from '@/store/useCartStore'
import ProductCard from '@/components/ProductCard.vue'

const productStore = useProductStore()
const cartStore = useCartStore()
</script>

<style scoped></style>
