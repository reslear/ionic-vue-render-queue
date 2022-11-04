const p = performance.now()

export const log = (str: string) =>
  console.log(`${str} (${Math.floor(performance.now() - p)}ms)`)
