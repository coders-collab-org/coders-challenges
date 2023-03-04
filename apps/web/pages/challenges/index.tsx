import type { NextPage } from 'next';
import { ChallengeCard } from '@/components/ChallengeCard';
import { MultiSelect, SimpleGrid } from '@mantine/core';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const Challenges: NextPage = () => {
	const [tags, setTags] = useState<string[]>([]);
	const [challengesArray, setChallengesArray] = useState<any[]>([]);

	const allTags = [
		{ value: 'String', label: 'String' },
		{ value: 'Array', label: 'Array' },
		{ value: 'Math', label: 'Math' },
	];

	const challenges = [
		{
			challenge: {
				id: 1,
				title: 'Test',
				createdAt: Date.now(),
				EndAt: Date.now(),
				tags: ['Math', 'Array'],
				difficulty: 'Easy',
			},
			author: {
				id: '1',
				username: "Coders' Collab",
				avatar: 'https://cdn.discordapp.com/icons/1073950709780860948/d2946d803303d4459a13a3adc3b75c84.png?size=1024',
				about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, labore cumque illo perspiciatis ipsam repellendus optio quis, velit ex nulla esse amet nostrum earum, quasi in sunt consequuntur unde cupiditate.',
				points: 100,
				completedChallenges: 2,
			},
		},
		{
			challenge: {
				id: 2,
				title: 'Test',
				createdAt: Date.now(),
				EndAt: Date.now(),
				tags: ['Math', 'Array'],
				difficulty: 'Mid',
			},
			author: {
				id: '1',
				username: "Coders' Collab",
				avatar: 'https://cdn.discordapp.com/icons/1073950709780860948/d2946d803303d4459a13a3adc3b75c84.png?size=1024',
				about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, labore cumque illo perspiciatis ipsam repellendus optio quis, velit ex nulla esse amet nostrum earum, quasi in sunt consequuntur unde cupiditate.',
				points: 100,
				completedChallenges: 2,
			},
		},
		{
			challenge: {
				id: 3,
				title: 'Test',
				createdAt: Date.now(),
				EndAt: Date.now(),
				tags: ['Math', 'Array'],
				difficulty: 'Hard',
			},
			author: {
				id: '1',
				username: "Coders' Collab",
				avatar: 'https://cdn.discordapp.com/icons/1073950709780860948/d2946d803303d4459a13a3adc3b75c84.png?size=1024',
				about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, labore cumque illo perspiciatis ipsam repellendus optio quis, velit ex nulla esse amet nostrum earum, quasi in sunt consequuntur unde cupiditate.',
				points: 100,
				completedChallenges: 2,
			},
		},
	];

	useEffect(() => {
		setChallengesArray([
			...new Set(
				challenges.filter(({ challenge }) =>
					tags.some((t) => challenge.tags.includes(t))
				)
			),
		]);
	}, [tags]);

	return (
		<>
			<Head>
				<title>Coders&lsquo; Collab | Challenges</title>
				{/* Primary Meta Tags */}
				<meta name="title" content="Coders' Collab | Challenges" />
				<meta
					name="description"
					content="Coders' Collab | Challenges"
				/>

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				{/* <meta property="og:url" content="https://example.com/" /> */}
				<meta
					property="og:title"
					content="Coders' Collab | Challenges"
				/>
				<meta
					property="og:description"
					content="Coders' Collab | Challenges"
				/>
				{/* <meta property="og:image" content="../public/Logo.svg" /> */}

				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				{/* <meta property="twitter:url" content="https://example.com/" /> */}
				<meta
					property="twitter:title"
					content="Coders' Collab | Challenges"
				/>
				<meta
					property="twitter:description"
					content="Coders' Collab | Challenges"
				/>
				{/* <meta property="twitter:image" content="../public/Logo.svg" /> */}
			</Head>

			<MultiSelect
				m={'xl'}
				data={allTags}
				label="Filter challenges by tags"
				placeholder="String, Array, Math"
				searchable
				clearable
				value={tags}
				onChange={setTags}
				nothingFound="No tag with this name"
			/>
			<SimpleGrid
				cols={2}
				spacing="lg"
				breakpoints={[{ maxWidth: 600, cols: 1, spacing: 'sm' }]}
			>
				{tags.length === 0
					? challenges.map((challenge, index) => (
							<ChallengeCard data={challenge} key={index} />
					  ))
					: challengesArray.map((challenge, index) => (
							<ChallengeCard data={challenge} key={index} />
					  ))}
			</SimpleGrid>
		</>
	);
};

export default Challenges;
