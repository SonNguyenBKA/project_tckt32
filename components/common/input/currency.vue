<template>
  <el-form-item :class="['form-item-input' + ' ' + classForm]" :prop="prop">
    <el-input
      v-model="modelValue"
      :class="[classDefault + ' ' + classExtra]"
      :type
      :placeholder="placeholder"
      :disabled="disabled"
      inputmode="decimal"
      :formatter="(value: any) => formatter(value)"
      :parser="(value: any) => parser(value)"
      @focus="focus"
      @blur="blur"
      @keydown="handleKeyDown"
    />
  </el-form-item>
</template>

<script setup lang="ts">
defineComponent({ name: 'CurrencyInputGucard' })
const props = defineProps({
  classForm: { type: String, default: '' },
  classDefault: { type: String, default: 'input-common' },
  classExtra: { type: String, default: '' },
  isFullWidth: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  placeholder: { type: String, default: '' },
  type: { type: String, default: 'text' },
  label: { type: String, default: 'label' },
  prop: { type: String, default: '' },
  maxDigitPrice: { type: Number, default: 4 },
  min: { type: Number, default: 0 }
})
const modelValue = defineModel<string>({ default: '' })
const isFocus = ref(!!modelValue.value.toString().trim())
const isFocusIn = ref(false)

const checkFalsy = (input: string) => {
  return !!input.toString().trim()
}
const focus = () => {
  isFocus.value = true
  isFocusIn.value = true
}
const blur = () => {
  if (checkFalsy(modelValue.value)) {
    isFocus.value = true
    isFocusIn.value = true
    return
  }
  modelValue.value = ''
  isFocus.value = false
  isFocusIn.value = false
}
const handleKeyDown = (event: any) => {
  if (!modelValue.value?.includes(',') && event.key === ',' && modelValue.value !== '') {
    modelValue.value = modelValue.value + '.'
  }
}

const formatter = (val: any) => {
  const valRaw = val.replace(/\B(?=(\d{3})+(?!\d))/g, ',').split('.')
  if (!val) {
    return val
  }

  if (valRaw.length === 1) {
    return valRaw.at(0)
  }
  return [valRaw.at(0), valRaw.at(1)?.replaceAll(',', '')].join('.')
}
const parser = (val: any) => {
  val = val.replace(/\$\s?|(,*)/g, '')
  if (!val.includes('.') && val.at(0) === '0') {
    val = val.replace('00', '0')
    if (val.at(1) !== '.') {
      val = Number(val).toString()
    }
  }
  return val
}

const handleInput = (newVal: string, oldVal: string) => {
  newVal = newVal.toString()
  const valInput = newVal.replace(',', '.')

  if (newVal === ',' && !modelValue.value.includes(',')) {
    modelValue.value = valInput
  }

  if (isNaN(+valInput)) {
    modelValue.value = oldVal + ''
  } else {
    const decimals = valInput.split('.')
    if (decimals.at(1)) {
      if (decimals.at(1) === '0000') {
        modelValue.value = decimals.at(0) + ''
      } else {
        const check = decimals.at(0) + '.' + (decimals.at(1) || '').slice(0, props.maxDigitPrice ? props.maxDigitPrice : 3)
        setTimeout(() => {
          modelValue.value = check
        }, 0)
      }
    }
    modelValue.value = modelValue.value.toString().replace(',', '.')
  }
}

onMounted(() => {
  if (!isNaN(+modelValue.value)) {
    const decimal = modelValue.value.toString().split('.')
    modelValue.value = decimal.at(0) + '.' + decimal.at(1)?.toString()?.slice(0, props.maxDigitPrice)
  } else {
    modelValue.value = ''
  }
})

watch(modelValue, (newVal, oldVal) => {
  handleInput(newVal, oldVal)
  isFocus.value = !!newVal || isFocusIn.value
})
</script>

<style lang="scss" scoped></style>
