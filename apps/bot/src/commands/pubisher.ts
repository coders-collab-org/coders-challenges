import process from 'node:process';
import { ApplyOptions } from '@sapphire/decorators';
// import { isMessageInstance } from '@sapphire/discord.js-utilities';
import { Subcommand } from '@sapphire/plugin-subcommands';
import {
	ActionRowBuilder,
	type ModalActionRowComponentBuilder,
	ModalBuilder,
	TextInputBuilder,
	TextInputStyle,
} from 'discord.js';

@ApplyOptions<Subcommand.Options>({
	description: 'description',
	subcommands: [
		{
			name: 'add',
			chatInputRun: 'messageAdd',
		},
	],
})
export class ChallengeCommand extends Subcommand {
	public override registerApplicationCommands(registry: Subcommand.Registry) {
		registry.guildIdsToFetch.add(process.env.SERVER_ID);
		registry.registerChatInputCommand((builder) =>
			builder
				.setName(this.name)
				.setDescription(this.description)
				.addSubcommand((command) =>
					command
						.setName('add')
						.setDescription('Hi')
						.addUserOption((option) =>
							option.setName('user').setDescription('member')
						)
				)
		);
	}

	public messageAdd(interaction: Subcommand.ChatInputCommandInteraction) {
		const modal = new ModalBuilder()
			.setCustomId('challenge_add')
			.setTitle('Add Challenge');

		const favoriteColorInput = new TextInputBuilder()
			.setCustomId('favoriteColorInput')
			.setLabel("What's your favorite color?")
			.setStyle(TextInputStyle.Short);

		const hobbiesInput = new TextInputBuilder()
			.setCustomId('hobbiesInput')
			.setLabel("What's some of your favorite hobbies?")
			.setStyle(TextInputStyle.Paragraph);

		const firstActionRow =
			new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
				favoriteColorInput
			);
		const secondActionRow =
			new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
				hobbiesInput
			);

		modal.addComponents(firstActionRow, secondActionRow);
		interaction.showModal(modal);
	}
}
