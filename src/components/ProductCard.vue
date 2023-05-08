<template>
  <div class="flex flex-col w-full border rounded-xl p-3 justify-between">
    <div class="mb-3">
      <img :src="product.image" alt="Card Image" class="object-contain w-full h-64 mb-5" />
    </div>
    <div>
      <star-rating
        :increment="0.5"
        :read-only="true"
        :padding="0"
        :rating="product.rating.rate"
        :star-size="15"
        inactive-color="#64748B"
        active-color="#FCC347"
        class="mb-2"
      />

      <p class="text-2xl mb-5">{{ toCurrency(product.price) }}</p>
      <button
        class="transition ease-in-out duration-300 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border w-full rounded-full p-1"
        @click="cartStore.add(product)"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/store/useProductStore'

import { useCartStore } from '@/store/useCartStore'
import { toCurrency } from '@/utils/toCurrency'

const cartStore = useCartStore()
defineProps<{
  product: Product
}>()
</script>

<style>
.vue-star-rating-rating-text {
  margin-top: 5px;
}
</style>
