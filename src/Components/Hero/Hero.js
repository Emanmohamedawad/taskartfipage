import React from 'react';

import { Button, Container, MainHeading } from '../../Styleall';
import { HeroVideo, HeroSection, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/v2_Trim.mp4" type="video/mp4" autoPlay muted loop >
				</HeroVideo>
			<Container>
				<MainHeading>Dare to be great.</MainHeading>

				<ButtonWrapper>
				<HeroButton>Get Started</HeroButton>
					
						<Button>
						<svg width="25" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.17757 0.951355C12.3227 0.951355 15.6984 4.32539 15.6984 8.47654C15.6984 12.619 12.3227 15.993 8.17757 15.993C4.0324 15.993 0.656738 12.619 0.656738 8.47654C0.656738 4.32539 4.0324 0.951355 8.17757 0.951355ZM7.32095 5.48635C7.16124 5.48635 7.00879 5.52263 6.8636 5.59519C6.68212 5.69677 6.53693 5.8564 6.45707 6.04506C6.40626 6.17567 6.3264 6.56749 6.3264 6.57475C6.24655 7.00285 6.20299 7.69943 6.20299 8.46856C6.20299 9.20214 6.24655 9.86897 6.31188 10.3043C6.31914 10.3116 6.399 10.7977 6.48611 10.9646C6.64582 11.2694 6.95798 11.458 7.29191 11.458H7.32095C7.53874 11.4508 7.99608 11.2621 7.99608 11.2549C8.76559 10.9356 10.2828 9.94153 10.8926 9.28123L10.9362 9.2377C11.016 9.15788 11.1177 9.03453 11.1394 9.0055C11.2556 8.85313 11.3137 8.66447 11.3137 8.47654C11.3137 8.26539 11.2483 8.06948 11.1249 7.90985C11.0959 7.88083 10.987 7.75747 10.8854 7.65589C10.2901 7.01736 8.73655 5.9725 7.92349 5.65324C7.80008 5.60317 7.48792 5.4936 7.32095 5.48635Z" fill="white"/>
						</svg>

							Watch Demo</Button>
					
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;