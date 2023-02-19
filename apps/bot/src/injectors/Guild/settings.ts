import { Guild } from 'discord.js';
import { Settings } from '../../structures/Settings';

declare module 'discord.js' {
	class GuildExtends {
		private readonly _settings: Settings;

		public settings: Settings;
	}
	export interface Guild extends GuildExtends {
		settings: Settings;
	}
}
Object.defineProperty(Guild.prototype, 'settings', {
	get(this: Guild) {
		// @ts-expect-error cuz its private :)
		return this._settings ?? (this._settings = new Settings(this));
	},
});
