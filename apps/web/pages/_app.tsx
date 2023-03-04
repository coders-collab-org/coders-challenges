import type { AppProps } from 'next/app';
import Head from 'next/head';
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from '@mantine/core';
import { HeaderMenuColored } from '../components/Header';
import { NavbarSimpleColored } from '../components/Navbar';
import { FooterLinks } from '../components/Footer';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import '../styles/main.scss';

export default function App(props: AppProps) {
	const { Component, pageProps } = props;
	const links = [
		{
			link: '/',
			label: 'Home',
		},
		{
			link: '/challenges',
			label: 'Challenges',
		},
		{
			link: '/leaderboard',
			label: 'LeaderBoard',
		},
	];

	const footerLinks = [
		{
			title: 'About',
			links: [
				{
					link: '/about/coderscollab',
					label: "Coders' Collab",
				},
				{
					link: '/about/challenges',
					label: 'Challenges structure',
				},
				{
					link: '/about/leaderboard',
					label: 'How to join to LeaderBoard',
				},
			],
		},
		{
			title: 'Challenges',
			links: [
				{
					link: '/challenges',
					label: 'Challenges',
				},
				{
					link: '/leaderboard',
					label: 'LeaderBoard',
				},
			],
		},
	];

	const [isOpened] = useLocalStorage({
		key: 'is-opened',
		defaultValue: false,
	});

	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: 'mantine-color-scheme',
		defaultValue: 'dark',
		getInitialValueInEffect: true,
	});

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	useHotkeys([['mod+shift+L', () => toggleColorScheme()]]);

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<meta
					name="keywords"
					content="Khayal, khayal, Khayal's Portfolio, Khayal's portfolio, khayal's Portfolio, khayal's portfolio, Khayal Portfolio, Khayal portfolio, khayal Portfolio, khayal portfolio"
				/>
				<meta name="author" content="Khayal" />
			</Head>

			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{ colorScheme }}
				>
					<HeaderMenuColored links={links} />
					<NavbarSimpleColored data={links} isVisible={isOpened} />
					<main hidden={isOpened} style={{ minHeight: '100vh' }}>
						<Component {...pageProps} />
					</main>
					<FooterLinks data={footerLinks} />
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
}
