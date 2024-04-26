import { type FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'

export const healthRoute: FastifyPluginAsyncTypebox = async fastify => {
  fastify.get('/health', { logLevel: 'error' }, (_, reply) => {
    reply.code(200)
  })
}

export default healthRoute
