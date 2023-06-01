import { defineStore } from 'pinia'
import axios from 'axios'

interface ProductState {
  isLoading: boolean
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
    async fetchProducts() {
      if (this.loaded) return
      try {
        this.isLoading = true
        const response = await axios.get('https://fakestoreapi.com/products', {
          params: { limit: this.limit }
        })
        this.products = response.data
        this.isLoading = false
      } catch (error) {
        console.log(error)
      }
    }
  }
})
