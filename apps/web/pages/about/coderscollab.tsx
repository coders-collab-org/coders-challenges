import { Center, Highlight } from '@mantine/core';
import type { NextPage } from 'next';
import Image from 'next/image';

const AboutCodersCollab: NextPage = () => {
	return (
		<>
			<Center>
				<Image
					style={{ borderRadius: '50%' }}
					src="https://cdn.discordapp.com/icons/1073950709780860948/d2946d803303d4459a13a3adc3b75c84.png?size=1024"
					width={256}
					height={256}
					alt={"Coders' Collab Logo"}
				/>
			</Center>
			<Highlight
				size={'md'}
				align={'center'}
				highlight={["Coders' Collab"]}
				highlightStyles={(theme) => ({
					backgroundImage: theme.fn.linearGradient(
						45,
						'#9fb1cf',
						'#708cb5'
					),
					fontWeight: 700,
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
				})}
			>
				Coders&apos Collab is a Lorem ipsum dolor, sit amet consectetur
				adipisicing elit. Dolorem consectetur eligendi temporibus
				deleniti blanditiis quam asperiores exercitationem ipsa. Eaque
				ratione, a atque sit pariatur impedit facilis placeat aliquam
				aut necessitatibus?
			</Highlight>
		</>
	);
};

export default AboutCodersCollab;
