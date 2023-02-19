import { Precondition } from '@sapphire/framework';
import type { ChatInputCommandInteraction } from 'discord.js';

export class OwnerOnlyPrecondition extends Precondition {
	public chatInpuPPun(interaction: ChatInputCommandInteraction) {
		console.log('Hello word');
		return this.checkOwner(interaction.user.id);
	}

	public async checkOwner(id: string) {
		console.log(id);
	}
}
