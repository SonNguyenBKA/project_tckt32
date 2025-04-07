<template>
  <div class="dashboard-tab-device-view">
    <div class="dashboard-tab-device-view--content">
      <div class="side-left">
        <div class="w-[46px] h-[30px] bg-white rounded-[0.25rem]" />
        <div class="w-[24px] h-[316px] bg-white rounded-[0.25rem] opacity-60" />
        <div class="w-[46px] h-[30px] bg-white rounded-[0.25rem]" />
      </div>
      <div class="side-content">
        <div class="side-content--header">
         <div class="flex items-center gap-2">
           <img class="w-[55px]" src="../../../public/logo.svg" alt="">
           <div class="flex flex-col justify-center items-center">
             <p class="text-[#0A1629] text-[0.875rem] font-semibold leading-[120%]">BINH CHỦNG THÔNG TIN LIÊN LẠC</p>
             <p class="text-[#0A1629] text-[0.875rem] font-semibold leading-[120%]">TRUNG TÂM KỸ THUẬT THÔNG TIN CÔNG NGHỆ CAO</p>
           </div>
         </div>

          <div class="flex flex-col justify-center items-center">
            <p class="text-[#0A1629] text-[0.875rem] font-semibold leading-[120%]">BỘ GIẢ LẬP 32 MÁY ĐIỆN THOẠI</p>
            <p class="text-[#0A1629] text-[0.875rem] font-semibold leading-[120%]">HTC-APS32</p>
          </div>
        </div>
        <div class="side-content--body">
          <div v-for="i in 7" class="side-content--body__item">
2
          </div>
          <div class="side-content--body__item-right col-span-2">

          </div>
        </div>
        <div class="side-content--footer">

        </div>
      </div>
      <div class="side-right">
        <div class="w-[46px] h-[30px] bg-white rounded-[0.25rem]" />
        <div class="w-[24px] h-[316px] bg-white rounded-[0.25rem] opacity-60" />
        <div class="w-[46px] h-[30px] bg-white rounded-[0.25rem]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineComponent({ name: 'TabDeviceView' })
const
</script>

<style lang="scss">
.dashboard-tab-device-view {
  @apply w-full flex justify-center pt-4;
  &--content {
    @apply flex gap-2 h-[500px];
    .side-left, .side-right {
      background: rgba(33, 85, 163, 0.16);
      box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
      @apply w-[4.25rem] h-full flex-shrink-0 rounded-lg;
      @apply flex flex-col justify-center items-center gap-4;
    }
    .side-content {
      @apply w-full min-w-[800px] flex flex-col gap-2;
      &--header {
        background: rgba(33, 85, 163, 0.16);
        box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
        @apply w-full flex justify-between items-center rounded-lg px-4 py-2;
      }
      &--body {
        //background: rgba(33, 85, 163, 0.16);
        box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
        @apply w-full h-full rounded-lg;
        @apply grid grid-cols-9 gap-2;
        &__item {
          background: rgba(33, 85, 163, 0.1);
          @apply w-full h-full rounded-lg;
        }
        &__item-right {
          background: rgba(33, 85, 163, 0.1);
          @apply w-full h-full rounded-lg;
        }
      }
      &--footer {
        background: rgba(33, 85, 163, 0.16);
        box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
        @apply w-full h-[64px] rounded-lg;
      }
    }
  }
}
</style>
