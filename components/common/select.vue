<template>
  <el-select
    v-model="value"
    placeholder="Select"
    class="select-common"
    popper-class="popper-select-common"
  >
    <el-option
      v-for="item in list"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script setup lang="ts">
interface IOption {
  value: string
  label: string
}

import { defineComponent, type PropType } from 'vue'
defineComponent({ name: 'CommonSelect' })

defineProps({
  list: { type: Array as PropType<IOption[]>, default: () => ([
      {
        value: 'Option1',
        label: 'Option1',
      },
      {
        value: 'Option2',
        label: 'Option2',
      },
    ]) }
})

const value = defineModel<string>()

</script>

<style lang="scss">
.popper-select-common {
  .el-select-dropdown__item {
    span {
      @apply text-[0.875rem] text-[#7D8592] leading-[120%];
    }
    &.is-selected {
      span {
        @apply text-[#15C0E6];
      }
    }
  }
}
.el-select.select-common {
  .el-select__wrapper {
    border-radius: 0.25rem;
    border: 1px solid #D8E0F0;
    background: #FFF;
    box-shadow: 0px 1px 2px 0px rgba(184, 200, 224, 0.22);
    .el-select__selected-item {
      span {
        @apply text-[0.875rem] text-[#7D8592] leading-[120%];
      }
    }
  }
}
</style>
