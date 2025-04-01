import {CookieService} from "~/services/cookie";
import {simulateNetworkError} from "~/utils";
import {defineStore} from "pinia";
import {messageError} from "~/utils/message";

const useAuthStore = defineStore('useAuthStore', {
    state: () => ({
        token: null
    }),
    actions: {
        async login(payload: any) {
            const router = useRouter()
            try {
                await delay(2000)
                if (payload.username === 'admin' && payload.password === '123') {
                    CookieService.setToken('me7CisZbT8qp0lVtQ7wtjJ4IBmg4EViIiCb9eh6UwDmZiS26XZp68Sg0wt98jDbV')
                    messageSuccess('Login success !')
                    await router.push('/')
                } else {
                    await simulateNetworkError()
                }
            } catch (e) {
                messageError('Login fail, please try again !')
                await router.push('/login')
            }

        }
    }
})
export default useAuthStore
