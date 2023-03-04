import { useState } from 'react';
import { createStyles, Navbar } from '@mantine/core';
import Link from 'next/link';
import { useLocalStorage } from '@mantine/hooks';

const useStyles = createStyles((theme, _params, getRef) => {
	const icon: any = getRef('icon');
	return {
		navbar: {
			// backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
			//     .background,
			backgroundColor: '#2b2d31',
		},

		link: {
			...theme.fn.focusStyles(),
			display: 'flex',
			alignItems: 'center',
			textDecoration: 'none',
			fontSize: theme.fontSizes.sm,
			color: theme.white,
			padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
			borderRadius: theme.radius.sm,
			fontWeight: 500,

			'&:hover': {
				backgroundColor: theme.fn.lighten('#2b2d31', 0.1),
			},
		},

		linkActive: {
			'&, &:hover': {
				backgroundColor: theme.fn.lighten(
					theme.fn.variant({
						variant: 'filled',
						color: theme.primaryColor,
					}).background!,
					0.15
				),
				[`& .${icon}`]: {
					opacity: 0.9,
				},
			},
		},
	};
});

interface linksProp {
	data: {
		link: string;
		label: string;
		links?: { link: string; label: string }[];
	}[];
	isVisible: boolean;
}

export function NavbarSimpleColored({ data, isVisible }: linksProp) {
	const { classes, cx } = useStyles();
	const [active] = useState('Billing');
	const [isOpened, setIsOpened] = useLocalStorage({
		key: 'is-opened',
		defaultValue: false,
	});

	const links = data.map((item) => (
		<Link
			className={cx(classes.link, {
				[classes.linkActive]: item.label === active,
			})}
			href={item.link}
			key={item.label}
			onClick={() => {
				setIsOpened(false);
			}}
		>
			<span>{item.label}</span>
		</Link>
	));

	return (
		<Navbar
			p="md"
			className={classes.navbar}
			style={{
				visibility: isVisible ? 'visible' : 'hidden',
				width: '100%',
				maxHeight: isVisible ? '100%' : '0',
			}}
		>
			<Navbar.Section grow>{links}</Navbar.Section>
		</Navbar>
	);
}
