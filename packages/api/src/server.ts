import helmet from '@fastify/helmet'
import fastify from 'fastify'
import cors from '@fastify/cors'
import { config } from './config/config'
import healthRoute from './routes/health'

export function createServer() {
  const server = fastify(config)
  server.register(cors, {
    origin: '*',
    credentials: true,
  })

  server.register(helmet)

  server.register(healthRoute)

  server.setErrorHandler((error, req, res) => {
    req.log.error(error.toString())
    res.send({ error })
  })

  return server
}

export default createServer
