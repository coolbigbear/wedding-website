'use client';

import type React from 'react';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarNavigationProps {
	items: {
		id: string;
		title: string;
		content: React.ReactNode;
	}[];
	defaultSelectedId?: string;
}



export default function ExpandableList({ items, defaultSelectedId }: SidebarNavigationProps) {
	const [selectedId, setSelectedId] = useState<string | undefined>(defaultSelectedId);

	const selectedItem = items.find((item) => item.id === selectedId);

	return (
		<div className="rounded-lg border">
			<div className="md:grid md:grid-cols-[250px_550px] flex justify-center">
				{/* Sidebar */}
				<div className="border-b md:border-b-0 md:border-r">
					<nav className="flex flex-col">
						{items.map((item) => (
							<button
								key={item.id}
								onClick={() => setSelectedId((prevId) => (prevId === item.id ? undefined : item.id))}
								className={cn(
									'group flex items-center justify-between border-b last:border-b-0 px-4 py-3 text-left font-medium transition-colors hover:bg-muted/50',
									selectedId === item.id && 'bg-muted/50 text-primary'
								)}
								aria-expanded={selectedId === item.id}>
								<span>{item.title}</span>
								<div className="relative h-4 w-4">
									<ChevronDown
										className={cn(
											'absolute h-4 w-4 transition-all duration-300 ease-in-out',
											selectedId === item.id ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0 text-muted-foreground'
										)}
									/>
									<ChevronRight
										className={cn(
											'absolute hidden h-4 w-4 transition-all duration-300 ease-in-out md:block',
											selectedId === item.id
												? 'opacity-100 rotate-0 text-primary'
												: 'opacity-0 -rotate-90 text-muted-foreground'
										)}
									/>
								</div>
							</button>
						))}
					</nav>
				</div>

				{/* Content Area (Desktop) */}
				<div className="relative hidden overflow-hidden md:block">
					{items.map((item) => (
						<div
							key={item.id}
							className={cn(
								'absolute inset-0 p-6 transition-all duration-300 ease-in-out',
								selectedId === item.id ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
							)}
							aria-hidden={selectedId !== item.id}>
							{item.content}
						</div>
					))}
					{!selectedItem && (
						<div className="flex h-full items-center justify-center p-6 text-muted-foreground">
							Select an item to view details
						</div>
					)}
				</div>
			</div>

			{/* Content Area (Mobile) */}
			<div className="md:hidden">
				{items.map((item) => (
					<div
						key={item.id}
						className={cn(
							'overflow-hidden transition-all duration-300 ease-in-out',
							selectedId === item.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
						)}>
						<div className="p-4">{item.content}</div>
					</div>
				))}
			</div>
		</div>
	);
}
