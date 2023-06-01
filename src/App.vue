<template>
  <header>
    <nav className="h-[50px]  flex bg-slate-500 items-center text-white mb-2 overflow-hidden">
      <div active-class="bg-slate-600" class="mx-10">
        <RouterLink class="transition text-lg font-bold hover:text-gray-200 px-2 py-4" to="/"
          >MyStore</RouterLink
        >
        <RouterLink
          active-class="bg-slate-600"
          class="transition hover:bg-slate-600 px-2 py-4"
          to="/"
        >
          Home
        </RouterLink>
        <RouterLink
          active-class="bg-slate-600"
          class="transition hover:bg-slate-600 h-[50px] px-2 py-4"
          to="/cart"
          >Cart
          <div
            class="transition w-10 font-bold inline-block hover:bg-yellow-500 bg-yellow-400 rounded-full text-black px-2 py-0.5"
          >
            <p class="font-medium text-center">{{ cartStore.count }}</p>
          </div>
        </RouterLink>
      </div>
    </nav>
  </header>
  <main><RouterView /></main>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from '@/store/useCartStore'
import { useProductStore } from '@/store/useProductStore'
import { usePersistCart } from '@/utils/usePersistCart'
// import { CART_STORE } from '@/utils/usePersistCart'

const productStore = useProductStore()
const cartStore = useCartStore()

productStore.fetchProducts()

usePersistCart()

// console.log(JSON.parse(localStorage.getItem(CART_STORE) as string))
</script>

<style scoped></style>
