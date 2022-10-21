import React from 'react';
import { Container, Section  } from '../../Styleall';
import {

	Buttonbrows,
	Iconsbox,
	FeatureWrapper,
	FeatureColumn,
	FeatureColumn2,
	FeatureColumn3,
	FeatureColumn4,
	FeatureName,
	SideHeading,
} from './FeaturesStyles';
// import { featuresData } from '../../Data/FeaturesData';

const Features = () => {
	// const initial = {
	// 	y: 40,
	// 	opacity: 0,
	// };
	// const animate = {
	// 	y: 0,
	// 	opacity: 1,
	// };

	return (
		<Section smPadding="50px 10px" position="relative" inverse id="shop">
			<Container>
				<FeatureWrapper>
				<SideHeading>OUR BRAND PARTNERS</SideHeading>
				<Iconsbox>
				<svg width="108" height="40" viewBox="0 0 108 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.0513 39.2172C8.83932 39.0883 6.21142 38.2005 4.15662 36.5517C3.76447 36.2367 2.83002 35.2922 2.51652 34.8939C1.68327 33.8355 1.11677 32.8055 0.738921 31.6628C-0.423779 28.145 0.174621 23.5289 2.45052 18.4628C4.39917 14.1255 7.40602 9.82388 12.6519 3.86611C13.4247 2.98944 15.7259 0.425537 15.7407 0.425537C15.7462 0.425537 15.6208 0.644985 15.463 0.912208C14.099 3.21999 12.9319 5.93831 12.2961 8.29165C11.2747 12.0678 11.3979 15.3083 12.6569 17.8211C13.5253 19.5522 15.0142 21.0517 16.6884 21.8805C19.6193 23.3311 23.9104 23.4511 29.1508 22.2317C29.5116 22.1472 47.3899 17.3533 68.8806 11.5783C90.3713 5.80277 107.958 1.0811 107.96 1.08499C107.966 1.08999 58.0313 22.6733 32.1093 33.8705C28.0041 35.6433 26.9063 36.0911 24.9763 36.7755C20.0428 38.5255 15.6236 39.3605 12.0513 39.2172Z" fill="black"/>
				</svg>

				<svg width="69" height="40" viewBox="0 0 69 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 35.4545L2.68952 40H20.8669L13.6331 27.7273L0 35.4545ZM44.8871 40L29.5847 14.0909L15.9516 21.7273L26.7097 40H44.8871ZM50.7298 40H69L45.3508 0L31.7177 7.72727L50.7298 40Z" fill="black"/>
				</svg>

				<svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M4.71853 0.323195C4.40625 0.395073 4.09396 1.54512 3.4347 2.22796C2.98362 2.65922 2.42846 2.65922 2.11617 3.19831C1.97738 3.378 2.04678 3.77333 1.90798 4.09678C1.6651 4.81556 0.762945 4.88744 0.762945 5.60621C0.762945 6.39687 1.5263 6.57656 2.15087 7.18753C2.67134 7.65473 2.74074 7.97818 3.29591 8.15788C3.81638 8.33757 4.57974 7.76255 5.2737 7.97818C5.86357 8.15788 6.41874 8.30163 6.55753 8.87665C6.69632 9.45168 6.55753 10.3142 5.86357 10.1705C5.62068 10.1705 4.57974 9.77513 3.3653 9.91888C1.83859 10.0986 0.103681 10.5658 -0.000413201 12.3268C-0.0698094 13.2971 1.07523 14.4112 2.15087 14.2315C2.91423 14.0878 2.53255 13.1174 2.98363 12.6502C3.57349 12.0752 6.66163 14.6628 9.61097 14.6628C10.8254 14.6628 11.7622 14.3394 12.6644 13.369C12.7338 13.2971 12.8726 13.1174 12.9767 13.1174C13.1155 13.1174 13.289 13.2612 13.3584 13.2971C15.7178 15.2378 17.4874 19.1192 26.0926 19.1552C27.307 19.1552 28.6949 19.7302 29.84 20.7724C30.8462 21.7428 31.4361 23.2522 31.9913 24.7616C32.8934 27.0617 34.4201 29.254 36.7796 31.6619C36.9184 31.8057 38.8268 33.351 39.0003 33.4229C39.0003 33.4229 39.2085 33.8182 39.1391 33.9979C39.0697 35.5074 38.8962 39.7482 42.019 39.9279C42.7824 39.9997 42.6089 39.3888 42.6089 39.0294C42.6089 38.3106 42.4701 37.52 42.8518 36.8012C43.3722 35.7589 41.7761 35.2917 41.7761 33.0276C41.8455 31.3385 40.4229 31.59 39.7289 30.3681C39.3473 29.6493 38.9656 29.1821 38.9656 28.2837C39.1044 23.1444 37.8899 19.7302 37.3001 18.9395C36.849 18.2926 36.3979 18.077 36.849 17.7536C39.4513 15.9926 40.0412 14.3753 40.0412 14.3753C41.4291 11.033 42.6436 7.97818 44.3785 6.68438C44.6908 6.43281 45.5929 5.71403 46.1481 5.46246C47.7442 4.6718 48.577 4.24054 49.028 3.77333C49.722 3.05455 50.3813 1.47324 49.6526 0.574768C48.7505 -0.611216 47.2931 0.323195 46.5992 0.754462C41.8108 3.70145 41.1169 8.76884 39.4513 11.7158C38.0981 14.0519 36.0162 15.8129 34.1078 15.9566C32.6505 16.1004 31.1238 15.7769 29.5971 15.0581C25.8497 13.369 23.8025 11.2127 23.282 10.8174C22.3105 10.0267 14.5381 2.15608 8.15364 1.79669C8.15364 1.79669 7.39029 0.17944 7.1821 0.17944C6.73102 0.107562 6.21055 1.14979 5.89827 1.29355C5.55129 1.47324 5.03081 0.251318 4.71853 0.323195Z" fill="black"/>
				</svg>

				<svg width="70" height="40" viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M44.9658 19.98C44.7267 20.1802 44.4077 20.3804 44.049 20.6206C41.7369 22.2623 38.3485 23.4234 33.9636 23.4234H33.6845C29.2995 23.4234 25.9112 22.3023 23.5991 20.6206C23.2403 20.3804 22.9214 20.1401 22.6822 19.98C22.9214 19.7798 23.2403 19.5796 23.5991 19.2993C25.9112 17.6577 29.2995 16.4965 33.6845 16.4965H33.9636C38.3485 16.4965 41.7369 17.6176 44.049 19.2993C44.4077 19.5796 44.6868 19.8198 44.9658 19.98ZM67.6082 6.36637C67.6082 6.36637 65.615 4.84484 59.3166 2.52252C53.7756 0.440441 49.59 0 49.59 0V12.012C49.59 13.6937 49.1515 15.2553 47.836 17.017C43.1321 15.2953 38.6674 14.2142 33.8041 14.2142C28.9408 14.2142 24.4761 15.2553 19.7722 17.017C18.4966 15.2553 18.0182 13.6937 18.0182 12.012V0C18.0182 0 13.7927 0.44044 8.25171 2.48248C1.99317 4.84484 0 6.36637 0 6.36637C0.279043 11.8118 5.02278 16.6567 12.4772 20.02C5.02278 23.3433 0.23918 28.1882 0 33.6336C0 33.6336 1.99317 35.1552 8.29157 37.4775C13.8326 39.5195 18.0182 39.96 18.0182 39.96L17.9784 27.9479C17.9784 26.2663 18.4567 24.7047 19.7323 22.9429C24.4362 24.6647 28.9009 25.7057 33.7642 25.7057C38.6276 25.7057 43.0923 24.6647 47.7961 22.9429C49.0718 24.7047 49.5501 26.2262 49.5501 27.9479V39.96C49.5501 39.96 53.7358 39.5195 59.2768 37.4775C65.5752 35.1552 67.5683 33.6336 67.5683 33.6336C67.2893 28.1882 62.5456 23.3433 55.0911 19.98C62.5854 16.6567 67.3292 11.8118 67.6082 6.36637ZM69.8405 32.1922C69.8405 32.4725 69.6811 32.7528 69.402 32.8328C69.123 32.9529 68.844 32.8729 68.6446 32.6727C68.4453 32.4725 68.3656 32.1521 68.4852 31.9119C68.6048 31.6316 68.844 31.4715 69.123 31.4715C69.3223 31.4715 69.4818 31.5515 69.6014 31.6717C69.7608 31.8318 69.8405 31.992 69.8405 32.1922ZM70 32.1922C70 31.8318 69.8007 31.5515 69.4818 31.3914C69.1629 31.2713 68.8041 31.3113 68.5649 31.5916C68.3257 31.8318 68.246 32.1922 68.3656 32.5125C68.4852 32.8328 68.8041 33.033 69.1629 33.033C69.6014 33.033 70 32.6727 70 32.1922Z" fill="black"/>
				</svg>



				</Iconsbox>
				</FeatureWrapper>
				<FeatureWrapper>
					{/* if we use Dynamic Data  */}
					{/* {featuresData.map((el, index) => (						
						<FeatureColumn
							initial={initial}
							animate={animate}
							transition={{ duration: 0.5 + index * 0.1 }}
							key={index}
						>
							<FeatureImageWrapper className={el.imgClass}>
								
							</FeatureImageWrapper>
							<FeatureName>{el.name}</FeatureName>
							<Buttonbrows>Browse</Buttonbrows>
							
						</FeatureColumn>
					))} */}
					<FeatureColumn>
					<FeatureName>Workout Classes</FeatureName>
					<Buttonbrows>Browse</Buttonbrows>
					</FeatureColumn>
					{/* 2 */}
					<FeatureColumn2>
					<FeatureName>Workout Classes</FeatureName>
					<Buttonbrows>Browse</Buttonbrows>
					</FeatureColumn2>
					{/* 3 */}
					<FeatureColumn3>
					<FeatureName>Workout Classes</FeatureName>
					<Buttonbrows>Browse</Buttonbrows>
					</FeatureColumn3>
					{/* 4 */}
					<FeatureColumn4>
					<FeatureName>Workout Classes</FeatureName>
					<Buttonbrows>Browse</Buttonbrows>
					</FeatureColumn4>
				</FeatureWrapper>
			</Container>
		</Section>
	);
};

export default Features;