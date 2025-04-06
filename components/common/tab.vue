<template>
  <div class="common-tab">
    <button v-for="tab in tabs" :key="tab.id" class="common-tab--item" :class="tabActive === tab.id ? 'bg-warning' : 'bg-white'" @click="tabActive = tab.id">
      <span class="common-tab--item__text" :class="tabActive === tab.id ? 'text-white' : 'text-black'"> {{ tab.label }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
interface ITabs {
  label: string,
  id: number
}

import { defineComponent, onMounted, ref, watch } from 'vue'
defineComponent({ name: 'CommonTab' })
const props = withDefaults(defineProps<{
  tabs?: ITabs[]
}>(), {
  tabs: () => ([
    { label: 'User', id: 1 },
    { label: 'User1', id: 2 }
  ])
})
const emits = defineEmits(['emitTab'])

const tabActive = ref<number>()
onMounted(() => {
  tabActive.value = props.tabs[0].id
})
watch(tabActive, val => {
  emits('emitTab', val)
})
</script>

<style lang="scss">
.common-tab {
  @apply rounded-[0.25rem] overflow-hidden;
  &--item {
    @apply px-5 py-2;
    transition: all 0.3s ease;
    &__text {
      @apply text-[0.875rem];
    }
  }
}
</style>
