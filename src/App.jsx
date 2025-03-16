import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';

import { createContext, useState } from 'react';
import { translations } from './translations';

export const LanguageContext = createContext('english');

const App = () => {
	const [language, setLanguage] = useState('english');
	const t = translations[language];
	return (
		<LanguageContext.Provider value={{ language: t, setLanguage: setLanguage }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						{/*<Route path="about" element={<About />} />
						 <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
					</Route>
				</Routes>
			</BrowserRouter>
		</LanguageContext.Provider>
	);
};

export default App;
