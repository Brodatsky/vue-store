<template>
  <div class="p-4 max-w-7xl mx-auto flex flex-col items-center">
    <div class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-5">
      <template v-for="product in productStore.products" :key="product.id">
        <ProductCard v-if="product.id" :product="product" />
      </template>
    </div>
    <button
      class="transition mb-5 ease-in-out duration-300 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border w-64 rounded-full p-1"
      @click="showModal = true"
    >
      New Product
    </button>
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
import CreateProduct from '@/components/CreateProduct.vue'

const productStore = useProductStore()

let showModal: Ref<boolean> = ref(false)
</script>

<style scoped></style>
