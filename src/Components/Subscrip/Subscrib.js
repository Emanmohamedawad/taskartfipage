import React, { useEffect } from 'react';
import { Container, Section } from '../../Styleall';

import {
	ContentRow,
   Title,
   Buttonsub,
	ContentColumn,
} from './SubscribStyle';

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const Subscrib = ({
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
	// const initial = { opacity: 0, y: 30 };
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
		<Section  ref={ref} id="subscribe">
			<Container>
				<ContentRow >
					<ContentColumn>
                     
                        <Title>Subscribe to our newsletter.</Title>

					</ContentColumn>
					<ContentColumn>
                     
							<Buttonsub>Subscribe</Buttonsub>
							
				</ContentColumn>
				</ContentRow>	

            
			</Container>
		</Section>
	);
};