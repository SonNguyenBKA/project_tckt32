// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: process.env.APP_NAME || '',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
      ]
    }
  },
  // ssr: true,  // Server-Side Rendering khi build
  // nitro: {
  //   preset: 'static',
  //   prerender: {
  //     crawlLinks: true,  // Tự động tìm và render tất cả các trang liên kết
  //     routes: ['/']      // Thêm các route khác nếu cần
  //   }
  // },
  css: ['~/assets/styles/index.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@element-plus/nuxt'
  ],
  plugins: ['@/plugins/pinia.ts'],
  devServer: {
    host: '0.0.0.0',
    port: Number(process.env['PORT']) || 8000
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.VITE_API_URL,
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `  @use "@/assets/styles/variables.scss";`
        }
      }
    },
  }
})
