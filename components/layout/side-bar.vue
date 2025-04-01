<template>
  <div class="side-bar">
    <nuxt-link v-for="nav in navList" :to="nav.to" class="side-bar--item">
      {{ }}
      <img class="size-6" :src="activeRouter(nav.to) ? nav.iconActive : nav.icon" alt="">
      <p class="side-bar--item__text" :class="{'!text-[#0E8A3E]' : activeRouter(nav.to) }">{{ nav.name }}</p>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import {getIcon} from '@/utils'

const route = useRoute()
const navList = [
  {icon: getIcon('nav/dashboard.svg'), iconActive: getIcon('nav/dashboard-active.svg'), name: 'Dashboard', to: '/'},
  {
    icon: getIcon('nav/monitoring.svg'),
    iconActive: getIcon('nav/monitoring-active.svg'),
    name: 'Monitoring',
    to: '/monitoring'
  },
  {
    icon: getIcon('nav/configuration.svg'),
    iconActive: getIcon('nav/configuration-active.svg'),
    name: 'Configuration',
    to: '/configuration'
  },
  {
    icon: getIcon('nav/administration.svg'),
    iconActive: getIcon('nav/administration-active.svg'),
    name: 'Administration',
    to: '/administration'
  },
  {
    icon: getIcon('nav/troublesetting.svg'),
    iconActive: getIcon('nav/troublesetting-active.svg'),
    name: 'Troublesetting',
    to: '/troublesetting'
  },
]
const activeRouter = (path: string) => {
  return route.path === path
}
</script>

<style lang="scss">
.side-bar {
  height: 100%;
  min-width: 13.5rem;
  background: #FFF;
  @apply py-8;
  &--item {
    @apply flex items-center gap-[0.875rem] px-8 py-4;
    &__text {
      @apply text-[1rem] text-[#818194] font-semibold;
    }

    &.router-link-active {
      @apply relative;
      &::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        bottom: 0;
        width: 4rem;
        border-radius: 0rem 0.5rem 0.5rem 0rem;
        opacity: 0.2;
        background: linear-gradient(90deg, #0E8A3E 0%, rgba(14, 138, 62, 0.00) 100%);
      }
    }
  }
}
</style>
