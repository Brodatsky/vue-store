<template>
  <div class="p-4 max-w-7xl mx-auto flex flex-col">
    <template v-for="item in cartStore.contents" :key="item.product.id">
      <CartCard :cartProduct="item" />
    </template>
    <div class="text-center text-lg">
      <span class="font-bold">Total:</span>
      {{ toCurrency(cartStore.total) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/store/useProductStore'
import { useCartStore } from '@/store/useCartStore'
import CartCard from '@/components/CartCard.vue'
import { toCurrency } from '@/utils/toCurrency'

const cartStore = useCartStore()
</script>

<style scoped></style>
