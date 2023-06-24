<template>
  <div class="p-4 max-w-7xl mx-auto flex flex-col items-center">
    <FilterProducts></FilterProducts>
    <div
      v-if="!productStore.isLoading"
      class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-5"
    >
      <template v-for="product in productStore.filtredAndSearchAndSortProducts" :key="product.id">
        <ProductCard v-if="product.id" :product="product" />
      </template>
    </div>
    <div v-else class="mb-3"><p>Loading...</p></div>
    <ButtonStd @click="showModal = true" v-if="!productStore.isLoading"> New Product </ButtonStd>
    <ModalWindow :show="showModal" @close="showModal = false"
      ><CreateProduct></CreateProduct
    ></ModalWindow>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

import { useProductStore } from '@/store/useProductStore'

import ProductCard from '@/components/ProductCard.vue'
import ModalWindow from '@/components/ModalWindow.vue'
import ButtonStd from '@/components/UI/ButtonStd.vue'
import FilterProducts from '@/components/FilterProducts.vue'
import CreateProduct from '@/components/CreateProduct.vue'

const productStore = useProductStore()

// const filteredProducts = computed(() => {
//   return productStore.categoryFilter === 'All'
//     ? productStore.products
//     : productStore.products.filter((product) => {
//         return product.category == productStore.categoryFilter
//       })
// })

// sortProducts(state): void {
//   if (state.sortFilter == 'Featured') {
//     state.filteredProducts.sort((prev, next) => {
//       return next.rating.rate - prev.rating.rate
//     })
//     this.isLoading = false
//     console.log(123)
//   }
// }
let showModal: Ref<boolean> = ref(false)
</script>

<style scoped></style>
