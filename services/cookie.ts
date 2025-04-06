import Cookie from 'js-cookie'

const KEY_ACCESS_TOKEN = 'access_token'

export class CookieService {
    static getToken(): string | null | undefined {
        return Cookie.get(KEY_ACCESS_TOKEN) || ''
    }

    static setToken(token: string): void {
        Cookie.set(KEY_ACCESS_TOKEN, token)
    }

    static removeToken(): void {
        Cookie.remove(KEY_ACCESS_TOKEN)
    }
}
export const { getToken, setToken, removeToken } = CookieService
