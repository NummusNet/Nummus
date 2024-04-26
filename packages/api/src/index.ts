import { env } from './config/env'
import { createServer } from './server'

const start = async (): Promise<void> => {
  const server = createServer()

  await server.listen({
    host: env.HOST,
    port: env.PORT,
  })
}

start()
