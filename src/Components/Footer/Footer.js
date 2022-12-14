import React from 'react';
import {
	FooterLinkItems,
	Logodot,
	FooterContainer,
	FooterLink,
	FooterLogo,
	FooterRights,
	FooterSocialIcon,
	FooterWrapper,
	ButtonFooter,
	FooterColumn,
	FooterGrid,
} from './FooterStyles';
import { footerData, footerSocialData1 , footerSocialData2 , footerSocialData3 } from '../../Data/FooterData';
import { Row } from '../../Styleall';

function Footer() {
	return (
		
		<FooterContainer padding="4rem 0 3rem 4rem" margin="5%">
			<FooterWrapper>
				<FooterGrid justify="space-between">
					<FooterColumn id="footerLogo">
						<FooterLogo to="/">
							{/* <SocialIcon src="./assets/logo2.png" /> */}
							Fitbit
							<Logodot>.</Logodot>
						</FooterLogo>

						<Row align="center" margin="auto  0 0 0" gap="1rem">
							{footerSocialData1.map((social, index) => (
								<FooterSocialIcon
									key={index}
									href="https://www.facebook.com/"
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
							))}
							   {footerSocialData2.map((social, index) => (
								<FooterSocialIcon
									key={index}
									href="https://twitter.com/home"
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
									))}

								{footerSocialData3.map((social, index) => (
								<FooterSocialIcon
									key={index}
									href="https://www.linkedin.com/"
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
							))}
						</Row>
					</FooterColumn>
					{footerData.map((footerItem, index) => (
						<FooterLinkItems key={index}>
							{/* <FooterLinkTitle>{footerItem.title}</FooterLinkTitle> */}
							{footerItem.links.map((link, linkIndex) => (
								<FooterLink key={linkIndex} to="/">
									{link}
								</FooterLink>
							))}
						</FooterLinkItems>
					))}
				</FooterGrid>
				<FooterGrid padding="100px 0 0 0">
				<FooterColumn>
					<Row>
					<FooterRights>Copyright ?? 2022 Fitbit. All rights reserved.</FooterRights>
					</Row>
				</FooterColumn>
				<FooterColumn>
					<Row>
				<FooterRights>Privacy Policy</FooterRights>
				<FooterRights>Cookie Policy</FooterRights>
				<FooterRights>Sitemap</FooterRights>
				</Row>
				</FooterColumn>
				<FooterColumn>
				<Row>
					<ButtonFooter>
					<svg width="18" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_21_181)">
<path d="M15.153 2.9122C13.6802 2.00343 11.988 1.4707 10.1392 1.4707V2.9122H15.153Z" fill="#ED4C5C"/>
<path d="M10.1392 4.35311H16.9079C16.3752 3.82039 15.7798 3.319 15.153 2.91162H10.1392V4.35311Z" fill="white"/>
<path d="M10.1392 5.79599H18.0674C17.7227 5.26326 17.3466 4.79321 16.9392 4.35449H10.1392V5.79599Z" fill="#ED4C5C"/>
<path d="M10.1392 7.2369H18.8195C18.6001 6.73551 18.3494 6.23413 18.0674 5.79541H10.1392V7.2369Z" fill="white"/>
<path d="M10.1392 8.6788H19.2895C19.1642 8.17741 19.0075 7.70736 18.8195 7.2373H10.1392V8.6788Z" fill="#ED4C5C"/>
<path d="M10.1392 10.1515H19.5089C19.4775 9.65007 19.3835 9.18001 19.2895 8.70996H10.1392V10.1515Z" fill="white"/>
<path d="M19.5085 10.1519H10.1388V10.8726H0.737793C0.737793 11.1233 0.737793 11.3427 0.76913 11.5933H19.5085C19.5399 11.3427 19.5399 11.1233 19.5399 10.8726C19.5399 10.6219 19.5399 10.3712 19.5085 10.1519Z" fill="#ED4C5C"/>
<path d="M0.988889 13.0343H19.2896C19.4149 12.5642 19.4776 12.0942 19.5089 11.5928H0.769531C0.800868 12.0628 0.894878 12.5642 0.988889 13.0343Z" fill="white"/>
<path d="M1.45882 14.4757H18.8194C19.0074 14.0056 19.1641 13.5356 19.2895 13.0342H0.98877C1.11412 13.5356 1.2708 14.0056 1.45882 14.4757Z" fill="#ED4C5C"/>
<path d="M2.21107 15.9176H18.0675C18.3495 15.4475 18.6002 14.9775 18.8196 14.4761H1.45898C1.67834 14.9775 1.92904 15.4475 2.21107 15.9176Z" fill="white"/>
<path d="M3.33906 17.3585H16.9392C17.3466 16.9198 17.754 16.4184 18.0674 15.917H2.21094C2.52431 16.4497 2.93168 16.9198 3.33906 17.3585Z" fill="#ED4C5C"/>
<path d="M5.09422 18.8004H15.1847C15.8427 18.393 16.4068 17.8916 16.9395 17.3589H3.33936C3.87208 17.9229 4.46748 18.393 5.09422 18.8004Z" fill="white"/>
<path d="M10.139 20.2731C11.9878 20.2731 13.7114 19.7404 15.1842 18.8003H5.09375C6.56658 19.7404 8.2901 20.2731 10.139 20.2731Z" fill="#ED4C5C"/>
<path d="M5.12495 2.9122C4.46687 3.31957 3.87147 3.82096 3.33875 4.35369C2.90003 4.7924 2.52399 5.29379 2.21062 5.79518C1.92859 6.26523 1.64656 6.73529 1.45854 7.23667C1.27052 7.70673 1.11383 8.17678 0.988487 8.67817C0.86314 9.14822 0.800467 9.61827 0.76913 10.1197C0.737793 10.3704 0.737793 10.621 0.737793 10.8717H10.1388V1.4707C8.28996 1.4707 6.59777 2.00343 5.12495 2.9122Z" fill="#428BC1"/>
<path d="M7.946 1.78418L8.10268 2.25423H8.57273L8.19669 2.5676L8.32204 3.03765L7.946 2.75562L7.56995 3.03765L7.6953 2.5676L7.31926 2.25423H7.78931L7.946 1.78418ZM9.19947 3.66439L9.35615 4.13444H9.8262L9.45016 4.44781L9.57551 4.91786L9.19947 4.63583L8.82343 4.91786L8.94877 4.44781L8.57273 4.13444H9.04278L9.19947 3.66439ZM6.69252 3.66439L6.84921 4.13444H7.31926L6.94322 4.44781L7.06857 4.91786L6.69252 4.63583L6.31648 4.91786L6.44183 4.44781L6.06579 4.13444H6.53584L6.69252 3.66439ZM7.946 5.5446L8.10268 6.01465H8.57273L8.19669 6.32802L8.32204 6.79807L7.946 6.51604L7.56995 6.79807L7.6953 6.32802L7.31926 6.01465H7.78931L7.946 5.5446ZM5.43905 5.5446L5.59574 6.01465H6.06579L5.68975 6.32802L5.81509 6.79807L5.43905 6.51604L5.06301 6.79807L5.18836 6.32802L4.81232 6.01465H5.28237L5.43905 5.5446ZM2.93211 5.5446L3.08879 6.01465H3.55884L3.1828 6.32802L3.30815 6.79807L2.93211 6.51604L2.55607 6.79807L2.68141 6.32802L2.30537 6.01465H2.77542L2.93211 5.5446ZM9.19947 7.4248L9.35615 7.89486H9.8262L9.45016 8.20822L9.57551 8.67828L9.19947 8.39625L8.82343 8.67828L8.94877 8.20822L8.57273 7.89486H9.04278L9.19947 7.4248ZM6.69252 7.4248L6.84921 7.89486H7.31926L6.94322 8.20822L7.06857 8.67828L6.69252 8.39625L6.31648 8.67828L6.44183 8.20822L6.06579 7.89486H6.53584L6.69252 7.4248ZM4.18558 7.4248L4.34226 7.89486H4.81232L4.43627 8.20822L4.56162 8.67828L4.18558 8.39625L3.80954 8.67828L3.93488 8.20822L3.55884 7.89486H4.0289L4.18558 7.4248ZM7.946 9.30501L8.10268 9.77507H8.57273L8.19669 10.0884L8.32204 10.5585L7.946 10.2765L7.56995 10.5585L7.6953 10.0884L7.31926 9.77507H7.78931L7.946 9.30501ZM5.43905 9.30501L5.59574 9.77507H6.06579L5.68975 10.0884L5.81509 10.5585L5.43905 10.2765L5.06301 10.5585L5.18836 10.0884L4.81232 9.77507H5.28237L5.43905 9.30501ZM2.93211 9.30501L3.08879 9.77507H3.55884L3.1828 10.0884L3.30815 10.5585L2.93211 10.2765L2.55607 10.5585L2.68141 10.0884L2.30537 9.77507H2.77542L2.93211 9.30501ZM3.80954 4.91786L4.18558 4.63583L4.56162 4.91786L4.40494 4.44781L4.78098 4.13444H4.31093L4.18558 3.66439L4.0289 4.13444H3.59018L3.96622 4.41647L3.80954 4.91786M1.30259 8.67828L1.67863 8.39625L2.05468 8.67828L1.89799 8.20822L2.27403 7.89486H1.83532L1.67863 7.4248L1.52195 7.89486H1.20858C1.20858 7.92619 1.17725 7.95753 1.17725 7.98887L1.42794 8.17689L1.30259 8.67828" fill="white"/>
</g>
<defs>
<clipPath id="clip0_21_181">
<rect width="20.0556" height="20.0556" fill="white" transform="translate(0.111328 0.844238)"/>
</clipPath>
</defs>
               </svg>

						United States

						<svg width="15" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.21033 0.171756C0.388334 -0.00624838 0.666881 -0.0224306 0.863166 0.123209L0.919401 0.171756L5.24449 4.49662L9.56959 0.171756C9.74759 -0.00624838 10.0261 -0.0224306 10.2224 0.123209L10.2787 0.171756C10.4567 0.34976 10.4728 0.628307 10.3272 0.824592L10.2787 0.880827L5.59903 5.56046C5.42103 5.73846 5.14248 5.75464 4.94619 5.609L4.88996 5.56046L0.21033 0.880827C0.0145254 0.685022 0.0145254 0.36756 0.21033 0.171756Z" fill="#5F5F5F"/>
						</svg>



					</ButtonFooter>
				</Row>
				</FooterColumn>
				</FooterGrid>
				
			</FooterWrapper>
		</FooterContainer>
		
	);
}

export default Footer;