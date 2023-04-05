import { defineStore } from 'pinia'
import axios, { AxiosError } from 'axios'
import type IProduct from '@/models/product.model'

export const useProductStore = defineStore('ProductStore', {
  state: () => {
    return {
      count: 0 as number,
      products: null as IProduct[] | null
    }
  },

  actions: {
    increment() {
      this.count++
    },

    async fetchPosts() {
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5', {})
      this.products = response.data
      console.log(response.data)
    }
  }
})
