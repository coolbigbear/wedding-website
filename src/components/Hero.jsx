import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Hero = ({ title, subtitle, homepage }) => {
	const { language } = useContext(LanguageContext);

	return (
		<div
			className={`
				${homepage == true ? 'h-svh' : 'h-1/2'}
				w-full flex text-center align-top`}>
			{homepage == true ? (
				<div
					className={`absolute inset-0 bg-cover bg-bottom bg-no-repeat brightness-50 flex bg-hero md:bg-hero-hoz w-full h-svh`}
				/>
			) : (
				''
			)}
			<div className="z-10 px-4 max-w-4xl mx-auto mt-[15svh] md:pt-[5vh]">
				<h1 className="text-5xl md:text-8xl text-white animate-fade-in-down font-[ephesis] outline-black">
					{title ? title : language.title}
				</h1>
				<div className="bg-white bg-opacity-0 rounded-lg">
					<h2 className="text-2xl text-white">{subtitle ? subtitle : language.hero.date}</h2>
				</div>
			</div>
		</div>
	);
};

export default Hero;
