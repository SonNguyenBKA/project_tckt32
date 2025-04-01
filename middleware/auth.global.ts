import {CookieService} from "~/services/cookie";

export default defineNuxtRouteMiddleware((to, from) => {
    const token = CookieService.getToken()
    const publicPages = ['/login']
    if (!token && !publicPages.includes(to.path)) {
        return navigateTo('/login')
    }
    if (token && to.path === '/login') {
        return navigateTo('/')
    }
})
