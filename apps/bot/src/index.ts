import './injectors';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits } from 'discord.js';
import { PrismaClient } from '@prisma/client';

async function main() {
	const client = new SapphireClient({
		intents: Object.keys(GatewayIntentBits) as never,
		baseUserDirectory: dirname(fileURLToPath(import.meta.url)),
	});

	client.prisma = new PrismaClient({
		datasources: {
			db: {
				url: process.env.DATABASE_URL,
			},
		},
	});

	client.login(process.env.BOT_TOKEN).catch((error) => {
		client.logger.error('Unknown error while trying to login bot: ', error);
	});
}

main();
