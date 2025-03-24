import React, { useEffect, useRef, useState } from 'react';
import {
	Heart,
	Utensils,
	Music,
	Wine,
	Clock2,
	CarFront,
	PartyPopper,
	MessageCircleHeart,
	CakeSlice,
} from 'lucide-react';
import TimelineCard from './TimelineCard';
import { useIsVisible } from './hooks/useIsVisible';

const WeddingTimeline = ({ itinerary }) => {

	function useMatchHeight(timelineContainer, timelineCard, index) {
		const [height, setHeight] = useState('auto');

		useEffect(() => {
			const resizeObserver = new ResizeObserver((entries) => {
				// Get all containers and find height of last one
				let lastContainerHeight = 'auto';
				let elements = document.querySelectorAll(`#${timelineContainer}`);
				if (elements.length > 0) {
					const lastElement = elements[index];
					lastContainerHeight = lastElement.offsetHeight;
				}
				// Get all cards and find height of last one
				elements = document.querySelectorAll(`#${timelineCard}`);
				if (elements.length > 0) {
					const lastElement = elements[index];
					// console.log(`Container height: ${lastContainerHeight}`);
					let lastCardHeight = lastElement.offsetHeight / 2;
					// console.log(`Card height: ${lastCardHeight}`);
					setHeight(`${lastContainerHeight - lastCardHeight}px`);
				}
			});

			// Get all elements with the given ID
			const elements = document.querySelectorAll(`#${timelineContainer}`);
			if (elements.length > 0) {
				if (index == -1) {
					index = elements.length - 1;
				}
				resizeObserver.observe(elements[index]);
			}

			return () => {
				resizeObserver.disconnect();
			};
		}, [timelineContainer]);

		return height;
	}

	// Map string icon names to components
	const iconMap = {
		Clock: <Clock2 size={24} />,
		Heart: <Heart size={24} />,
		Wine: <Wine size={24} />,
		Utensils: <Utensils size={24} />,
		Speech: <MessageCircleHeart size={24} />,
		Cake: <CakeSlice size={24} />,
		Music: <Music size={24} />,
		Party: <PartyPopper size={24} />,
		Car: <CarFront size={24} />,
	};

	const topLineOffset = useMatchHeight('timeline', 'timeline-card', 0);
	const bottomLineOffset = useMatchHeight('timeline', 'timeline-card', -1);
	const timeLineLine = useRef();
	const isVisibleTimelineLine = useIsVisible(timeLineLine);

	return (
		<div className="flex w-full flex-col items-center mb-14 overflow-hidden">
			<div className="max-w-4xl rounded-lg w-full flex flex-col">
				<h2 className="text-3xl text-center mb-8 text-black">{itinerary.title}</h2>

				<div className="relative">
					{/* Main timeline vertical line */}
					<div
						ref={timeLineLine}
						className={`absolute left-1/2 top-[var(--top-cutoff)] bottom-[var(--bottom-cutoff)] w-2 bg-amber-900 transform -translate-x-1/2
							transition-opacity ease-in duration-700
							${isVisibleTimelineLine ? 'opacity-100' : 'opacity-0'} 
							`}
						style={{
							'--top-cutoff': topLineOffset,
							'--bottom-cutoff': bottomLineOffset,
						}}></div>

					{/* Timeline events */}
					<div className="md:space-y-8  mx-2 pb-5 overflow-hidden">
						{itinerary.events.map((event, index) => {
							const isEven = index % 2 === 0;
							const timeLineEvent = useRef();
							const isVisible = useIsVisible(timeLineEvent);
							return (
								<div
									id="timeline"
									ref={timeLineEvent}
									key={index}
									className={`relative flex items-center transition-opacity ease-in duration-700
									${isEven ? 'justify-start' : 'justify-end'}
									${isVisible ? 'opacity-100' : 'opacity-0'} `}>
									{/* Event content - LEFT SIDE */}
									{isEven && <TimelineCard event={event} left={true} />}

									{/* Icon circle and connector line */}
									<div className="absolute left-1/2 transform -translate-x-1/2 z-0">
										{/* Horizontal connector line */}
										<div
											className={`absolute top-5 h-1 border-dotted border-t-4 border-amber-900 w-[40vw] ${
												isEven ? 'right-9' : 'left-9'
											}`}></div>

										{/* Icon circle */}
										<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-4 border-amber-900">
											<div className="text-amber-900">{iconMap[event.icon]}</div>
										</div>
									</div>

									{/* Event content - RIGHT SIDE */}
									{!isEven && <TimelineCard event={event} left={false} />}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeddingTimeline;
