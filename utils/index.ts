export const delay = (timeMs: number) => {
  return new Promise(resolve => setTimeout(resolve, timeMs))
}
export const simulateNetworkError = async (
    delay: number = 1000
): Promise<never> => {
  await new Promise(resolve => setTimeout(resolve, delay))

  throw new Error('Network Error: Unable to connect to server')
}
export const getIcon = (path: string): any => {
  const src = `../assets/icons/${path}`
  return new URL(src, import.meta.url)
}
