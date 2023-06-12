<template>
  <div class="flex flex-col w-full border rounded-xl p-3 justify-between">
    <div class="mb-3">
      <router-link :to="`/product/${product.id}`">
        <img :src="product.image" alt="Card Image" class="object-contain w-full h-64 mb-5" />
      </router-link>
    </div>
    <div>
      <router-link class="" :to="`/product/${product.id}`">
        <p class="transition hover:text-red-600 text-lg">{{ product.title }}</p>
      </router-link>
      <star-rating
        :increment="0.5"
        :read-only="true"
        :padding="0"
        :rating="product?.rating?.rate"
        :star-size="15"
        inactive-color="#64748B"
        active-color="#FCC347"
        class="mb-2"
      />

      <p class="text-2xl mb-5">{{ toCurrency(product.price) }}</p>
      <ButtonStd class="w-full" @click.stop="cartStore.add(product)"> Add to cart </ButtonStd>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/store/useProductStore'
import { useCartStore } from '@/store/useCartStore'
import { toCurrency } from '@/utils/toCurrency'

import ButtonStd from '@/components/UI/ButtonStd.vue'

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
