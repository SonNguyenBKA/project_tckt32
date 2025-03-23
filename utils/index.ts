export const delay = (timeMs: number) => {
  return new Promise(resolve => setTimeout(resolve, timeMs))
}
