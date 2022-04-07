import { defineNuxtModule, addServerMiddleware } from '@nuxt/kit'
import { join } from 'path'

export default defineNuxtModule({
  setup(_, nuxt) {
    nuxt.options.target = "static"
    addServerMiddleware({
      handler: join(__dirname, 'runtime', 'test.ts'),
      route: '/api/test',
    })
  }
})