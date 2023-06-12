<template>
  <div class="flex flex-col md:flex-row w-full mx-auto border rounded-xl p-3 mb-2">
    <div class="p-3 w-1/3">
      <router-link :to="`/product/${cartProduct.product.id}`">
        <img
          :src="cartProduct.product.image"
          alt="Card Image"
          class="object-contain w-32 mx-auto"
        />
      </router-link>
    </div>
    <div class="p-8 w-2/3">
      <router-link :to="`/product/${cartProduct.product.id}`">
        <h2 class="text-xl font-bold mb-3">{{ cartProduct.product.title }}</h2>
      </router-link>
      <p class="text-xl mb-5">{{ toCurrency(cartProduct.product.price) }}</p>
      <div class="">
        <div class="btn-group">
          <ButtonCart
            class="rounded-l-md hover:bg-yellow-400 active:bg-yellow-500 px-3 py-2 bg-yellow-300"
            @click="cartStore.remove(cartProduct.product)"
          >
            -
          </ButtonCart>
          <ButtonCart class="hover:bg-gray-100 px-3 py-2">
            {{ cartProduct.quantity }}
          </ButtonCart>
          <ButtonCart
            class="rounded-r-md hover:bg-yellow-400 active:bg-yellow-500 px-3 py-2 bg-yellow-300"
            @click="cartStore.add(cartProduct.product)"
          >
            +
          </ButtonCart>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonCart from '@/components/UI/ButtonCart.vue'

import { useCartStore } from '@/store/useCartStore'
import type { CartProduct } from '@/store/useCartStore'
import { toCurrency } from '@/utils/toCurrency'
const cartStore = useCartStore()
defineProps<{
  cartProduct: CartProduct
}>()
</script>

<style scoped></style>
