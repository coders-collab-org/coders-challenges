import {
	createStyles,
	Header,
	Menu,
	Group,
	Center,
	Burger,
	Container,
	Text,
} from '@mantine/core';
import { useDisclosure, useLocalStorage } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons';
import Link from 'next/link';
import ChangeThemeButton from './ChangeThemeButton';

const useStyles = createStyles((theme) => ({
	header: {
		// backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
		backgroundColor: '#2b2d31',
		borderBottom: 0,
		marginBottom: 0,
	},

	inner: {
		height: 56,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	links: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	burger: {
		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color: theme.white,
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor: theme.fn.lighten('#2b2d31', 0.1),
		},
	},

	linkLabel: {
		marginRight: 5,
	},
}));

interface HeaderSearchProps {
	links: {
		link: string;
		label: string;
		links?: { link: string; label: string }[];
	}[];
}

export function HeaderMenuColored({ links }: HeaderSearchProps) {
	const [opened, { toggle }] = useDisclosure(false);
	const { classes } = useStyles();
	const [isOpened, setIsOpened] = useLocalStorage({
		key: 'is-opened',
		defaultValue: false,
	});

	const items = links.map((link) => {
		const menuItems = link.links?.map((item) => (
			<Menu.Item key={item.link}>{item.label}</Menu.Item>
		));

		if (menuItems) {
			return (
				<Menu
					key={link.label}
					trigger="hover"
					exitTransitionDuration={0}
				>
					<Menu.Target>
						<Link href={link.link} className={classes.link}>
							<Center>
								<span className={classes.linkLabel}>
									{link.label}
								</span>
								<IconChevronDown size={12} stroke={1.5} />
							</Center>
						</Link>
					</Menu.Target>
					<Menu.Dropdown>{menuItems}</Menu.Dropdown>
				</Menu>
			);
		}

		return (
			<Link key={link.label} href={link.link} className={classes.link}>
				{link.label}
			</Link>
		);
	});

	return (
		<Header height={56} className={classes.header}>
			<Container>
				<div className={classes.inner}>
					<Text color={'white'} size={'xl'}>
						Coders&lsquo; Collab Challenges
					</Text>
					<Group>
						<Group spacing={5} className={classes.links}>
							{items}
						</Group>
						<Burger
							aria-label="Show pages"
							opened={opened}
							onClick={() => {
								toggle;
								setIsOpened(!isOpened);
							}}
							className={classes.burger}
							size="sm"
							color="#fff"
						/>
						<ChangeThemeButton />
					</Group>
				</div>
			</Container>
		</Header>
	);
}
