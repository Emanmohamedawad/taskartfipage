import styled from 'styled-components';
import { motion } from 'framer-motion';


export const ContentRow = styled.div`
	display: flex;
	margin: 0 -15px -15px -15px;
	padding: 5%;
	background:#000;
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
	align-items: end;
	margin-bottom: 30px;
	flex: 1;
	background:#000;
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

export const Title =styled.h3`
font-size: 2.5rem;
line-height: 1.1;
font-weight: 600;
color: #fff;
@media screen and (max-width: 960px) {
   text-align: center;
   font-size: 1rem;
   width: 30%;
   height: 30px;
}
@media screen and (max-width: 768px) {
   text-align: center;
   width: 100%;
   height: 40px;
   font-size: 1rem;
}
`;
export const Buttonsub =styled.button`
border-radius: 30px;
background:#2E90EA;
width: 37%;
margin-top: 7%;
height: 38%;
white-space: nowrap;
padding: 10px 20px;
font-size: 18px;
color: #fff;
outline: none;
border: 1px solid #2E90EA;
cursor: pointer;
overflow: hidden;
// position: relative;


&:hover {
	color: blue;
   background:#fff;
   border:none;
}
@media screen and (max-width: 768px) {
   text-align: center;
   padding-right:30%;
   font-size: 16px;
	width: 170%;
   height: 40px;
}
`;


