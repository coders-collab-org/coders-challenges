import type { PrismaClient } from '@prisma/client';

declare module 'discord.js' {
	export interface Client {
		prisma: PrismaClient;
	}
}

declare module '@sapphire/framework' {
	interface Preconditions {
		OwnerOnly: never;
	}
}
