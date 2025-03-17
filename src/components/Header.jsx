'use client';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';
import { MobileMenu } from './MobileMenu';
import { Link } from 'react-router-dom';
export function Header({ setLanguage }) {
	return (
		<header className="flex sticky top-0 z-50 w-full items-center bg-transparent">
			<div className="flex h-fit w-full justify-around  md:justify-between gap-2 px-4">
				<div className="flex m-2">
					<Link to="/">
						<Button variant="ghost" size="icon" className="text-black">
							<Home className="h-5 w-5" />
						</Button>
					</Link>
				</div>
				<LanguageSelector setLanguage={setLanguage} />
				<div className="flex md:hidden">
					<MobileMenu>
						<p href="/about" className="px-2 py-1">
							About us
						</p>
					</MobileMenu>
				</div>
			</div>
		</header>
	);
}
