import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { GuildsModule } from './guilds/guilds.module'
import { AuthMiddleware } from 'middlewares/auth.middleware'

@Module({
    imports: [UsersModule, GuildsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL })
    }
}
