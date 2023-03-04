import { ActionIcon, Kbd, Tooltip, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

function ChangeThemeButton() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === 'dark';

	return (
		<Tooltip
			label={
				<div style={{ paddingBottom: 5 }}>
					<Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>L</Kbd>
				</div>
			}
		>
			<ActionIcon
				variant="outline"
				color={dark ? 'yellow' : 'gray'}
				onClick={() => toggleColorScheme()}
				title="Toggle color scheme"
			>
				{dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
			</ActionIcon>
		</Tooltip>
	);
}

export default ChangeThemeButton;
