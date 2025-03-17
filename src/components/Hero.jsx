import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Hero = () => {
	const { language } = useContext(LanguageContext)
	
	return (
		<div className="h-screen w-full flex text-center align-top">
			<div className="absolute inset-0 bg-cover md:bg-cover bg-center bg-no-repeat flex bg-hero md:bg-hero-hoz" />
			<div className="z-10 px-4 max-w-4xl mx-auto mt-[15vh] md:pt-[5vh]">
				<h1 className="text-5xl md:text-7xl text-amber-800 animate-fade-in-down font-[ephesis] outline-black">
					{language.title}
				</h1>
				<div className="bg-white bg-opacity-0 rounded-lg">
					<h2 className="text-2xl text-amber-800">{language.hero.date}</h2>
				</div>
			</div>
		</div>
	);
};

export default Hero;
