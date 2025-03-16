import { Header } from "../Header";
import Hero from "../Hero";
import ExpandableListV2 from "../ExpandableListV2";
import { useState } from "react";
import { translations } from "../../translations"


const Home = () => {

	return (
		<div className="flex flex-col bg-white font-serif">
			<Hero/>
			<ExpandableListV2 data={[
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
			/>
			{/* <Countdown t={t} />
			<Itinerary t={t} />
			<CulturalInfo t={t} />
			<CallToAction t={t} />
			<Footer /> */}
		</div>
	);
};

export default Home;
