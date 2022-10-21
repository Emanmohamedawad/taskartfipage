import React, { useState } from 'react';
import {  FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavDot,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
	Button,
} from './NavbarStyles.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { data } from '../../Data/NavbarData';

const Navbar = () => {
	const [show, setShow] = useState(false);

	let history = useNavigate();
	let location = useLocation();

	const handleClick = () => {
		setShow(!show);
	};

	const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const closeMobileMenu = (to, id) => {
		if (id && location.pathname === '/') {
			scrollTo(id);
		}
		history.push(to);
		setShow(false);
	};

	return (
		<IconContext.Provider value={{ color: '#000' }}>
		 {/* <IconContext.Provider> */}
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						
						Fitbit
						<NavDot >.</NavDot>
						
					</NavLogo>
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon>
					<NavMenu show={show}>
						{data.map((el, index) => (
							<NavItem key={index}>
								<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
									{el.text}
								</NavLinks>
							</NavItem>
						))}
					</NavMenu>
					<Button>Login</Button>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;