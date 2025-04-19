import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import About from './components/pages/About';

import { createContext, useLayoutEffect, useState } from 'react';
import { translations } from './translations';
import Attire from './components/pages/Attire';
import Events from './components/pages/Events';
import Gallery from './components/pages/Gallery';

export const LanguageContext = createContext('english');

const Wrapper = ({ children }) => {
	const location = useLocation();
	useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0);
	}, [location.pathname]);
	return children;
};

const App = () => {
	const [language, setLanguage] = useState('english');
	const t = translations[language];
	return (
		<LanguageContext.Provider value={{ language: t, setLanguage: setLanguage }}>
			<HashRouter basename={import.meta.env.BASE_URL}>
				<Wrapper>
					<Routes>
						<Route path="/" element={<Layout />}>
							{/* <div className='bg-bl'></div> */}
							<Route index element={<Home />} />
							<Route path="about" element={<About language={t.about} bgcolor={'bg-green-700'} />} />
							<Route path="attire" element={<Attire language={t.attire} bgcolor={'bg-amber-900'} />} />
							<Route path="events" element={<Events language={t.events} bgcolor={'bg-orange-500'} />} />
							<Route path="qanda" element={<Events language={t.qanda} bgcolor={'bg-red-800'} />} />
							<Route path="speeches" element={<Events language={t.speeches} bgcolor={'bg-purple-900'} />} />
							<Route path="gallery" element={<Gallery language={t.gallery} bgcolor={'bg-blue-500'} />} />
							<Route path="*" element={<Home />} />
						</Route>
					</Routes>
				</Wrapper>
			</HashRouter>
		</LanguageContext.Provider>
	);
};

export default App;
