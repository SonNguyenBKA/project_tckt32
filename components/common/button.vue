<template>
  <button class="button-common" :class="[type, {'loading': loading}]" @click.prevent="$emit('click')">
    <template v-if="loading">
      <img class="size-6 animate-spin" src="@/assets/icons/loading-white.svg" alt="">
    </template>
    <template v-else>
      <img v-if="iconLeft" class="size-6" :src="iconLeft" alt="">
      <span class="button-common--text">{{ text }}</span>
      <img v-if="iconRight" class="size-6" :src="iconRight" alt="">
    </template>
  </button>
</template>

<script setup lang="ts">
type TButton = 'primary' | 'warning' | 'error'
defineComponent({ name: 'ButtonCommon' })
defineProps({
  text: { type: String, default: 'text' },
  iconLeft: { type: Object, default: null },
  iconRight: { type: Object, default: null },
  type: { type: String as PropType<TButton>, default: 'primary' },
  loading: { type: Boolean, default: false}
})
</script>

<style lang="scss">
.button-common {
  padding: 0.75rem 1rem;
  min-width: 10rem;
  border-radius: 0.25rem;
  transition: all 0.25s linear;
  @apply flex justify-center items-center gap-[0.375rem];
  &--text {
    color: #FFF;
    font-size: 1rem;
    font-weight: 700;
    line-height: 150%;
  }
  &.primary {
    background: #0E8A3E;
    box-shadow: 0px 6px 12px 0px rgba(14, 138, 62, 0.25);
  }
  &.warning {
    background: #FFB506;
    box-shadow: 0px 6px 12px 0px rgba(255, 181, 6, 0.25);
  }
  &.error {
    background: #D11A2A;
    box-shadow: 0px 6px 12px 0px rgba(209, 26, 42, 0.25);
  }
  &.loading, &:disabled {
    background: #C4C4CF;
    box-shadow: 0px 6px 12px 0px rgba(196, 196, 207, 0.25);
    cursor: not-allowed;
  }
  &:hover {
    opacity: 0.9;
  }
}
</style>
