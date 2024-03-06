// https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: 'server',
  experimental: {
    // https://nitro.unjs.io/guide/utils#async-context-experimental
    asyncContext: true,
    // /_nitro/swagger && /_nitro/openapi.json
    // https://nitro.unjs.io/config#openapi
    openAPI: true,
  },

  alias: {
    '@types': './types',
  },
})
