<template>
  <div>
    <el-input v-model="modelValue" maxlength="10000" />
  </div>
</template>

<script setup lang="ts">
const [modelValue, modelModifiers] = defineModel<string>({
  set(value) {
    if(modelModifiers.trim) {
      return value.trim()
    }
    if (modelModifiers.capitalize) {
      return value.capitalize()
    }
    if (modelModifiers.uppcase) {
      return value.toUpperCase()
    }
    if (modelModifiers.onlyNumber) {
      return value.replace(/\D/g, "")
    }
    if (modelModifiers.ip) {
      return value.replace(/[^0-9.]/g, "").replaceAll('..', '.')
    }
    return value
  }
})
</script>

<style scoped>

</style>
