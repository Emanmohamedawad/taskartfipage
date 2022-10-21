import styled from 'styled-components';
import { Container } from '../../Styleall';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
	background: white;
	
	margin-bottom: -80px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: absolute;
	top: 0;
	z-index: 50;
	width: 100%;
	transition: background-color 0.3s ease-in;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: start;
	height: 80px;
	${Container}
`;

export const NavLogo = styled(Link)`
	color: #000;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	z-index: 50;
`;

export const NavDot = styled.span`
	color:red;
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 50;
	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;
	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		color:#fff;
		height: 100vh;
		position: fixed;
		padding-top: 30%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: #071c2f;
	}
	> li:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	cursor: pointer;
	@media screen and (max-width: 960px) {
		width: 100%;
		&:hover {
			border: none;
		}
	}
`;
export const Button = styled.button`
color:#fff;
background-color:#2E90EA;
border-radius: 50px;
border:none;
width: 90px;
height: 45.08px;
margin-top:1%;
margin-left:50px;
@media screen and (max-width: 960px) {
	display:none;
}
`;
export const NavLinks = styled.span`
	color: #000;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	&:hover {
		color: #2E90EA;
		transition: all 0.3s ease;
	}
	@media screen and (max-width: 960px) {
		text-align: center;
		color: #fff;
		padding: 2rem;
		width: 100%;
		display: table;
		&:hover {
			color: #2E90EA;
			transition: all 0.3s ease;
		}
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;