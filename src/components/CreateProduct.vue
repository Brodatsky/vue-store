<template>
  <div class="modal">
    <h1 class="font-bold text-center">Create new product</h1>

    <Form @submit="onSubmit" :validation-schema="schema">
      <label for="title">Title</label>
      <Field name="title" class="input mb-5" />
      <ErrorMessage name="title" class="block mb-5" />
      <label for="price">Price</label>
      <Field name="price" type="number" modelValue="10" class="input mb-5" />
      <ErrorMessage name="price" class="block mb-5" />
      <label for="description">Description</label>
      <Field name="description" class="input mb-5" />
      <ErrorMessage name="description" class="block mb-5" />
      <label for="category">Category</label>
      <Field name="category" class="input mb-5" />
      <ErrorMessage name="category" class="block mb-5" />
      <button
        class="transition ease-in-out duration-300 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border w-64 rounded-full p-1"
      >
        Submit
      </button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

import { useProductStore } from '@/store/useProductStore'
import type { Product } from '@/store/useProductStore'

import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

const productStore = useProductStore()

const schema = yup.object({
  title: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  category: yup.string().required()
})

async function onSubmit(product: any, actions: any) {
  product.image = `https://placehold.co/400x600?text=${product.title}`

  try {
    const res = await axios.post<Product>('https://fakestoreapi.com/products', product)
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
