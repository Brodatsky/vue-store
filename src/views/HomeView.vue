<template>
  <div class="p-4 max-w-7xl mx-auto flex flex-col">
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-3">
      <!-- <ProductCard v-for="product in productStore.products" :key="product.id" :product="product" /> -->
      <template v-for="product in productStore.products" :key="product.id">
        <ProductCard v-if="product.id <= limit" :product="product" />
      </template>
    </div>
    <div class="btn-container">
      <v-btn @click="increment">Добавить</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useProductStore } from '@/store/useProductStore'
import { useCartStore } from '@/store/useCartStore'
import ProductCard from '@/components/ProductCard.vue'

const productStore = useProductStore()
const cartStore = useCartStore()

const limit = ref(10)

function increment() {
  limit.value += 10
}
</script>

<style scoped>
.btn-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
