import { defineStore } from 'pinia'
import type { Product } from '@/store/useProductStore'

export interface CartProduct {
  product: Product
  quantity: number
}

interface CartState {
  contents: Record<string, CartProduct>
}

export const useCartStore = defineStore('CartStore', {
  state: (): CartState => {
    return {
      contents: {}
    }
  },

  actions: {
    add(product: Product) {
      if (this.contents[product.id]) {
        this.contents[product.id].quantity += 1
      } else {
        this.contents[product.id] = {
          product,
          quantity: 1
        }
      }
    },
    remove(productID: number) {
      if (!this.contents[productID]) {
        return
      }

      this.contents[productID].quantity -= 1

      if (this.contents[productID].quantity === 0) {
        delete this.contents[productID]
      }
    }
  }
})
