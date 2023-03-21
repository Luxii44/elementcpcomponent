<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'WmButton',
})
// 定义组件类型
// type ButtonTypes =
//   | 'default'
//   | 'primary'
//   | 'success'
//   | 'danger'

// defineProps<{
//   type: ButtonTypes
// }>()

const _ref = ref<HTMLButtonElement>()
defineExpose({
  ref: _ref
})
</script>

<template>
  <button ref="_ref" :class="['wmbutton', 'wmbutton--']" type="button">
    <slot></slot>
  </button>
</template>

<style scoped>
</style>
