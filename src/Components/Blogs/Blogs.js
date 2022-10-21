import React, { useEffect } from 'react';
import { Container, Section } from '../../Styleall';

import  Blog1  from "./Images/blog1.png";
import  Blog2  from "./Images/blog2.png";
import  Blog3  from "./Images/blog3.png";

// import { Img5New } from "./Image/img5-New.png";
import {
	ContentRow,
   Header,
   Title,
   Buttonblog,
   Content,
   Img,
   Imgr,
   Head2,
   TitleImg,
   Head,
	ContentColumn,
} from './BlogsStyle';

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const Blogs = ({
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
		<Section  ref={ref} id="blog">
			<Container>
				<ContentRow >
					<ContentColumn>
                     <Header>
                        <Title>Our Blogs</Title>
                     </Header>
					</ContentColumn>
				</ContentRow>	

            {/* images */}
            <ContentRow >
					<ContentColumn>
                     <Content>
							<Img
								src={Blog2}
							/>
                        <Head>
                        <TitleImg>How to stay healthy?</TitleImg>
                        <Buttonblog>Read Blog</Buttonblog>
                        </Head>
                     </Content>
					</ContentColumn>
               {/* 2 */}
               <ContentColumn>
                     <Content>
							<Imgr
								src={Blog1}
							/>
                        <Head2>
                        <TitleImg>Workout for Beginners</TitleImg>
                        <Buttonblog>Read Blog</Buttonblog>
                        </Head2>
                     </Content>

                     <Content>
							<Imgr
								src={Blog3}
							/>
                        <Head2>
                        <TitleImg>Is Cardio Important?</TitleImg>
                        <Buttonblog>Read Blog</Buttonblog>
                        </Head2>
                     </Content>

					</ContentColumn>
               
				</ContentRow>	

            {/* 2-row */}
            
			</Container>
		</Section>
	);
};