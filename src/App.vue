<template>
  <header>
    <nav
      className="flex items-center justify-between h-[50px] bg-slate-500 text-white mb-2 overflow-hidden"
    >
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
            class="transition w-10 font-bold inline-block bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500 rounded-full text-black px-2 py-0.5 ml-2"
          >
            <p class="font-medium text-center">{{ cartStore.count }}</p>
          </div>
        </RouterLink>
      </div>
      <div>
        <input
          v-model.lazy="productStore.searchQuery"
          class="rounded-l focus:outline-none h-[30px] px-1 text-black"
        />
        <button
          class="btn rounded-r transition ease-in-out duration-300 px-3 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500 h-[30px] w-[70px] mr-3"
        >
          <p class="font-bold text-black"><v-icon name="io-search" scale="1.2" /></p>
        </button>
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

const productStore = useProductStore()
const cartStore = useCartStore()

productStore.fetchProducts()

usePersistCart()
</script>

<style scoped></style>
