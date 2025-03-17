import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import About from './components/pages/About';

import { createContext, useLayoutEffect, useState } from 'react';
import { translations } from './translations';
import Attire from './components/pages/Attire';

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
							<Route index element={<Home />} />
							<Route path="about" element={<About />} />
							<Route path="attire" element={<Attire />} />
							{/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
						</Route>
					</Routes>
				</Wrapper>
			</HashRouter>
		</LanguageContext.Provider>
	);
};

export default App;
