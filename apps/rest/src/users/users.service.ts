import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { PrismaClient, User } from '@prisma/client'
import { topType } from './types/types'
import prismaClient from 'prisma'

const prisma = new PrismaClient()

@Injectable()
export class UsersService {

    // Get all Users by offset
    async getUsersByOffset(offset: number): Promise<User[] | HttpException | undefined> {
        // Find all Users by offset
        const users = await prisma.user.findMany({
            where: {

            },
            take: offset * 50,
            skip: offset === 1 ? 0 : offset * 50
        })

        // If aren't Users in DB then return HttpException
        if (users.length === 0) return new HttpException("There aren't any users in DB", HttpStatus.NOT_FOUND)

        // If there're Users in DB then return Users
        return users

    }

    // Get User from DB
    async getUser(id: bigint): Promise<User | HttpException | undefined> {

        // Find User in DB by id
        const user = await prisma.user.findUnique({
            where: {
                id: BigInt(id)
            }
        })
        // If User in DB then return User
        if (user) return user

        // If User isn't in DB then return HttpException
        if (!user) return new HttpException(`Cannot find user with id: ${id}`, HttpStatus.NOT_FOUND)

    }

    // Get top Users
    async getTopUsers(top_type: topType, offset: number): Promise<User[] | HttpException | undefined> {
        if (top_type === "points") {
            // Find all top Users by points that larger than 0 and offset
            const users = await prisma.user.findMany({
                where: {
                    points: {
                        gt: 0
                    }
                },
                orderBy: {
                    points: "desc"
                },
                take: offset * 50,
                skip: offset === 1 ? 0 : offset * 50
            })

            // If aren't Users in DB then return HttpException
            if (users.length === 0) return new HttpException("There aren't any User", HttpStatus.NOT_FOUND)
            
            // If there're Users return Users
            if (users) return users
        }
        // if (top_type === "published challenges") {
        //     // Find all top Users by published challenges and offset
        //     const users = await prisma.user.findMany({
        //         where: {

        //         },
        //         orderBy: {
        //             published_challenges: 
        //         },
        //         take: offset * 50,
        //         skip: offset === 1 ? 0 : offset * 50
        //     })
            
        //     // If aren't Users in DB then return HttpException
        //     if (users.length === 0) return new HttpException("There aren't any User", HttpStatus.NOT_FOUND)
            
        //     // If there're Users return Users
        //     if (users) return users
        // }
    }

}
