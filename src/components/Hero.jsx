import React, { useContext } from 'react';
import weddingImage from '../assets/taj-split.jpg';
import { LanguageContext } from '../App';

const Hero = () => {
	const { language } = useContext(LanguageContext)
	
	return (
		<div className="h-screen w-screen flex items-center text-center">
			<div
				className="absolute inset-0 bg-cover bg-center opacity-60 flex"
				style={{ backgroundImage: `url(${weddingImage})` }}
			/>
			<div className="relative z-10 px-4 max-w-4xl mx-auto">
				<h1 className="text-5xl md:text-6xl font-bold text-rose-800 mb-4 animate-fade-in-down">{language.title}</h1>
				<p className="text-xl md:text-2xl text-rose-700 mb-8">{language.date}</p>
				<div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
					<p className="text-xl text-gray-800 mb-4">{language.hero.invitation}</p>
					<p className="text-lg text-gray-700">{language.hero.details}</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
