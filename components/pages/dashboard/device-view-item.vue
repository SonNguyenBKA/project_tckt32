<template>
  <div class="device-view-item">
    <template v-if="type === 1">
      <div class="flex flex-col gap-2 items-between justify-around h-full">
        <div v-for="itemOp in dataDevice.op" class="flex justify-center items-center gap-2">
          <p class="text-label">{{ itemOp.name }}</p>
          <img class="size-4" :src="statusImgOp(itemOp.value)" alt="">
        </div>
        <div v-for="itemFx in dataDevice.fx" class="flex flex-col justify-center items-center gap-2">
          <p class="text-label">{{ itemFx.name }}</p>
          <img class="w-6" :src="statusImgFx(itemFx.value)" alt="">
        </div>
      </div>
    </template>
    <template v-else>
      <div class="flex flex-col items-center justify-around h-full">
        <div class="flex justify-center items-center gap-2">
          <p class="text-label">OP</p>
          <img class="size-4" :src="statusImgOp(1)" alt="">
        </div>
        <div class="grid grid-cols-2 gap-3">
          <p class="text-label text-center">MIC</p>
          <P class="text-label">LOA</P>
          <div class="flex items-center gap-1">
            <span class="text-label">1</span>
            <img class="size-4" :src="iconLight" alt="">
          </div>
          <img class="size-4" :src="iconError" alt="">
          <div class="flex items-center gap-1">
            <span class="text-label">2</span>
            <img class="size-4" :src="iconLight" alt="">
          </div>
          <img class="size-4" :src="iconError" alt="">
        </div>
        <div class="flex justify-center items-center gap-2">
          <p class="text-label">OP</p>
          <img class="size-4" :src="statusImgOp(1)" alt="">
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import iconLight from '@/assets/icons/circle-light.svg'
import iconDark from '@/assets/icons/circle-dark.svg'
import iconError from '@/assets/icons/circle-red.svg'
import iconDashboard from "@/assets/icons/dashboard";

import { EnumOp, EnumFx } from '@/types/enums'

defineComponent({ name: 'DashboardDeviceViewItem' })
defineProps({
  type: { type: Number, default: 1 }
})

const dataDevice = ref({
  op: [
    {name: 'OP', value: EnumOp.ENABLE},
    {name: '1', value: EnumOp.ENABLE},
    {name: '2', value: EnumOp.DISABLE},
    {name: '3', value: EnumOp.ENABLE},
    {name: '4', value: EnumOp.ENABLE},
    {name: '5', value: EnumOp.ERROR},
    {name: '6', value: EnumOp.ENABLE},
    {name: '7', value: EnumOp.ENABLE},
    {name: '8', value: EnumOp.ENABLE},
  ],
  fx: [
    {name: 'FXO1-4', value: EnumFx.ENABLE},
    {name: 'FXO1-4', value: EnumFx.DISABLE},
    {name: 'FXO1-4', value: EnumFx.ERROR},
  ]
})

const statusImgOp = (status: number) => {
  switch (status) {
    case EnumOp.DISABLE: return iconDark;
    case EnumOp.ENABLE: return iconLight;
    case EnumOp.ERROR: return iconError;
    default: return iconLight;
  }
}
const statusImgFx = (status: number) => {
  switch (status) {
    case EnumFx.DISABLE: return iconDashboard.lan;
    case EnumFx.ENABLE: return iconDashboard.lanActive;
    case EnumFx.ERROR: return iconDashboard.lanError;
    default: return iconDashboard.lanActive;
  }
}


</script>

<style lang="scss">
.device-view-item {
  @apply h-full py-4;
 .text-label {
   @apply text-[#0A1629] text-[0.75rem] font-semibold leading-[120%];
 }
}
</style>
