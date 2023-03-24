import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient, Guild } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class GuildsService {

    // Get all Guilds by offset
    async getGuildsByOffset(offset: number): Promise<Guild[] | HttpException | undefined> {
        // Find all Guilds by offset
        const guilds = await prisma.guild.findMany({
            where: {

            },
            take: offset * 50,
            skip: offset === 1 ? 0 : offset * 50
        })

        // If aren't Guilds in DB then return HttpException
        if (guilds.length === 0) return new HttpException("There aren't any guilds in DB", HttpStatus.NOT_FOUND)

        // If there're Guilds in DB then return Guilds
        return guilds

    }

    // Get Guild from DB
    async getGuild(id: bigint): Promise<Guild | HttpException | undefined> {
        // Find Guild by id
        const guild = await prisma.guild.findUnique({
            where: {
                id: id
            }
        })

        // If Guild in DB then return Guild
        if (guild) return guild

        // If Guild isn't in DB then return HttpException
        if (!guild) return new HttpException(`Cannot find guild with id: ${id}`, HttpStatus.NOT_FOUND)
    }

}
