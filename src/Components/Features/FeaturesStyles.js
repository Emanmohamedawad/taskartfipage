import styled from 'styled-components';
import { motion } from 'framer-motion';
import Img1 from './img1.png';
import Img2 from './img2.png';
import Img3 from './img3.png';
import Img4 from './img4.png';

export const FeatureTitle = styled.h2`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	color: #FF725E;
	letter-spacing: 0.4rem;
	margin: auto;
`;
export const SideHeading = styled.h5`
	color:#000;
	margin-bottom:10%;
	font-weight: 700;
	font-size: 20px;
	letter-spacing: 5px;
`;


export const FeatureWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 4rem;
	grid-gap: 2rem;
	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(1, 1fr);
		grid-row-gap: 3rem;
	}
	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
export const Iconsbox = styled.div`
	display:grid;
	// padding-left: 245px;
	grid-template-columns: repeat(4, 1fr);
	@media screen and (max-width: 1100px) {
		text-align:center;
	}
	@media screen and (max-width: 635px) {
		text-align:center;
	}
`;

export const FeatureColumn = styled(motion.div)`
	display: flex;
	flex-flow: column;
	height:400px;
	background-image: url(${Img1});
	background-size:cover;
	justify-content: left;
	align-items: left;
	padding: 10px;
	border: none;
`;
export const FeatureColumn2 = styled(motion.div)`
display: flex;
flex-flow: column;
height:400px;
background-image: url(${Img2});
background-size:cover;
justify-content: left;
align-items: left;
padding: 10px;
border: none;
`;
export const FeatureColumn3 = styled(motion.div)`
display: flex;
flex-flow: column;
height:400px;
background-image: url(${Img3});
background-size:cover;
justify-content: left;
align-items: left;
padding: 10px;
border: none;
`;
export const FeatureColumn4 = styled(motion.div)`
display: flex;
flex-flow: column;
height:400px;
background-image: url(${Img4});
background-size:cover;
justify-content: left;
align-items: left;
padding: 10px;
border: none;
`;

export const Buttonbrows = styled.button`
border-radius: 30px;
background: none;
width: 30%;
margin-left: 6%;
margin-top: 20px;
white-space: nowrap;
padding: 10px 20px;
font-size: 16px;
color: #fff;
outline: none;
border: 2px solid #fff;
cursor: pointer;
overflow: hidden;
position: relative;

&:hover {
	color: #2E90EA;
	background:#fff;
}
`;

export const FeatureName = styled.h3`
	font-weight: 600;
	font-size: 2rem;
	margin-top: 28%;
	margin-left: 6%;
	width:20%;
	color:#fff;
	letter-spacing: 2px;
	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;
