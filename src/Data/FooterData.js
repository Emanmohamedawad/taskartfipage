import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData1 = [
	{
		name: 'Facebook',
		icon: iconStyle(FaInstagram),
	},
];

export const footerSocialData2 = [
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
	},
];
export const footerSocialData3 = [
	
	{
		name: 'LinkedIn',
		icon: iconStyle(FaFacebook),
	},
];


export const footerData = [
	{
		title: 'Main',
		links: ['Browse Classes', 'Shop Now', 'Our Studios'],
	},
	{
		title: 'Product',
		links: ['Services', 'Pricing', 'Our Blogs'],
	},
	{
		title: 'Press',
		links: ['About Us', 'Contact Us', 'Our Blogs'],
	},

];