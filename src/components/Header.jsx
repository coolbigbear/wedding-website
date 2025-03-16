'use client';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import LanguageSelector from './LanguageSelector';
import { MobileMenu } from './MobileMenu';
export function Header({ setLanguage }) {
	return (
		<header className="flex sticky top-0 z-50 w-full items-center border-b bg-background">
			<div className="flex h-fit w-full justify-between gap-2 px-4">
				<p className="text-5xl md:text-5xl font-[ephesis] p-2">Sonali & Michal</p>
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
