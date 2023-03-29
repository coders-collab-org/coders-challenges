import { Injectable, NestMiddleware } from '@nestjs/common'
import { FastifyRequest, FastifyReply } from 'fastify'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: FastifyRequest, res: FastifyReply, next: () => void) {
        console.log(req.headers)
        next()
    }
}