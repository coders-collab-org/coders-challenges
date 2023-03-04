import { UserHoverCard } from '@/components/UserHoverCard';
import { Avatar, Badge, Card, Group, Text } from '@mantine/core';
import { IconTags } from '@tabler/icons';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Challenges: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;
	const author = {
		id: '1',
		username: "Coders' Collab",
		avatar: 'https://cdn.discordapp.com/icons/1073950709780860948/d2946d803303d4459a13a3adc3b75c84.png?size=1024',
		about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, labore cumque illo perspiciatis ipsam repellendus optio quis, velit ex nulla esse amet nostrum earum, quasi in sunt consequuntur unde cupiditate.',
		points: 100,
		completedChallenges: 2,
	};
	const tags = ['Math', 'Array'];
	// const users: any[] = []
	const users = [
		{
			id: '1',
			username: "Coders' Collab",
			avatar: 'https://cdn.discordapp.com/icons/1073950709780860948/d2946d803303d4459a13a3adc3b75c84.png?size=1024',
			about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, labore cumque illo perspiciatis ipsam repellendus optio quis, velit ex nulla esse amet nostrum earum, quasi in sunt consequuntur unde cupiditate.',
			points: 100,
			completedChallenges: 2,
		},
		{
			id: '1',
			username: "Coders' Collab",
			avatar: 'https://cdn.discordapp.com/icons/1073950709780860948/d2946d803303d4459a13a3adc3b75c84.png?size=1024',
			about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, labore cumque illo perspiciatis ipsam repellendus optio quis, velit ex nulla esse amet nostrum earum, quasi in sunt consequuntur unde cupiditate.',
			points: 100,
			completedChallenges: 2,
		},
		{
			id: '1',
			username: "Coders' Collab",
			avatar: 'https://cdn.discordapp.com/icons/1073950709780860948/d2946d803303d4459a13a3adc3b75c84.png?size=1024',
			about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, labore cumque illo perspiciatis ipsam repellendus optio quis, velit ex nulla esse amet nostrum earum, quasi in sunt consequuntur unde cupiditate.',
			points: 100,
			completedChallenges: 2,
		},
		{
			id: '1',
			username: "Coders' Collab",
			avatar: 'https://cdn.discordapp.com/icons/1073950709780860948/d2946d803303d4459a13a3adc3b75c84.png?size=1024',
			about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, labore cumque illo perspiciatis ipsam repellendus optio quis, velit ex nulla esse amet nostrum earum, quasi in sunt consequuntur unde cupiditate.',
			points: 100,
			completedChallenges: 2,
		},
		{
			id: '1',
			username: "Coders' Collab",
			avatar: 'https://cdn.discordapp.com/icons/1073950709780860948/d2946d803303d4459a13a3adc3b75c84.png?size=1024',
			about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, labore cumque illo perspiciatis ipsam repellendus optio quis, velit ex nulla esse amet nostrum earum, quasi in sunt consequuntur unde cupiditate.',
			points: 100,
			completedChallenges: 2,
		},
	];
	return (
		<>
			<Card
				shadow="sm"
				p="lg"
				radius="md"
				withBorder
				m={'xl'}
				style={{ position: 'static' }}
			>
				{/* Challenge title, difficulty and author  */}
				<Group position={'apart'}>
					<Text
						size="lg"
						weight={500}
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{/* {data.challenge.difficulty === "Easy" ? <Badge variant="gradient" gradient={{ from: 'green', to: 'lime' }} mr={10}>{data.challenge.difficulty}</Badge> : null} */}
						{/* {data.challenge.difficulty === "Mid" ? <Badge variant="gradient" gradient={{ from: 'yellow', to: 'orange' }} mr={10}>{data.challenge.difficulty}</Badge> : null} */}
						{/* {data.challenge.difficulty === "Hard" ? <Badge variant="gradient" gradient={{ from: 'orange', to: 'red' }} mr={10}>{data.challenge.difficulty}</Badge> : null} */}
						<Badge
							variant="gradient"
							gradient={{ from: 'green', to: 'lime' }}
							mr={10}
						>
							Easy
						</Badge>
						#{id} Test
					</Text>
					<UserHoverCard user={author} showUsername={true} />
				</Group>
				<br />
				{/* Description */}
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Quidem autem, soluta ipsam ad cupiditate magnam, esse illum,
					maxime eos quos fuga nemo at. Cumque illo voluptas saepe
					commodi labore aspernatur.
				</Text>
				<br />
				<Group position={'apart'} mt={5}>
					{/* Tags */}
					<Group position={'left'}>
						<Text
							size={'md'}
							mt="md"
							style={{
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<IconTags size={22} stroke={1.5} />
							{tags.map((tag, index) => (
								<Badge
									variant={'light'}
									color={'blue'}
									key={index}
									ml={2}
								>
									{tag}
								</Badge>
							))}
						</Text>
					</Group>
					{/* Top Users */}
					<Group position={'right'}>
						<Avatar.Group spacing="sm">
							{users.length === 0 ? (
								<Badge
									variant="gradient"
									gradient={{ from: 'orange', to: 'red' }}
									mr={10}
								>
									No one solve this challenge be first!
								</Badge>
							) : null}
							{users.length >= 1 ? (
								<UserHoverCard
									user={users[0]}
									showUsername={false}
								/>
							) : null}
							{users.length >= 2 ? (
								<UserHoverCard
									user={users[1]}
									showUsername={false}
								/>
							) : null}
							{users.length >= 3 ? (
								<UserHoverCard
									user={users[2]}
									showUsername={false}
								/>
							) : null}
							{users.length >= 4 ? (
								<Avatar radius="xl">+{users.length - 3}</Avatar>
							) : null}
						</Avatar.Group>
					</Group>
				</Group>
			</Card>
		</>
	);
};

export default Challenges;
