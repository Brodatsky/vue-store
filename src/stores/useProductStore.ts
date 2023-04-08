import { defineStore } from 'pinia'
import axios from 'axios'
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
      try {
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products', {
          params: {limit: 5}
        })
        this.products = response.data
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
