import dayjs from 'dayjs'
export function getCurrentTimestamp(): number {
    return dayjs().valueOf() // Trả về số millisecond
}
export function getCurrentFormatTimestamp(format: string = 'YYYY-MM-DD HH:mm:ss'): string {
    return dayjs().format(format)
}
export function formatTimestamp(timestamp: number, format: string = 'YYYY-MM-DD HH:mm:ss'): string {
    return dayjs(timestamp).format(format)
}
