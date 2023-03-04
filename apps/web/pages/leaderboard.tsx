import type { NextPage } from 'next';
import Head from 'next/head';
import LeaderBoardCard from '../components/LeaderBoardCard';

const LeaderBoard: NextPage = () => {
	const users = [
		{
			id: '1',
			username: "Coders' Collab 1",
			avatar: 'https://cdn.discordapp.com/icons/1073950709780860948/d2946d803303d4459a13a3adc3b75c84.png?size=1024',
			about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt reiciendis voluptate quos iste dolor voluptatibus officiis, incidunt tenetur ea exercitationem ipsa architecto consectetur error aliquam quo excepturi ex possimus delectus.',
			points: 100,
			completedChallenges: 2,
		},
		{
			id: '2',
			username: "Coders' Collab 2",
			avatar: 'https://cdn.discordapp.com/icons/1073950709780860948/d2946d803303d4459a13a3adc3b75c84.png?size=1024',
			about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt reiciendis voluptate quos iste dolor voluptatibus officiis, incidunt tenetur ea exercitationem ipsa architecto consectetur error aliquam quo excepturi ex possimus delectus.',
			points: 100,
			completedChallenges: 2,
		},
		{
			id: '3',
			username: "Coders' Collab 3",
			avatar: 'https://cdn.discordapp.com/icons/1073950709780860948/d2946d803303d4459a13a3adc3b75c84.png?size=1024',
			about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt reiciendis voluptate quos iste dolor voluptatibus officiis, incidunt tenetur ea exercitationem ipsa architecto consectetur error aliquam quo excepturi ex possimus delectus.',
			points: 100,
			completedChallenges: 2,
		},
	];
	return (
		<>
			<Head>
				<title>Coders&lsquo; Collab | LeaderBoard</title>
				{/* Primary Meta Tags */}
				<meta name="title" content="Coders' Collab | LeaderBoard" />
				<meta
					name="description"
					content="Coders' Collab | LeaderBoard"
				/>

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				{/* <meta property="og:url" content="https://example.com/" /> */}
				<meta
					property="og:title"
					content="Coders' Collab | LeaderBoard"
				/>
				<meta
					property="og:description"
					content="Coders' Collab | LeaderBoard"
				/>
				{/* <meta property="og:image" content="../public/Logo.svg" /> */}

				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				{/* <meta property="twitter:url" content="https://example.com/" /> */}
				<meta
					property="twitter:title"
					content="Coders' Collab | LeaderBoard"
				/>
				<meta
					property="twitter:description"
					content="Coders' Collab | LeaderBoard"
				/>
				{/* <meta property="twitter:image" content="../public/Logo.svg" /> */}
			</Head>

			<LeaderBoardCard users={users} />
		</>
	);
};

export default LeaderBoard;
