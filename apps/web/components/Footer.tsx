import {
	createStyles,
	Text,
	Container,
	ActionIcon,
	Group,
} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
	footer: {
		paddingTop: theme.spacing.xl * 2,
		paddingBottom: theme.spacing.xl * 2,
		// backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		backgroundColor: '#2b2d31',
		borderTop: `1px solid ${
			theme.colorScheme === 'dark'
				? theme.colors.dark[5]
				: theme.colors.gray[2]
		}`,
	},

	logo: {
		maxWidth: 200,
		color: theme.white,
		[theme.fn.smallerThan('sm')]: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
	},

	description: {
		marginTop: 5,
		color: theme.white,
		[theme.fn.smallerThan('sm')]: {
			marginTop: theme.spacing.xs,
			textAlign: 'center',
		},
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',

		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},

	groups: {
		display: 'flex',
		flexWrap: 'wrap',

		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	wrapper: {
		width: 160,
	},

	link: {
		display: 'block',
		lineHeight: 1.2,
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

	title: {
		fontSize: theme.fontSizes.lg,
		fontWeight: 700,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		marginBottom: theme.spacing.xs / 2,
		color: theme.white,
	},

	afterFooter: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: theme.spacing.xl,
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,
		color: theme.white,
		borderTop: `1px solid ${theme.white}`,

		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column',
		},
	},

	social: {
		[theme.fn.smallerThan('sm')]: {
			marginTop: theme.spacing.xs,
		},
	},
}));

interface FooterLinksProps {
	data: {
		title: string;
		links: { label: string; link: string }[];
	}[];
}

export function FooterLinks({ data }: FooterLinksProps) {
	const { classes } = useStyles();

	const groups = data.map((group) => {
		const links = group.links.map((link, index) => (
			<Link key={index} className={classes.link} href={link.link}>
				{link.label}
			</Link>
		));

		return (
			<div className={classes.wrapper} key={group.title}>
				<Text className={classes.title}>{group.title}</Text>
				{links}
			</div>
		);
	});

	return (
		<footer className={classes.footer}>
			<Container className={classes.inner}>
				<div className={classes.logo}>
					<Group>
						<Image
							src={
								'https://cdn.discordapp.com/icons/1073950709780860948/d2946d803303d4459a13a3adc3b75c84.png?size=1024'
							}
							width={70}
							height={70}
							alt={'Logo'}
							style={{ borderRadius: '50%' }}
						/>
						<Text>Coders&lsquo; Collab</Text>
					</Group>
					<br />
					<Text
						size="xs"
						color="dimmed"
						className={classes.description}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Tempore, distinctio. Ab totam adipisci modi facilis
						ipsum, reiciendis aut! Modi assumenda dignissimos ad
						voluptatem omnis quo nobis id odio? Harum, quae!
					</Text>
				</div>
				<div className={classes.groups}>{groups}</div>
			</Container>
			<Container className={classes.afterFooter}>
				<Text size="sm">
					© 2023 Coders&lsquo; Collab. All rights reserved.
				</Text>

				<Group
					spacing={0}
					className={classes.social}
					position="right"
					noWrap
				>
					<ActionIcon
						size="lg"
						variant={'transparent'}
						style={{ color: 'white' }}
						title="Twitter"
					>
						<IconBrandTwitter size={18} stroke={1.5} />
					</ActionIcon>
					<ActionIcon
						size="lg"
						variant={'transparent'}
						style={{ color: 'white' }}
						title="YouTube"
					>
						<IconBrandYoutube size={18} stroke={1.5} />
					</ActionIcon>
				</Group>
			</Container>
		</footer>
	);
}
