<template>
  <div class="page-test">
    <common-input v-model.onlyNumber="modelInput" />
  </div>
</template>

<script setup lang="ts">
const modelInput = defineModel<string>()
</script>

<style scoped>

</style>
