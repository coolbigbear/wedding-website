import Hero from "../Hero";
import HomeCard from "../HomeCard";
import { useContext, useState } from "react";
import { LanguageContext } from "../../App";




const Home = () => {

	const { language } = useContext(LanguageContext)
	const getLeftColumn = homeCards => {
		let content = [];
		let delay = 100;
		for (let i = 0; i < homeCards.length; i=i+2) {
			const item = homeCards[i];
			content.push(<HomeCard key={i} title={item.title} imageUrl={item.imageUrl} delay={delay * i} />);
		}
		return content;
  	};
	const getRightColumn = homeCards => {
		let content = [];
		let delay = 100;
		for (let i = 1; i < homeCards.length; i=i+2) {
			const item = homeCards[i];
			content.push(
				<HomeCard key={i} title={item.title} imageUrl={item.imageUrl} delay={delay*i} />
			);
		}
		return content;
  	};

	return (
		<div className="flex flex-col bg-white font-serif">
			<Hero />
			<h1 className="text-4xl pb-14 mx-4 text-center">{language.hero.invitation}</h1>
			<div className="flex flex-col text-center 2xl:mx-32 mx-4">
				<div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">
					{/* Left Column */}
					<div className="space-y-6">
						{getLeftColumn(language.homeCards)}
					</div>
					{/* Right Column */}
					<div className="space-y-6">
						{getRightColumn(language.homeCards)}
					</div>
				</div>
			</div>
			{/* <ExpandableListV2
					data={[
						{
							name: 'Notifications',
							content: 'Configure how you receive notifications and alerts from the system.',
						},
						{
							name: 'Navigation',
							content: 'Customize the navigation menu and sidebar appearance to your preference.',
						},
						{
							name: 'Home',
							content: 'Adjust your home screen layout and widget preferences.',
						},
						{
							name: 'Appearance',
							content: 'Change themes, colors, and visual elements throughout the interface.',
						},
						{
							name: 'Messages',
							content: 'Manage your messaging preferences, notifications, and privacy settings.',
						},
						{
							name: 'Language',
							content: 'Select your preferred language and regional settings.',
						},
					]}
				/> */}
			{/* <Countdown t={t} />
			<Itinerary t={t} />
			<CulturalInfo t={t} />
			<CallToAction t={t} />
			<Footer /> */}
		</div>
	);
};

export default Home;
