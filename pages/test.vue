<template>
  <div class="page-test">
    <common-input v-model.ip="modelInput" />
    <CommonDialog v-model="showDialog" :destroy-on-close="true" :append-to-body="true">
      <div class="">
        1
      </div>
    </CommonDialog>

    <button @click="showDialog = true">ShowDialog</button>

  </div>
</template>

<script setup lang="ts">
const modelInput = defineModel<string>()
const showDialog = ref(false)
</script>

<style scoped>

</style>
