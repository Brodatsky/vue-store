<template>
  <div class="flex flex-col md:flex-row w-3/4 mx-auto border rounded-xl p-3 mb-2">
    <div class="p-8 w-1/3 flex items-center mx-auto">
      <img :src="cartProduct.product.image" alt="Card Image" class="object-contain w-32 mx-auto" />
    </div>
    <div class="p-8 w-2/3">
      <h2 class="text-xl font-bold mb-3">{{ cartProduct.product.title }}</h2>
      <p class="text-xl mb-5">${{ cartProduct.product.price }}</p>
      <div class="">
        <div class="btn-group">
          <button
            class="transition ease-in-out duration-300 hover:bg-yellow-400 active:bg-yellow-500 rounded-l-md px-3 py-2 bg-yellow-300"
            @click="cartStore.remove(cartProduct.product)"
          >
            -
          </button>
          <button class="transition ease-in-out duration-300 hover:bg-gray-100 px-3 py-2">
            {{ cartProduct.quantity }}
          </button>
          <button
            class="transition ease-in-out duration-300 hover:bg-yellow-400 active:bg-yellow-500 rounded-r-md px-3 py-2 bg-yellow-300"
            @click="cartStore.add(cartProduct.product)"
          >
            +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/useCartStore'
import type { CartProduct } from '@/store/useCartStore'
const cartStore = useCartStore()
defineProps<{
  cartProduct: CartProduct
}>()
</script>

<style scoped></style>
