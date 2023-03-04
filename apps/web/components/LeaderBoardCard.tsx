import { Card, Group, ScrollArea, Table } from '@mantine/core';
import { UserHoverCard } from './UserHoverCard';

interface UserProps {
	users: {
		id: string;
		username: string;
		avatar: string;
		about: string;
		points: number;
		completedChallenges: number;
	}[];
}

export default function LeaderBoardCard({ users }: UserProps) {
	const rows = users.map((user, index) => (
		<tr style={{ textAlign: 'center' }} key={index}>
			<td>
				<Group spacing="sm">
					<UserHoverCard user={users[index]} showUsername={true} />
				</Group>
			</td>

			<td>{user.points}</td>

			<td>{user.completedChallenges}</td>
		</tr>
	));

	return (
		<>
			<Card shadow="sm" p="lg" radius="md" withBorder m={'xl'}>
				<Card.Section>
					<ScrollArea style={{ height: 500 }} type={'auto'}>
						<Table verticalSpacing="sm">
							<thead>
								<tr>
									<th>User</th>
									<th style={{ textAlign: 'center' }}>
										Points
									</th>
									<th style={{ textAlign: 'center' }}>
										Challenges
									</th>
								</tr>
							</thead>
							<tbody>{rows}</tbody>
						</Table>
					</ScrollArea>
				</Card.Section>
			</Card>
			{/* <Center>
                
            </Center> */}
		</>
	);
}
