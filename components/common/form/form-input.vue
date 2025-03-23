<template>
  <el-form-item class="form-item-input" :label="label" :prop="prop">
    <el-input :maxlength="maxlength" v-model="modelValue" :type="typeInput" :placeholder="placeholder" :maxLength="maxlength" @input="handleInput">
      <template #suffix>
        <button v-if="type === 'password'" @click.prevent="showPass = !showPass">
          <img class="size-5" :src="showPass ? iconShowPass : iconHidePass" alt="">
        </button>
      </template>
    </el-input>
  </el-form-item>
</template>

<script setup lang="ts">
import iconShowPass from '@/assets/icons/show-pass.svg'
import iconHidePass from '@/assets/icons/hide-pass.svg'

type TInput = 'text' | 'password'
defineComponent({ name: 'FormItemInput' })
const props = defineProps({
  prop: { type: String, default: 'prop-form-item' },
  label: { type: String, default: 'label' },
  placeholder: { type: String, default: 'Placeholder' },
  maxlength: { type: Number, default: 50 },
  type: { type: String as PropType<TInput>, default: 'text' },
  onlyNumber: { type: Boolean, default: false }
})
const modelValue = defineModel<any>()
const showPass = ref(false)
const typeInput = ref(props.type)

const handleInput = (val: string) => {
  if (props.onlyNumber) {
    let filteredValue = val.replace(/[^0-9.]/g, '')
    modelValue.value = filteredValue.replaceAll('..', '.')
  } else {
    modelValue.value = val
  }
}

watch(showPass, val => {
  if (val) {
    typeInput.value = 'text'
  } else {
    typeInput.value = 'password'
  }
})

</script>

<style lang="scss">
.form-item-input.el-form-item {
  @apply flex flex-col gap-2;
  &.is-error {
    @apply mb-8;
  }
  .el-form-item__label {
    @apply text-[#7D8592] text-[0.875rem] font-bold leading-[150%] px-[0.3875rem] h-fit;
    &::before {
      all: unset !important;
    }
  }
  .el-form-item__content {
    .el-input {
      .el-input__wrapper {
        all: unset;
        border-radius: 0.25rem;
        border: 1px solid #D8E0F0;
        background: #FFF;
        box-shadow: 0px 1px 2px 0px rgba(184, 200, 224, 0.22);
        padding: 0.375rem 1rem;
        min-width: 25.1875rem;
        @apply flex items-center;
        .el-input__inner {
          color: #7D8592;
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.5rem; /* 171.429% */
        }
        .el-input__suffix {
          @apply flex-shrink-0;
        }
      }
    }
    .el-form-item__error {
      @apply px-2 pt-2 text-[#D11A2A];
    }
  }
}
</style>
