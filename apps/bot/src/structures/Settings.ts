import type { Client, Guild } from 'discord.js';
import type { GuildSettings } from '../types/models/guild';
import { defaultGuildSettings } from '../utils/constants';

export class Settings {
	public guild: Guild;

	public client: Client;

	public cache: GuildSettings | null = null;

	public constructor(guild: Guild) {
		this.guild = guild;
		this.client = guild.client;
	}

	public async fetch() {
		if (this.cache) return this.cache;

		const data = await this.client.prisma.guild.upsert({
			where: {
				id: this.guild.id,
			},
			update: {},
			create: {
				id: this.guild.id,
				settings: { ...defaultGuildSettings },
			},
		});

		return (this.cache = data.settings as never as GuildSettings);
	}

	public save() {
		if (!this.cache) return null;
		return this.client.prisma.guild.update({
			where: {
				id: this.guild.id,
			},
			data: {
				settings: this.cache as never,
			},
		});
	}
}
