import { defineStore } from 'pinia'
import type { IProduct } from '@/models/product.model'

interface Purchase {
  product: IProduct
  quantity: number
}

interface CartState {
  contents: Record<string, Purchase>
}

export const useCartStore = defineStore('CartStore', {
  state: (): CartState => {
    return {
      contents: {}
    }
  },

  actions: {
    add(product: IProduct) {
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
