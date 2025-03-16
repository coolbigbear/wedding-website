'use client';
import LanguageSelector from './LanguageSelector';
import { MobileMenu } from './MobileMenu';
export function Header({ setLanguage }) {
	return (
		<header className="flex sticky top-0 z-50 w-full items-center bg-transparent">
			<div className="flex h-fit w-full justify-between gap-2 px-4">
				<div className="m-2">
					<p className="text-4xl md:text-4xl font-[ephesis] p-2 text-black dark:text-white bg-white rounded-3xl">
						Sonali & Michał
					</p>
				</div>
				<div className="hidden md:flex">
					<LanguageSelector setLanguage={setLanguage} />
				</div>
				<div className="flex md:hidden">
					<MobileMenu>
						<LanguageSelector setLanguage={setLanguage} />
						<p href="/about" className="px-2 py-1">
							About
						</p>
					</MobileMenu>
				</div>
			</div>
		</header>
	);
}
