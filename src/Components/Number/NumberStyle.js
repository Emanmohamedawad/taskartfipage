import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContentRow = styled.div`
	display: flex;
	margin: 0 -15px -15px -15px;
	background:#fff;
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
	padding-left: 15px;
	flex: 1;
	width:100%
	background:#fff;
	z-index: 10;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		width:100%;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
`;
export const Box = styled.div`
text-align:center;
justify-content: center;
padding:20%;
height: 260px;
padding-top: 20%;
width: 100%;
color:#000;
background:#fff;
&:hover {
	color: #2E90EA;
	transition: 0.3s ease-out;
	box-shadow: -2px 0px 11px 1px #ddd7d7;
}
@media screen and (max-width: 768px) {
	width:100%;
	flex-basis: 100%;
	justify-content: center;
	align-items: center;
}
`;
export const Titlenumber =styled.h2`
 font-size:64px
`;
export const Textbox =styled.p`
 font-size:18px
`;


