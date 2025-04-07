<template>
  <div class="dashboard-page">
    <CommonTab :tabs="tabs" @emitTab="active => tabActive = active" class="mb-4"/>
    <TabDashboard v-if="tabActive === 1" />
    <TabDeviceView v-else />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CommonTab from '@/components/common/tab.vue'
import TabDashboard from '@/components/pages/dashboard/tab-dashboard.vue'
import TabDeviceView from "~/components/pages/dashboard/tab-device-view.vue";

const tabs = ref([
  { label: 'Dashboard', id: 1},
  { label: 'Device View', id: 2},
])
const tabActive = ref(tabs.value[0].id)
</script>

<style lang="scss">
.dashboard-page {
  padding: 1rem 2rem;
}
</style>
