import { ApplyOptions } from '@sapphire/decorators';
import { Listener } from '@sapphire/framework';

@ApplyOptions<Listener.Options>({
	event: 'ready',
})
export class ReadyListener extends Listener {
	public override run() {
		const { logger, client } = this.container;

		logger.info("I'm ready.");
		logger.info(`My name's ${client.user?.tag}.`);
	}
}
