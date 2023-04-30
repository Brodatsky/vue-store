<template>
  <div class="card border rounded-xl p-3 flex flex-col justify-between">
    <div class="card-img mb-5">123123123123</div>
  </div>
</template>

<script setup lang="ts">
import type { CartProduct } from '@/store/useCartStore'

import { useCartStore } from '@/store/useCartStore'
const cartStore = useCartStore()
// defineProps<{
//   cartProduct: CartProduct
// }>()
</script>

<style scoped></style>
