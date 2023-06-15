import { defineStore } from 'pinia'
import axios from 'axios'

interface ProductState {
  isLoading: boolean
  selectedFilter: string
  products: Product[]
}

export interface Product {
  id?: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating?: {
    rate: number
    count: number
  }
}

export const useProductStore = defineStore('ProductStore', {
  state: (): ProductState => {
    return {
      isLoading: false,
      selectedFilter: 'All',
      products: []
    }
  },

  getters: {
    filteredProducts(state) {
      if (state.selectedFilter == 'All') {
        console.log(123)

        return state.products
      } else
        return state.products.filter((product) => {
          return product.category == state.selectedFilter
        })
    }
  },
  actions: {
    async fetchProducts() {
      try {
        this.isLoading = true
        const response = await axios.get('https://fakestoreapi.com/products')
        this.products = response.data
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    addProduct(product: Product) {
      this.products.push(product)
    }
  }
})
