<template>
  <div ref="root">
    <div >
      {{scrollTop}}{{ fixed }}
    </div>
    <div v-for="(item,index) in affixStyle" :key="index">
      {{item}}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, shallowRef, watchEffect } from 'vue'
// import { affixEmits } from './affix'

const COMPONENT_NAME = 'ElAffix'
defineOptions({
  name: COMPONENT_NAME,
})

// const emit = defineEmits(affixEmits)

const root = shallowRef<HTMLDivElement>()
const scrollContainer = shallowRef<HTMLElement | Window>()
const fixed = ref(false)
const scrollTop = ref(0)

const affixStyle = <any[]>[1,2,3]

const update = () => {
  if (!scrollContainer.value) return

  scrollTop.value =
    scrollContainer.value instanceof Window
      ? document.documentElement.scrollTop
      : scrollContainer.value.scrollTop || 0
}

// watch(fixed, (val) => emit('change', val))

onMounted(() => {
})

watchEffect(update)

defineExpose({
  /** @description update affix status */
  update,
})
</script>
