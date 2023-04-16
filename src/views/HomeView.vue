<template>
  <div class="p-4 max-w-7xl mx-auto flex flex-col">
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-3">
      <ProductCard v-for="product in productStore.products" :key="product.id" :product="product" />
    </div>
    <div class="mx-auto">
      <ButtonS @click="productStore.loadMoreProducts">Загрузить ещё</ButtonS>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonS from '@/components/ButtonS.vue'
import { useProductStore } from '@/store/useProductStore'
import ProductCard from '@/components/ProductCard.vue'

const productStore = useProductStore()
</script>

<style scoped></style>
