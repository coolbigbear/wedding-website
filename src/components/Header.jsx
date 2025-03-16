'use client';
import { Home } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { MobileMenu } from './MobileMenu';
export function Header({ setLanguage }) {
	return (
		<header className="flex sticky top-0 z-50 w-full items-center bg-transparent">
			<div className="flex h-fit w-full justify-between gap-2 px-4">
				<div className="flex m-2">
					<button>
						<Home/>
					</button>
				</div>
				<LanguageSelector setLanguage={setLanguage} />
				<div className="flex md:hidden">
					<MobileMenu>
						<p href="/about" className="px-2 py-1">
							About
						</p>
					</MobileMenu>
				</div>
			</div>
		</header>
	);
}
