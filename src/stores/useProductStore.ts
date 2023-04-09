import { defineStore } from 'pinia'
import axios from 'axios'
import type IProduct from '@/models/product.model'

export const useProductStore = defineStore('ProductStore', {
  state: () => {
    return {
      count: 0 as number,
      products: [] as IProduct[] 
    }
  },

  getters: {
    // list(): IProduct[] {
    //   // return this.products.id.map((i) => this.products[i]);
    // },

    loaded(state): boolean {
      return state.products.length > 0;
    },
  },

  actions: {
    increment() {
      this.count++
    },

    async fetchPosts() {
      if (this.loaded) return;
      try {
        const response = await axios.get('https://fakestoreapi.com/products', {
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
