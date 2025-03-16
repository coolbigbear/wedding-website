import { useState } from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Itinerary from './components/Itinerary';
import CulturalInfo from './components/CulturalInfo';
import CallToAction from './components/CallToAction';
import LanguageSelector from './components/LanguageSelector';
import ExpandableList from './components/ExpandableList';
import ExpandableListV2 from './components/ExpandableListV2';
import Footer from './components/Footer';
import { translations } from './translations';
import { Header } from './components/Header';

const App = () => {
	const [language, setLanguage] = useState('english');
	const t = translations[language];
	return (
		<div className="flex flex-col bg-white font-serif">
			{/* Language Selector */}
			<Header setLanguage={setLanguage}/>
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

export default App;
