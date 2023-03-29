import { Controller, Get, Param, Query } from '@nestjs/common'
import { GuildsService } from './guilds.service'

@Controller('guilds')
export class GuildsController {
    constructor(private readonly guildsService: GuildsService) { }

    @Get()
    async getGuildsByOffset(@Query(`offset`) offset: number) {
        return await this.guildsService.getGuildsByOffset(offset)
    }

    @Get(":id")
    async getGuild(@Param(`id`) id: bigint) {
        return await this.guildsService.getGuild(id)
    }

}
