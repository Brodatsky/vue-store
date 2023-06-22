import { defineStore } from 'pinia'
import axios from 'axios'

interface ProductState {
  isLoading: boolean
  categoryFilter: string
  sortFilter: string
  searchQuery: string
  products: Product[]
  filteredProducts: Product[]
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
      categoryFilter: 'All',
      sortFilter: 'Featured',
      searchQuery: '',
      products: [],
      filteredProducts: []
    }
  },

  getters: {
    filterProducts(state): void {
      if (state.categoryFilter == 'All') {
        state.filteredProducts = state.products
      } else
        state.filteredProducts = state.products.filter((product) => {
          return product.category == state.categoryFilter
        })
    },
    // filterProducts(state): void {
    //   if (state.categoryFilter == 'All') {
    //     state.filteredProducts = state.products
    //   } else
    //     state.filteredProducts = state.products.filter((product) => {
    //       return product.category == state.categoryFilter
    //     })
    // },
    searchProducts(state): void {
      state.filteredProducts = state.products.filter((product) => {
        return product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
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
