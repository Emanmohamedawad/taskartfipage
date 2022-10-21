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
	padding-right: 15px;
	margin-bottom: 30px;
	flex: 1;
	background:#fff;
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
export const Content = styled.div`

@media screen and (max-width: 768px) {
	width: 175%;
}
@media screen and (max-width: 425px) {
	width: 100%;
	justify-content: center;
}
`;
export const Header = styled.div`
display:flex;
margin-bottom: 3%;

@media screen and (max-width: 768px) {
	width: 204%;
   justify-content: space-between;
}
@media screen and (max-width: 425px) {
	width: 100%;
	justify-content: center;
}


`;
export const Title =styled.h3`
margin-bottom: 24px;
font-size: 3rem;
line-height: 1.1;
font-weight: 600;
color: #000;
@media screen and (max-width: 996px) {
   
   font-size: 2rem;
}
@media screen and (max-width: 768px) {
   
   font-size: 1rem;
}
`;
export const Button =styled.button`
border-radius: 30px;
background: none;
width: 10%;
height: 38%;
margin-left: 39%;
white-space: nowrap;
padding: 10px 20px;
font-size: 16px;
color: #000;
outline: none;
border: 2px solid #00;
cursor: pointer;
overflow: hidden;
position: relative;

&:hover {
	color: #fff;
	background:#2E90EA;
	border:none;
}
@media screen and (max-width: 788px) {
	width: 15%;
	height: 38%;
	margin-left: 32%;
}
@media screen and (max-width: 758px) {
	width: 35%;
	height: 38%;
	margin-left: 7%;
}
`;

export const Img = styled.img`
margin-bottom: 6%;
Width: 90%;
height:340px;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
object-fit: cover;
max-height: 700px;
z-index: 1;
`;

export const TitleImg = styled.h3`
   font-size:18px;
   margin-right:40%;
	@media screen and (max-width: 768px) {
		margin-right:30%;
	}
	@media screen and (max-width: 425px) {
		margin-right:20%;
	}
`;
export const Lineblue = styled.div`
height: 9px;
width: 154px;
background:#2E90EA;
`;

export const Descrip = styled.p`
	// display: flex;
	// justify-content: 'flex-end';
	// max-height: 700px;
	// justify-content: center;
	// position: relative;
`;

export const DescripPrice = styled.p`

`;
export const Head =styled.div`
 display:flex;
`;
