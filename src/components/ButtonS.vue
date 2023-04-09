<template>
  <button class="btn px-4 py-2 border rounded-lg w-50">
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
.btn {
  background: rgb(255, 255, 255);
}
.btn:hover {
  background: rgb(95, 184, 125);
  color: aliceblue;
}
</style>
