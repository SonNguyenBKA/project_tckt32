<template>
  <div class="layout-default">
    <layout-header />
    <div class="w-full h-full flex flex-shrink-1">
      <layout-side-bar/>
      <div class="w-full bg-[#FAFAFB] overflow-auto h-[calc(100dvh_-_90px)]">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.layout-default {
 min-height: 100dvh;
 height: 720px;
  @apply flex flex-col;
}
</style>
