import { useContext, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { translations } from '../../translations';
import { Header } from '../Header';
import { LanguageContext } from '../../App';
import Footer from '../Footer';

const Layout = () => {
	const { setLanguage } = useContext(LanguageContext)
	return (
		<>
			<Header setLanguage={setLanguage} />
			<Outlet />
			<Footer/>
		</>
	);
};

export default Layout;
