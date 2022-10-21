import React from 'react';
import { Content } from '../Components/Content/Content';
import { Number } from '../Components/Number/Number';
import { New } from '../Components/New/New';
import { Blogs } from '../Components/Blogs/Blogs';
import { Subscrib } from './../Components/Subscrip/Subscrib';
import Features from '../Components/Features/Features';
import Hero from '../Components/Hero/Hero';
 import { heroOne } from '../Data/HeroData';



const Home = () => {
	return (

		 <>
		 	<Hero />
		 	<Features /> 
		 	<Content {...heroOne} />
			<Number/>
			<New/>
			<Blogs />
			<Subscrib/>
		 	
		 </>
	);
};

export default Home;