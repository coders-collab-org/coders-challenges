import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits } from 'discord.js';

async function main() {
	const client = new SapphireClient({
		intents: Object.keys(GatewayIntentBits) as never,
		baseUserDirectory: dirname(fileURLToPath(import.meta.url)),
	});
	try {
		await client.login(process.env.BOT_TOKEN);
	} catch (error) {
		client.logger.error('Unknown error while trying to login bot: ', error);
	}
}

main();
