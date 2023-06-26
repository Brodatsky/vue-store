<template>
  <div class="p-4 max-w-7xl mx-auto flex flex-col items-center">
    <div class="btn mb-5">
      <ButtonStd @click="showModal = true" v-if="!productStore.isLoading"
        >Add new Product
      </ButtonStd>
    </div>

    <div class="menu flex mb-2">
      <FilterProducts></FilterProducts>
    </div>

    <div
      v-if="!productStore.isLoading"
      class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-5"
    >
      <template v-for="product in productStore.filtredAndSearchAndSortProducts" :key="product.id">
        <ProductCard v-if="product.id" :product="product" />
      </template>
    </div>
    <div v-else class="mb-3"><p>Loading...</p></div>
    <ModalWindow :show="showModal" @close="showModal = false"
      ><CreateProduct></CreateProduct>
    </ModalWindow>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useProductStore } from '@/store/useProductStore'

import ModalWindow from '@/components/ModalWindow.vue'
import CreateProduct from '@/components/CreateProduct.vue'
import ButtonStd from '@/components/UI/ButtonStd.vue'
import ProductCard from '@/components/ProductCard.vue'
import FilterProducts from '@/components/FilterProducts.vue'

const productStore = useProductStore()

let showModal = ref<boolean>(false)
</script>

<style scoped></style>
