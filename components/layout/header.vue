<template>
  <header class="layout-header">
    <img class="max-w-[6rem]" src="@/public/logo.svg" alt="">
    <div class="w-full flex justify-start">
      <div class="flex flex-col justify-center items-center">
        <p class="layout-header--title">BINH CHỦNG THÔNG TIN LIÊN LẠC</p>
        <p class="layout-header--title">TRUNG TÂM KỸ THUẬT THÔNG TIN CÔNG NGHỆ CAO</p>
        <p class="layout-header--sub-title">HTC-APS32</p>
      </div>
    </div>
    <div class="layout-header--nav">
      <p class="text-nowrap font-medium">Welcome admin</p>
      <!--      <nuxt-link>-->
      <!--        {{  }}-->
      <!--      </nuxt-link>-->
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.layout-header {
  background: #F4F9FD;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @apply flex items-center gap-2 px-4 py-2 sticky top-0 z-[10];
  &--title {
    @apply text-[1rem] font-medium leading-[120%];
  }

  &--sub-title {
    @apply text-[1rem] font-bold leading-[120%] mt-1;
  }
}
</style>
