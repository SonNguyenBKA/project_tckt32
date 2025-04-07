<template>
  <el-dialog v-model="modelValue" v-bind="$attrs" :title="title" class="dialog-common"
             :modal-class="'modal-dialog-common '+ modalClass"
             :show-close="false" :align-center="true" :draggable="true" width="auto">
    <template #header>
      <div class="dialog-common--header">
        <p class="text-[#0A1629] text-[1rem] font-semibold">{{ title }}</p>
        <button class="dialog-common--header__close" @close="modelValue = false">
          <img class="size-4" src="@/assets/icons/close.svg" alt="">
        </button>
      </div>
    </template>
    <template #default>
      <div class="dialog-common--body">
        <slot/>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
defineComponent({name: 'CommonDialog'})
const props = defineProps({
  modalClass: {type: String, default: ''},
  title: {type: String, default: 'Title dialog'},
})
const modelValue = defineModel<boolean>({default: false})
</script>

<style lang="scss">
.modal-dialog-common {
  backdrop-filter: blur(10px);
  .dialog-common {
    min-width: 512px;
    border-radius: 1rem;
    background: #FFF;
    box-shadow: 0px 6px 58px 0px rgba(121, 145, 173, 0.20);
    padding: 0;
    .el-dialog__header {
      @apply pb-0;
    }
    &--header {
      @apply flex items-center justify-between gap-4 p-4;
      background: rgba(21, 192, 230, 0.10);
      &__close {
        //@apply size-[2rem] rounded-[0.75rem] bg-[#F4F9FD];
        //@apply flex items-center justify-center;
      }
    }
    &--body {
      @apply p-4;
    }
  }
}
</style>
