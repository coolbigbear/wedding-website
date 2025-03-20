'use client';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';
import { MobileMenu } from './MobileMenu';
import { Link } from 'react-router-dom';
export function Header({ setLanguage }) {
	return (
		<header className="flex sticky top-0 z-50 w-full items-center bg-transparent">
			<div className="flex h-fit w-full justify-around md:justify-between md:px-4 md:px-8 md:pt-4">
				<div className="flex m-4">
					<Link to="/">
						<Button variant="ghost" size="icon" className="text-black w-11 h-11 md:w-16 md:h-16 shadow-md">
							<Home/>
						</Button>
					</Link>
				</div>
				<LanguageSelector setLanguage={setLanguage} />
				<div className="flex md:hidden m-4 justify-center items-center">
					<MobileMenu>
						<Link to={"/attire"} className='text-black visited:text-black'>Attire</Link>
					</MobileMenu>
				</div>
			</div>
		</header>
	);
}
