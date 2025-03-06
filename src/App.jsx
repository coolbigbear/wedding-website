import { useState } from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Itinerary from './components/Itinerary';
import CulturalInfo from './components/CulturalInfo';
import CallToAction from './components/CallToAction';
import LanguageSelector from './components/LanguageSelector';
import ExpandableList from './components/ExpandableList';
import Footer from './components/Footer';
import { translations } from './translations';

const App = () => {
	const [language, setLanguage] = useState('english');
	const t = translations[language];

	return (
		<div className="flex flex-col bg-white font-serif">
			{/* Language Selector */}
			<LanguageSelector setLanguage={setLanguage} />
			<Hero t={t} />
			<ExpandableList
				items={[
					{
						id: 'profile',
						title: 'Profile',
						content: <div className="space-y-4">test</div>,
					},
					{
						id: 'billing',
						title: 'Billing',
						content: <div className="space-y-4">test</div>,
					},
					{
						id: 'notifications',
						title: 'Notifications',
						content: <div className="space-y-4">test</div>,
					},
					{
						id: 'security',
						title: 'Security',
						content: <div className="space-y-4">test</div>,
					},
					{
						id: 'help',
						title: 'Help & Support',
						content: <div className="space-y-4">test</div>,
					},
				]}
				defaultSelectedId="profile"
			/>
			{/* <Countdown t={t} />
			<Itinerary t={t} />
			<CulturalInfo t={t} />
			<CallToAction t={t} />
			<Footer /> */}
		</div>
	);
};

export default App;
