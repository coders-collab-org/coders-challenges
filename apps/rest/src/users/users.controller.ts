import { Body, Controller, Get, HttpException, Param, Post, Query } from '@nestjs/common';
import { User } from '@prisma/client'
import { topType } from './types/types';
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    async getUsersByOffset(@Query(`offset`) offset: number): Promise<User[] | HttpException | undefined> {
        return await this.usersService.getUsersByOffset(offset)
    }

    @Get(":id")
    async getUser(@Param(`id`) id: bigint): Promise<User | HttpException | undefined> {
        return await this.usersService.getUser(id)
    }

    @Get()
    async getTopUsers(@Query(`top_type`) top_type: topType, @Query(`offset`) offset: number): Promise<User[] | HttpException | undefined> {
        return await this.usersService.getTopUsers(top_type,offset)
    }


}
