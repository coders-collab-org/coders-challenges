import { Avatar, Group, HoverCard, Stack, Text } from '@mantine/core';

interface UserHoverCardProps {
	user: {
		id: string;
		username: string;
		avatar: string;
		about: string;
		points: number;
		completedChallenges: number;
	};
	showUsername: boolean;
}

export function UserHoverCard({ user, showUsername }: UserHoverCardProps) {
	return (
		<HoverCard
			width={320}
			shadow="md"
			withArrow
			position={'left'}
			transition={'fade'}
			closeDelay={-100}
		>
			<HoverCard.Target>
				<Group>
					<Avatar
						size={40}
						src={user.avatar}
						radius={40}
						alt={"User's Avatar"}
					/>
					<Text size="sm" weight={500} hidden={!showUsername}>
						{user.username}
					</Text>
				</Group>
			</HoverCard.Target>
			<HoverCard.Dropdown style={{ position: 'absolute' }}>
				<Group>
					<Avatar
						size={40}
						src={user.avatar}
						radius={40}
						alt={"User's Avatar"}
					/>
					<Stack spacing={5}>
						<Text size="sm" weight={700} sx={{ lineHeight: 1 }}>
							{user.username}
						</Text>
					</Stack>
				</Group>

				<Text size="sm" mt="md" align={'left'}>
					{user.about}
				</Text>

				<Group mt="md" spacing="xl">
					<Text size="sm">
						<b>{user.points}</b> Points
					</Text>
					<Text size="sm">
						<b>{user.completedChallenges}</b> Completed Challenges
					</Text>
				</Group>
			</HoverCard.Dropdown>
		</HoverCard>
	);
}
