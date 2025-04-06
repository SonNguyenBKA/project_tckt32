<template>
  <div class="system-info">
    <div class="system-info--header">
      <div class="flex items-center gap-1.5">
        <img class="size-8" :src="iconDashboard.systemInfo" alt=""/>

        <div class="flex flex-col gap-1">
            <span class="text-[#0A1629] text-[1rem] font-semibold leading-[120%]"
            >System Information</span
            >
          <p class="text-[#91929E] text-[0.875rem] font-medium leading-[120%]">
            Last Update: 8/4/2024 08:00:00 AM
          </p>
        </div>
      </div>
    </div>
    <div class="system-info--body">
      <div class="system-info--body__table">
        <div v-for="item in dataTable" class="table-row-item">
          <div class="flex items-center justify-center rounded-full bg-[#0E8A3E] size-10">
            <img class="size-6" :src="item.icon" alt="icon">
          </div>
          <div class="flex flex-col gap-0.5">
            <p class="text-[#030229] text-[0.875rem] font-semibold leading-[120%]">{{ item.label }}</p>
            <p class="text-[#91929E] text-[0.875rem] font-medium leading-[120%]">{{ item.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import iconDashboard from '@/assets/icons/dashboard'
defineComponent({name: 'DashboardSystemInfo'})
const dataTable = ref([
  { label: 'Hostname', value: 'Admin', icon: iconDashboard.hostname  },
  { label: 'Device Uptime', value: '2 day, 36 minutes', icon: iconDashboard.deviceUptime },
  { label: 'System Time', value: '21:34:00, UTC Sun Apr 8 2024', icon: iconDashboard.systemTime },
  { label: 'Device Type', value: 'APS32', icon: iconDashboard.deviceType },
])

</script>

<style lang="scss">
.system-info {
 &--header {
   padding: 1rem;
   border-bottom: 1px solid #e6ebf5;
 }
  &--body {
    padding: 2rem;
    &__table {
      @apply flex flex-col gap-3 bg-[#F4F9FD] p-4 w-full rounded-[0.5rem];
      .table-row-item {
       @apply p-2 flex items-center gap-2  rounded-[0.5rem];
        background: rgba(255, 255, 255, 0.85);
        box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
      }
    }
  }
}
</style>
