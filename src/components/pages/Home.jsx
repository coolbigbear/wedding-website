import Hero from "../Hero";
import HomeCard from "../HomeCard";
import Timeline from "../Timeline";
import { useContext, useState } from "react";
import { LanguageContext } from "../../App";

const Home = () => {

	const { language } = useContext(LanguageContext)
	const getColumn = (homeCards, startIndex, jumpAmount) => {
		let content = [];
		let delay = 100;
		for (let i = startIndex; i < homeCards.length; i = i + jumpAmount) {
			const item = homeCards[i];
			content.push(<HomeCard key={i} title={item.title} imageUrl={item.imageUrl} delay={delay * i} link={item.link} />);
		}
		return content;
	};
	
	const description = { __html: language.hero.invitation };

	return (
		<div className="flex flex-col bg-white font-serif">
			<Hero homepage={true} />
			<h1 className="text-4xl pb-14 mx-4 text-center text-black" dangerouslySetInnerHTML={description}/> 
			{/* <Timeline itinerary={language.itinerary} /> */}
			<div className="flex flex-col text-center 2xl:mx-32 mx-4">
				<div className="2xl:grid hidden 2xl:grid-cols-2 gap-6">
					{/* Left Column */}
					<div className="space-y-6">{getColumn(language.homeCards, 0, 2)}</div>
					{/* Right Column */}
					<div className="space-y-6">{getColumn(language.homeCards, 1, 2)}</div>
				</div>
				<div className="grid grid-cols-1 2xl:hidden gap-6">
					<div className="space-y-6">{getColumn(language.homeCards, 0, 1)}</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
