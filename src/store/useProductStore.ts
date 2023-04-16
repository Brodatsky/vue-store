import { defineStore } from 'pinia'
import axios from 'axios'
import type { IProduct } from '@/models/product.model'

interface ProductState {
  count: number
  products: IProduct[]
  limit: number
}

export const useProductStore = defineStore('ProductStore', {
  state: (): ProductState => {
    return {
      count: 0,
      products: [],
      limit: 20
    }
  },

  getters: {
    loaded(state): boolean {
      return state.products.length > 0
    }
  },

  actions: {
    increment() {
      this.count++
    },

    async fetchProducts() {
      if (this.loaded) return
      try {
        const response = await axios.get('https://fakestoreapi.com/products', {
          params: { limit: this.limit }
        })
        this.products = response.data
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
