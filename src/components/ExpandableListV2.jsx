'use client';

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarProvider,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
} from '@/components/ui/sidebar';

export default function AccordionDemo({ data }) {
	const [selectedItem, setSelectedItem] = React.useState(data[0]);
	const [isContentVisible, setIsContentVisible] = React.useState(true);

	const handleItemClick = (item) => {
		if (selectedItem.name != item.name) {
			setIsContentVisible(false);
			setTimeout(() => {
				setSelectedItem(item);
				setIsContentVisible(true);
			}, 300); // Match this with the transition duration
		}
	};

	return (
		<div className="w-full">
			<div className="w-5/6 md:hidden">
				<Accordion type="multiple" collapsible="true" className="border-b md:border-b-0 md:border-r">
					<AccordionItem value="item-1">
						<AccordionTrigger>Is it accessible?</AccordionTrigger>
						<AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>Is it styled?</AccordionTrigger>
						<AccordionContent>
							Yes. It comes with default styles that matches the other components&apos; aesthetic.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>Is it animated?</AccordionTrigger>
						<AccordionContent>
							Yes. It's animated by default, but you can disable it if you prefer. Yes. It's animated by default, but
							you can disable it if you prefer. Yes. It's animated by default, but you can disable it if you prefer.
							Yes. It's animated by default, but you can disable it if you prefer. Yes. It's animated by default, but
							you can disable it if you prefer. Yes. It's animated by default, but you can disable it if you prefer.
							Yes. It's animated by default, but you can disable it if you prefer.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
			<div className="w-5/6 hidden md:flex h-[50vh] rounded-lg border overflow-hidden">
				<SidebarProvider className="items-start">
					<Sidebar collapsible="none">
						<SidebarContent>
							<SidebarGroup>
								<SidebarMenu>
									{data.map((item) => (
										<SidebarMenuItem key={item.name}>
											<SidebarMenuButton
												className="border-b md:border-b-0 md:border-r"
												asChild
												isActive={item.name === selectedItem.name}
												onClick={() => handleItemClick(item)}>
												<span>{item.name}</span>
											</SidebarMenuButton>
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroup>
						</SidebarContent>
					</Sidebar>
					<main className={`m-5 transition-opacity duration-500 ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
						{selectedItem.content}
					</main>
				</SidebarProvider>
			</div>
		</div>
	);
}
