import type { Greeting } from '../types'

export default defineEventHandler((): Greeting => {
  return {
    hello: 'world',
  }
})
