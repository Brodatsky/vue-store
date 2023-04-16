<template>
  <div class="card border rounded-xl p-3">
    <div class="card-img mb-3">
      <img :src="product.image" alt="Card Image" class="object-contain w-full h-64" />
    </div>
    <div class="card-body flex flex-col">
      <div class="card-title font-bold">{{ product.title }}</div>
      <p>${{ product.price }}</p>
      <div class="justify-end card-actions">
        <BaseButton>Добавить в корзину</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from '@/models/product.model'
import BaseButton from './BaseButton.vue'

defineProps<{
  product: IProduct
}>()
</script>

<style scoped></style>
