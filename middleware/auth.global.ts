import { getToken } from "~/services/cookie";

export default defineNuxtRouteMiddleware((to, from) => {
    const token = getToken()

    if(to.path === '/index.html') {
        return navigateTo('/')
    }

    const publicPages = ['/login', '/test', '/404']
    if (!token && !publicPages.includes(to.path)) {
        return navigateTo('/login')
    }
    if (token && to.path === '/login') {
        return navigateTo('/')
    }
})
