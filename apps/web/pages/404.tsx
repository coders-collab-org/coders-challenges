import { Center, Text } from '@mantine/core';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageNotFoundImage from '../public/404.svg';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
	link: {
		textDecoration: 'none',
		color: '#1c7ed6',
	},
}));

const Page404: NextPage = () => {
	const { classes } = useStyles();
	return (
		<>
			<Center>
				<Image
					src={PageNotFoundImage}
					alt={'Page Not Found'}
					width={0}
				/>
			</Center>
			<Text size={30} align={'center'}>
				Go back to{' '}
				<Link href={'/'} className={classes.link}>
					Home
				</Link>
			</Text>
		</>
	);
};

export default Page404;
