<template>
  <div class="p-4 max-w-7xl mx-auto flex flex-col">
    <template v-for="item in cartStore.contents" :key="item.product.id">
      <CartCard :item="item" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/store/useProductStore'
import { useCartStore } from '@/store/useCartStore'
import CartCard from '@/components/CartCard.vue'

const productStore = useProductStore()
const cartStore = useCartStore()

console.log(cartStore.contents)
</script>

<style scoped></style>
