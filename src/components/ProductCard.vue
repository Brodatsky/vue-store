<template>
  <div class="card border rounded-xl p-3 flex flex-col justify-between">
    <div class="card-img mb-5">
      <img :src="product.image" alt="Card Image" class="object-contain w-full h-64" />
    </div>
    <button
      class="transition ease-in-out duration-300 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border rounded-full p-1"
      @click="cartStore.add(product)"
    >
      Add to cart
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/store/useProductStore'

import { useCartStore } from '@/store/useCartStore'
const cartStore = useCartStore()
defineProps<{
  product: Product
}>()
</script>

<style scoped></style>
