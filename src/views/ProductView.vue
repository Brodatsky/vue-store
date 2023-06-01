<template>
  <template v-if="product">
    <div class="flex w-full border rounded-xl p-4 mx-auto justify-around max-w-5xl">
      <div class="img-container mr-10">
        <img :src="product.image" alt="Product Image" class="object-contain img" />
      </div>
      <div class="flex flex-col">
        <h1 class="font-bold mb-3">{{ product.title }}</h1>
        <p class="text-md mb-3">{{ product.description }}</p>
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

        <p class="text-2xl">{{ toCurrency(product.price) }}</p>
        <button
          class="mt-auto transition ease-in-out duration-300 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border w-full rounded-full p-1"
          @click.stop="cartStore.add(product)"
        >
          Add to cart
        </button>
      </div>
    </div>
  </template>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useProductStore, type Product } from '@/store/useProductStore'
import { useCartStore } from '@/store/useCartStore'
import { toCurrency } from '@/utils/toCurrency'
import { computed } from 'vue'

const productStore = useProductStore()
const cartStore = useCartStore()

const route = useRoute()

const product = computed(() =>
  productStore.products.find((product: Product) => {
    if (product.id === +route.params.productId) {
      console.log(product)
      return product
    }
  })
)
</script>
<style scoped>
.img-container {
  min-width: 300px;
  width: 300px;
  height: 300px;
  background: rgb(255, 255, 255);
}

.img {
  width: 300px;
  height: 300px;
}
</style>
