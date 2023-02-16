import 'dotenv/config';

import { dirname } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits } from 'discord.js';

const client = new SapphireClient({
	intents: Object.keys(GatewayIntentBits) as any,
	baseUserDirectory: dirname(fileURLToPath(import.meta.url)),
});

try {
	await client.login(process.env.BOT_TOKEN);
} catch (error) {
	client.logger.error('Unknown error while trying to login bot: ', error);
}
