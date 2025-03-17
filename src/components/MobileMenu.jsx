'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function MobileMenu({ children }) {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<div className="flex items-center">
					<Button variant="ghost" size="icon" className="md:hidden">
						<Menu className="h-5 w-5" />
						<span className="sr-only">Toggle menu</span>
					</Button>
				</div>
			</SheetTrigger>
			<SheetContent side="right" className="w-[240px] sm:w-[300px]">
				<div className="flex h-full flex-col justify-between">
					<div className="mt-8 flex flex-col gap-4">{children}</div>
					<div className="flex items-center">
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
