<script setup lang="ts">
import uploadVue  from "../../../examples/upload/basic.vue"

defineProps({
  file: {
    type: String,
    required: true,
  },
  demo: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="example-showcase">
    <uploadVue v-if="file=='upload/basic'"></uploadVue>
    <!-- <component :is="demo" v-if="demo" v-bind="$attrs" /> -->
  </div>
</template>

<style lang="less" scoped>
.example-showcase {
  padding: 1.5rem;
  margin: 0.5px;
  background-color: var(--bg-color);
}
</style>
