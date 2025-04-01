<template>
  <div class="login-page">
    <div class="login-page--content">
      <img class="w-[6rem]" src="@/public/logo.svg" alt="">
      <h1 class="login-page--content__title">BỘ GIẢ LẬP 32 ĐIỆN THOẠI TƯƠNG TỰ</h1>
      <el-form :model="formLogin" ref="ruleFormRef" :rules="rules" label-width="auto" class="form-login"
               @validate="handleValidateItem">
        <FormItemInput v-model="formLogin.username" type="text" prop="username" placeholder="Username"
                       label="Username"/>
        <FormItemInput v-model="formLogin.password" type="password" prop="password" placeholder="Password"
                       label="Password"/>
        <ButtonCommon class="mt-8" text="Login" :loading="loadingBtn" @click.prevent="login"/>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash'
import {reactive} from 'vue'
import type {FormInstance, FormItemProp, FormRules} from 'element-plus'
import FormItemInput from "~/components/common/form/form-input.vue";
import ButtonCommon from "~/components/common/button.vue";
import {delay} from "~/utils";
import useAuthStore from '@/stores/auth'
definePageMeta({
  layout: 'normal'
})
const authStore = useAuthStore()
const loadingBtn = ref(false)
const formLogin = reactive({
  username: '',
  password: ''
})
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  username: [{required: true, message: 'Username is required !', trigger: ['blur', 'change']}],
  password: [{required: true, message: 'Password is required !', trigger: ['blur', 'change']}],
})
const handleValidateItem = (callback) => {
  // console.log(callback)
}
const login = _.debounce(() => {
  ruleFormRef.value?.validate(async isValid => {
    if (isValid) {
      console.log('call api')
      loadingBtn.value = true
      await authStore.login(formLogin)
      loadingBtn.value = false
    }
  })
}, 500)

onMounted(() => {
})
</script>

<style lang="scss">
.login-page {
  background: #F4FDFB;
  @apply min-h-[100dvh] flex justify-center items-center;
  &--content {
    @apply px-[10rem] py-[5rem] bg-white rounded-[3rem];
    //box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    box-shadow: rgba(14, 138, 62, 0.15) -5px 5px, rgba(14, 138, 62, 0.1) -10px 10px, rgba(14, 138, 62, 0.08) -15px 15px, rgba(14, 138, 62, 0.05) -20px 20px, rgba(14, 138, 62, 0.01) -25px 25px;
    @apply flex flex-col justify-center items-center;
    &__title {
      @apply text-[#0A1629] text-[1.375rem] font-semibold mt-8;
    }

    .form-login {
      @apply mt-8;
      @apply flex flex-col items-center;
    }
  }
}
</style>
