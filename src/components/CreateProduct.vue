<template>
  <div class="modal">
    <h1 class="font-bold text-center">Create new product</h1>
    <form action="">
      <div class="flex flex-col items-center">
        <input v-model="title" class="input mb-3" placeholder="Type title" type="text" required />
        <input
          v-model="price"
          class="input mb-3"
          placeholder="Type price"
          type="number"
          required="true"
        />
        <input
          v-model="description"
          class="input mb-3"
          placeholder="Type description"
          type="text"
          required
        />
        <input
          v-model="category"
          class="input mb-5"
          placeholder="Type category"
          type="text"
          required
        />
        <button
          type="submit"
          class="transition ease-in-out duration-300 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border w-64 rounded-full p-1"
          @click="submitNewProduct"
        >
          Create new product
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

import { useProductStore } from '@/store/useProductStore'
import type { Product } from '@/store/useProductStore'

const productStore = useProductStore()

let title = ref<string | null>(null)
let price = ref<number | null>(null)
let description = ref<string | null>(null)
let category = ref<string | null>(null)

function checkForm() {
  if (title.value && price.value && description.value && category.value) {
    return true
  }

  const errors = []

  if (title.value) {
    errors.push('Требуется указать имя.')
  }
  if (price.value) {
    errors.push('Требуется указать цену.')
  }
  return false
}

async function submitNewProduct() {
  if (!checkForm()) {
    console.log(checkForm())

    return false
  }
  let productData: Product = {
    title: title.value as string,
    price: price.value as number,
    description: description.value as string,
    image: `https://placehold.co/200x300?text=ss` as string,
    category: category.value as string
  }
  console.log(123)

  try {
    const res = await axios.post<Product>('https://fakestoreapi.com/products', productData)
    productStore.addProduct(res.data)
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid rgb(129, 129, 129);
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
