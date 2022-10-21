import React, { useEffect } from 'react';
import { Container, Section } from '../../Styleall';
import  Img1new  from "./Image/img1-New.png";
// import Img1 from './assets/img1new.png';
import  Img2New  from "./Image/img2-New.png";
import  Img3New  from "./Image/img3-New.png";
import  Img4New  from "./Image/img4-New.png";
import  Img5New  from "./Image/img5-New.png";
import  Img6New  from "./Image/img6-New.png";
// import { Img5New } from "./Image/img5-New.png";
import {
	ContentRow,
   Header,
   Title,
   Lineblue,
   Button,
   Content,
   Img,
   TitleImg,
   Descrip,
   DescripPrice,
   Head,
	ContentColumn,
} from './NewStyle.js';

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const New = ({
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
		<Section  ref={ref} id="brows">
			<Container>
				<ContentRow >
					<ContentColumn>
                     <Header>
                        <Title>Nike New Launches!
                        <Lineblue></Lineblue>
                        </Title>
                        
                        <Button>View All</Button>
                     </Header>
					</ContentColumn>
				</ContentRow>	

            {/* images */}
            <ContentRow >
					<ContentColumn>
                     <Content>
							<Img
								src={Img6New}
							/>
                        <Head>
                        <TitleImg>Nike Metcon 7</TitleImg>
                        <DescripPrice>$120.00</DescripPrice>
                        </Head>

                        <Descrip>Training Shoes</Descrip>
                     </Content>
					</ContentColumn>
               {/* 2 */}
               <ContentColumn>
                     <Content>
							<Img
								src={Img1new}
							/>
                        <Head>
                        <TitleImg>Nike Metcon 7</TitleImg>
                        <DescripPrice>$120.00</DescripPrice>
                        </Head>

                        <Descrip>Training Shoes</Descrip>
                     </Content>
					</ContentColumn>
               {/* 3 */}
               <ContentColumn>
                     <Content>
							<Img
								src={Img2New}
							/>
                        <Head>
                        <TitleImg>Nike Metcon 7</TitleImg>
                        <DescripPrice>$120.00</DescripPrice>
                        </Head>

                        <Descrip>Training Shoes</Descrip>
                     </Content>
					</ContentColumn>

				</ContentRow>	

            {/* 2-row */}
            <ContentRow >
					<ContentColumn>
                     <Content>
							<Img
								src={Img3New}
							/>
                        <Head>
                        <TitleImg>Nike Metcon 7</TitleImg>
                        <DescripPrice>$120.00</DescripPrice>
                        </Head>

                        <Descrip>Training Shoes</Descrip>
                     </Content>
					</ContentColumn>
               {/* 2 */}
               <ContentColumn>
                     <Content>
							<Img
								src={Img4New}
							/>
                        <Head>
                        <TitleImg>Nike Metcon 7</TitleImg>
                        <DescripPrice>$120.00</DescripPrice>
                        </Head>

                        <Descrip>Training Shoes</Descrip>
                     </Content>
					</ContentColumn>
               {/* 3 */}
               <ContentColumn>
                     <Content>
							<Img
								src={Img5New}
							/>
                        <Head>
                        <TitleImg>Nike Metcon 7</TitleImg>
                        <DescripPrice>$120.00</DescripPrice>
                        </Head>

                        <Descrip>Training Shoes</Descrip>
                     </Content>
					</ContentColumn>

				</ContentRow>	
			</Container>
		</Section>
	);
};