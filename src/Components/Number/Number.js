import React, { useEffect } from 'react';
import { Container, Section } from '../../Styleall';
import {
	ContentRow,
   Box,
   Titlenumber,
   Textbox,
	ContentColumn,
} from './NumberStyle';

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const Number = ({
	primary,
	topLine,
	headline,
	description,
	buttonLabel,
	img,
	alt,
	inverse,
	reverse,
}) => {
	const initial = { opacity: 0, y: 30 };
	const animation = useAnimation();

	const { ref, inView } = useInView({ threshold: 0.2 });

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);

	return (
		<Section  ref={ref} id="number">
			<Container>
				<ContentRow reverse={reverse}>
					<ContentColumn 						
                  initial={initial}
						transition={{ delay: 0.5, duration: 0.6 }}
						animate={animation}>
                     <Box>
                        <Titlenumber>50+</Titlenumber>
                        <Textbox>Outlest</Textbox>
                     </Box>
						

					</ContentColumn>
					<ContentColumn 						
                  initial={initial}
						transition={{ delay: 0.5, duration: 0.6 }}
						animate={animation}>
                     <Box>
                        <Titlenumber>100k+</Titlenumber>
                        <Textbox>Students</Textbox>
                     </Box>
						

					</ContentColumn>
					<ContentColumn 						
                  initial={initial}
						transition={{ delay: 0.5, duration: 0.6 }}
						animate={animation}>
                     <Box>
                        <Titlenumber>200+</Titlenumber>
                        <Textbox>Trainers</Textbox>
                     </Box>
						

					</ContentColumn>
					<ContentColumn 						
                  initial={initial}
						transition={{ delay: 0.5, duration: 0.6 }}
						animate={animation}>
                     <Box>
                        <Titlenumber>50k+</Titlenumber>
                        <Textbox>Members</Textbox>
                     </Box>
						

					</ContentColumn>

				</ContentRow>
				
			</Container>
		</Section>
	);
};