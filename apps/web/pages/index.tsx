import type { NextPage } from 'next';
import { HeroBullets } from '@/components/HeroHeader';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Coders&lsquo; Collab</title>
				{/* Primary Meta Tags */}
				<meta name="title" content="Coders' Collab" />
				<meta name="description" content="Coders' Collab" />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				{/* <meta property="og:url" content="https://example.com/" /> */}
				<meta property="og:title" content="Coders' Collab" />
				<meta property="og:description" content="Coders' Collab" />
				{/* <meta property="og:image" content="../public/Logo.svg" /> */}

				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				{/* <meta property="twitter:url" content="https://example.com/" /> */}
				<meta property="twitter:title" content="Coders' Collab" />
				<meta property="twitter:description" content="Coders' Collab" />
				{/* <meta property="twitter:image" content="../public/Logo.svg" /> */}
			</Head>
			<HeroBullets />
		</>
	);
};

export default Home;
