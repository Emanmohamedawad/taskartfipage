import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContentRow = styled.div`
	display: flex;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
	justify-content: space-around;
	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`;

export const ContentColumn = styled(motion.div)`
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	flex: 1;
	z-index: 10;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
		> h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	> img {
		width: 300px;
		margin-left: -3px;
	}
`;

export const ImgWrapper = styled(motion.div)`
	display: flex;
	justify-content: 'flex-end';
	max-height: 700px;
	justify-content: center;
	position: relative;
`;

export const TopLine = styled(motion.div)`
	font-size: 0.9rem;
	line-height: 16px;
	font-weight: 550;
	letter-spacing: 1.4px;
	margin-bottom: 1.3rem;
	color: #979797;
`;

export const Img = styled(motion.img)`
	padding-right: 0;
	Width:540px;
	height:540px;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	object-fit: cover;
	max-height: 700px;
	z-index: 1;
`;

export const Heading = styled(motion.h2)`
	margin-bottom: 24px;
	font-size: 3rem;
	line-height: 1.1;
	font-weight: 600;
	color: #000;
	@media screen and (max-width: 960px) {
		text-align: center;
		font-size: 1.5rem;
		width: 40%;
		height: 40px;
	}
	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;
export const Lineblue = styled.div`
height: 9px;
width: 154px;
background:#2E90EA;
`;

export const Subtitle = styled(motion.p)`
	max-width: 440px;
	margin-bottom: 35px;
	line-height: 24px;
	color: ${({ inverse }) => (inverse ? '#6a6a6a' : 'white')};
`;
