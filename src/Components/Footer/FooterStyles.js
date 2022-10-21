import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Column, Row } from '../../Styleall';

export const FooterContainer = styled.section`
	background-color: #F6F6F6;
	padding: 4rem 0 3rem 4rem;
	margin-top: 50px;
`;

export const FooterWrapper = styled.div`
	max-width: 1280px;
	margin-left: auto;
	margin-right: auto;
`;

export const FooterSubscription = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-bottom: 24px;
	padding: 24px;
	color: #fff;
`;

export const FooterSubHeading = styled.p`
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
		sans-serif;
	margin-bottom: 24px;
	font-size: 24px;
`;

export const FooterRow = styled(Row)`
	flex-wrap: wrap;
	@media screen and (max-width: 820px) {
		> div {
			width: 20%;
		}
		> div:first-child {
			width: 100%;
		}
	}
	@media screen and (max-width: 420px) {
		flex-direction: column;
		align-items: center;
		* {
			width: 100%;
			text-align: center;
		}
	}
`;

export const FooterGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	justify-content: center;
	align-items: center;
`;

export const FooterColumn = styled(Column)`
display:flex;
	@media screen and (max-width: 999px) {
		align-items: center;
		grid-column: 1/-1;
	}
`;

export const FooterSubText = styled.p`
	margin-bottom: 24px;
	font-size: 20px;
`;

export const FooterLinksContainer = styled.div`
	width: 100%;
	max-width: 1000px;
	display: flex;
	justify-content: center;
	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`;

export const FooterLinkItems = styled.div`
	display: flex;
	flex-direction: column;
	margin: 16px;
	text-align: left;
	box-sizing: border-box;
	color: #fff;
	@media screen and (max-width: 1000px) {
		align-items: center;
	}
`;


export const FooterLink = styled(Link)`
	color: #5F5F5F;
	text-decoration: none;
	margin-bottom: 0.5rem;
	padding:10px;
	&:hover {
		color: #2E90EA;
		transition: 0.3s ease-out;
	}
`;

export const FooterLogo = styled(Link)`
	color: #5F5F5F;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
`;
export const Logodot = styled.p`
color:#2E90EA;
`;


export const FooterRights = styled.div`
	color: #5F5F5F;
	margin-bottom: 16px;
	width: 100%;
	font-size: 0.8rem;
	padding: 1rem 0;
	margin: 1rem 0 0;
`;

export const FooterSocialIcon = styled.a`
   color: #5F5F5F;
	font-size: 24px;
	&:hover {
		color: #2E90EA;
	}
`;
export const ButtonFooter = styled.button`
border-radius: 30px;
background:none;
display: flex;
align-items: center;
justify-content: center;
width: 50%;
margin-top: 7%;
height: 38%;
margin-left: 30%;
white-space: nowrap;
padding: 10px 15px;
font-size: 14px;
color: #5F5F5F;
outline: none;
border: 2px solid #5F5F5F;
cursor: pointer;
overflow: hidden;

@media screen and (max-width: 768px) {
   text-align: center;
   padding-right:5%;
	margin-right: 10%;
   font-size: 12px;
   width: 100%;
   height: 40px;
}
`;