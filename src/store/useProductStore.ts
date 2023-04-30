import { defineStore } from 'pinia'
import axios from 'axios'

interface ProductState {
  isLoading: boolean
  count: number
  products: Product[]
  limit: number
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export const useProductStore = defineStore('ProductStore', {
  state: (): ProductState => {
    return {
      isLoading: false,
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
        this.isLoading = true
        const response = await axios.get('https://fakestoreapi.com/products', {
          params: { limit: this.limit }
        })
        this.products = response.data
        this.isLoading = false
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
