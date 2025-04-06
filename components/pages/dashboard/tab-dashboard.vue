<template>
  <div class="tab-dashboard">
    <div class="tab-dashboard--cpu-mem">
      <div class="cpu-mem-header">
        <div class="flex items-center gap-1.5">
          <img class="size-8" src="@/assets/icons/cpu.svg" alt="" />

          <div class="flex flex-col gap-1">
            <span class="text-[#0A1629] text-[1rem] font-semibold leading-[120%]"
              >CPU & Memory Pressure Graph</span
            >
            <p class="text-[#91929E] text-[0.875rem] font-medium leading-[120%]">
              Last Update: 8/4/2024 08:00:00 AM
            </p>
          </div>
        </div>
      </div>
      <div class="cpu-mem-body">
        <div class="cpu-mem-body--cpu">
          <div class="cpu-mem-body--cpu__table">
            <p class="text-[#15C0E6] text-[0.875rem] font-medium bg-[#15C0E619] p-2 w-fit">CPU Utilization</p>
           <div class="flex items-center gap-2 mt-4">
             <p class="text-[#7D8592] text-[0.875rem] font-semibold leading-[120%]">CPU:</p>
             <CommonSelect :list="listOption" v-model="selectCpu"/>
           </div>
            <el-table :data="tableData" style="width: 100%" class="mt-4">
              <el-table-column prop="process" label="Process" />
              <el-table-column prop="cpu_percent" label="CPU %" />
            </el-table>
          </div>
          <ChartBar />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import CommonSelect from '@/components/common/select.vue'
import ChartBar from '@/components/pages/dashboard/chart-bar.vue'

defineComponent({ name: 'TabDashboard' })

const listOption = ref([
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
])
const selectCpu = ref('1')

const tableData = ref([
  {
    process: 'User',
    cpu_percent: '1.50',
  },
  {
    process: 'System',
    cpu_percent: '1.50',
  },
  {
    process: 'Idle',
    cpu_percent: '1.50',
  },
])

</script>

<style lang="scss">
.tab-dashboard {
  &--cpu-mem {
    background: white;
    border-radius: 1rem;

    .cpu-mem-header {
      padding: 1rem;
      border-bottom: 1px solid #e6ebf5;
    }

    .cpu-mem-body {
      padding: 2rem;
      @apply w-full grid grid-cols-2 gap-8;
      &--cpu {
        background: #F4F9FD;
        padding: 1rem;
        @apply w-full grid grid-cols-2 gap-4;
        &__table {
          @apply flex flex-col;
          .el-table {
           border: 1px solid #e6ebf5;
            border-radius: 0.5rem;
            .el-table__header {
              .cell {
                @apply text-[#7D8592] text-[0.875rem] font-semibold leading-[150%];
              }
            }
            .el-table__body {
              .cell {
                @apply text-[#7D8592] text-[0.875rem] font-medium leading-[150%];
              }
            }
          }
        }
      }
    }
  }
}
</style>
