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
position: relative;
`;
export const Header = styled.div`
display:flex;
// position:absolute;
margin-bottom: 3%;
// text-align:center;
// justify-content: center;
// padding:20%;
// height: 200px;
// padding-top: 10%;
// width: 250px;
// color:#000;
// background:#fff;
// &:hover {
// 	color: #2E90EA;
// 	box-shadow: 3px 0px 8px 7px #ddd7d7;
// }
`;
export const Title =styled.h3`
font-size: 3rem;
height: 69px;
width: 21%;
border-bottom: 4px solid #2E90EA;
line-height: 1.1;
font-weight: 600;
color: #000;
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
export const Buttonblog =styled.button`
border-radius: 30px;
background:none;
width: 37%;
margin-top: 7%;
height: 38%;
white-space: nowrap;
padding: 10px 20px;
font-size: 16px;
color: #fff;
outline: none;
border: 2px solid #fff;
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
   font-size: 12px;
   width: 30%;
   height: 40px;
}
`;
export const Imgr = styled.img`
margin-bottom: 3%;
Width: 100%;
height: 223px;
border: 0;
// max-width: 100%;
vertical-align: middle;
display: inline-block;
object-fit: cover;
// max-height: 700px;
z-index: 1;
`;
 export const Head2 =styled.div`
 position: absolute;
 top: 29%;
 right: 34%;
 @media screen and (max-width: 760px) {
	right: 20%;
}
 `;

export const Img = styled.img`
margin-bottom: 3%;
Width: 100%;
height: 460px;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
object-fit: cover;
max-height: 700px;
z-index: 1;
`;

export const TitleImg = styled.h3`
   font-size:30px;
   color:#fff;
`;


export const Head =styled.div`
position: absolute;
top: 67%;
right: 34%;
@media screen and (max-width: 760px) {
	right: 20%;
}
`;


// export const Heading = styled(motion.h2)`
// 	margin-bottom: 24px;
// 	font-size: 3rem;
// 	height: 69px;
// 	width: 45%;
//    border-bottom: 4px solid #2E90EA;
// 	line-height: 1.1;
// 	font-weight: 600;
// 	color: #000;
// 	@media screen and (max-width: 960px) {
// 		text-align: center;
// 		font-size: 1.5rem;
// 		width: 40%;
// 		height: 40px;
// 	}
// 	@media screen and (max-width: 768px) {
// 		text-align: center;
// 	}
// `;



