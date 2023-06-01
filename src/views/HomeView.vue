<template>
  <div class="p-4 max-w-7xl mx-auto">
    <div class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-3">
      <template v-for="product in productStore.products" :key="product.id">
        <ProductCard v-if="product.id" :product="product" />
      </template>
    </div>
    <button
      class="transition ease-in-out duration-300 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border w-full rounded-full p-1"
      @click="showModal"
    >
      New Product
    </button>
    <ModalWindow v-model:show="modalVisability">123</ModalWindow>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useProductStore } from '@/store/useProductStore'
import ProductCard from '@/components/ProductCard.vue'
import ModalWindow from '@/components/ModalWindow.vue'

const productStore = useProductStore()

let modalVisability = ref(false)
function showModal() {
  modalVisability.value = true
}
</script>

<style scoped></style>
