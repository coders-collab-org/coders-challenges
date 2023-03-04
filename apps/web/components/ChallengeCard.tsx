import { Card, Text, Badge, Group } from '@mantine/core';
import { IconTags } from '@tabler/icons';
import { UserHoverCard } from './UserHoverCard';
import { useRouter } from 'next/router';

interface ChallengeProps {
	data: {
		challenge: {
			id: number;
			title: string;
			createdAt: any;
			EndAt: any;
			tags: string[];
			difficulty: string;
		};
		author: {
			id: string;
			username: string;
			avatar: string;
			about: string;
			points: number;
			completedChallenges: number;
		};
	};
}

export function ChallengeCard({ data }: ChallengeProps) {
	const router = useRouter();
	return (
		<Card
			withBorder
			radius="md"
			m={'xl'}
			className={'hoverable'}
			style={{ position: 'static' }}
			onClick={() => router.push(`/challenges/${data.challenge.id}`)}
		>
			<Group position="apart" align={'center'}>
				<Text
					size="lg"
					weight={500}
					mt="md"
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{data.challenge.difficulty === 'Easy' ? (
						<Badge
							variant="gradient"
							gradient={{ from: 'green', to: 'lime' }}
							mr={10}
						>
							{data.challenge.difficulty}
						</Badge>
					) : null}
					{data.challenge.difficulty === 'Mid' ? (
						<Badge
							variant="gradient"
							gradient={{ from: 'yellow', to: 'orange' }}
							mr={10}
						>
							{data.challenge.difficulty}
						</Badge>
					) : null}
					{data.challenge.difficulty === 'Hard' ? (
						<Badge
							variant="gradient"
							gradient={{ from: 'orange', to: 'red' }}
							mr={10}
						>
							{data.challenge.difficulty}
						</Badge>
					) : null}
					#{data.challenge.id} {data.challenge.title}
				</Text>
				<Badge
					variant="gradient"
					gradient={{ from: 'orange', to: 'red' }}
				>
					(number) days left
				</Badge>
			</Group>

			<Group position={'apart'} mt={5}>
				<Group position={'left'}>
					<Text
						size={'md'}
						mt="md"
						style={{ display: 'flex', justifyContent: 'center' }}
					>
						<IconTags size={22} stroke={1.5} />
						{data.challenge.tags.map((tag, index) => (
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
				<Group position={'right'}>
					<UserHoverCard user={data.author} showUsername={true} />
				</Group>
			</Group>
			{/* <Group position="apart" mt="md">
                    
            </Group> */}
		</Card>
	);
}
