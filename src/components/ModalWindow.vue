<template>
  <div class="modal" v-if="show" @click="closeModal">
    <div class="content"><slot> </slot></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean
}>()

const emit = defineEmits(['update:show'])

function closeModal() {
  emit('update:show', false)
}
</script>

<style scoped>
.modal {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.content {
  margin: auto;
  background: rgb(255, 255, 255);
  border-radius: 12px;
  min-height: 100px;
  min-width: 300px;
  padding: 20px;
}
</style>
