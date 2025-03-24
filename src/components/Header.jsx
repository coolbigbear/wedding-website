'use client';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';
import { MobileMenu } from './MobileMenu';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../App';

export function Header({ setLanguage }) {
	const { language } = useContext(LanguageContext);
	let links = [...language.homeCards].sort((a, b) => a.order - b.order);

	function getBannerColor(banner) {
		const bg_amber_800 = 'rgb(120, 53, 15)';
		const [bannerColor, setBannerColor] = useState(bg_amber_800);
		const history = useNavigate();

		useEffect(() => {
			const element = document.getElementById(`${banner}`);
			if (element) {
				setBannerColor(window.getComputedStyle(element).backgroundColor);
			} else {
				setBannerColor(bg_amber_800);
			}
		}, [history]);

		return bannerColor;
	}

	function autoHideNavbar() {
		useEffect(() => {
			let prevScrollPos = window.scrollY;
			const navbar = document.getElementById('header');

			// Auto-hide Navbar on scroll
			window.onscroll = function () {
				let currentScrollPos = window.pageYOffset;
				if (prevScrollPos > currentScrollPos) {
					navbar.style.transform = 'translateY(0)';
				} else {
					navbar.style.transform = 'translateY(-100%)';
				}
				prevScrollPos = currentScrollPos;
			};
		}, [window.screenY]);
	}

	autoHideNavbar()
	let bannerColor = `${getBannerColor('banner')}`;

	return (
		<header
			id="header"
			className="flex sticky top-0 z-50 w-full items-center bg-transparent transition-transform duration-700">
			<div className="flex h-fit w-full justify-around md:justify-between md:px-10 md:pt-4">
				<div className="flex m-4 basis-[0] flex-grow">
					<Link to="/">
						<div className="p-1 bg-white shadow-md rounded-xl">
							<Button
								variant="ghost"
								size="icon"
								className={`hover:border-none focus:outline-none text-black w-9 h-9 md:w-14 md:h-14 hover:bg-[var(--hover-bg-color)] hover:text-white`}
								style={{ '--hover-bg-color': bannerColor }}>
								<Home />
							</Button>
						</div>
					</Link>
				</div>
				<div className="hidden xl:flex m-4 bg-white justify-center items-center rounded-xl shadow-md px-4">
					{links.map((link, index) => (
						<Link to={`${link.link}`} key={index}>
							<Button
								className={`focus:outline-none hover:text-white visited:text-black text-black px-4 bg-white shadow-none 
							hover:border-none border-none hover:bg-[var(--hover-bg-color)]`}
								style={{ '--hover-bg-color': bannerColor }}>
								{link.title}
							</Button>
						</Link>
					))}
				</div>
				<LanguageSelector setLanguage={setLanguage} bannerColor={bannerColor} />
				<div className="flex flex-row-reverse xl:hidden m-4 rounded-xl flex-grow basis-[0]">
					<MobileMenu>
						{links.map((link, index) => (
							<Link key={index} to={`${link.link}`} className="text-black visited:text-black">
								{link.title}
							</Link>
						))}
					</MobileMenu>
				</div>
			</div>
		</header>
	);
}
