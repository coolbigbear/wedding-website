import React, { useEffect } from 'react';
import { HeartHandshake, Clock, CalendarDays, MapPin, UtensilsCrossed, Music } from 'lucide-react';

const ItineraryItem = ({ icon, color, title, time, details, index }) => {
	return (
		<div
			className="flex flex-col md:flex-row items-center opacity-0 translate-y-8 transition-all duration-700 ease-out"
			id={`item-${index}`}>
			<div className={`w-16 h-16 rounded-full bg-${color}-100 flex items-center justify-center mb-4 md:mb-0 md:mr-6`}>
				{icon}
			</div>
			<div className="md:flex-1 text-center md:text-left">
				<h3 className="text-xl font-semibold text-gray-800">{title}</h3>
				<div className="flex items-center justify-center md:justify-start text-gray-600 my-1">
					<Clock className="w-4 h-4 mr-2" />
					{time}
				</div>
				<p className="text-gray-700">{details}</p>
			</div>
		</div>
	);
};

const Itinerary = ({ t }) => {
	useEffect(() => {
		// Intersection Observer for animation on scroll
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.1,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('opacity-100');
					entry.target.classList.remove('translate-y-8');
					observer.unobserve(entry.target);
				}
			});
		}, observerOptions);

		// Observe all itinerary items
		document.querySelectorAll('[id^="item-"]').forEach((item) => {
			observer.observe(item);
		});

		return () => {
			// Clean up
			document.querySelectorAll('[id^="item-"]').forEach((item) => {
				observer.unobserve(item);
			});
		};
	}, []);

	const items = [
		{
			icon: <HeartHandshake className="w-8 h-8 text-rose-600" />,
			color: 'rose',
			title: t.itinerary.ceremony.title,
			time: t.itinerary.ceremony.time,
			details: t.itinerary.ceremony.details,
		},
		{
			icon: <CalendarDays className="w-8 h-8 text-amber-600" />,
			color: 'amber',
			title: t.itinerary.photos.title,
			time: t.itinerary.photos.time,
			details: t.itinerary.photos.details,
		},
		{
			icon: <MapPin className="w-8 h-8 text-green-600" />,
			color: 'green',
			title: t.itinerary.reception.title,
			time: t.itinerary.reception.time,
			details: t.itinerary.reception.details,
		},
		{
			icon: <UtensilsCrossed className="w-8 h-8 text-blue-600" />,
			color: 'blue',
			title: t.itinerary.dinner.title,
			time: t.itinerary.dinner.time,
			details: t.itinerary.dinner.details,
		},
		{
			icon: <Music className="w-8 h-8 text-purple-600" />,
			color: 'purple',
			title: t.itinerary.dancing.title,
			time: t.itinerary.dancing.time,
			details: t.itinerary.dancing.details,
		},
	];

	return (
		<div className="py-16 bg-white relative">
			{/* Vertical timeline line */}
			<div className="absolute left-1/2 top-32 bottom-16 w-0.5 bg-gray-200 hidden md:block"></div>

			<div className="max-w-4xl mx-auto px-4">
				<h2 className="text-3xl text-center font-semibold text-gray-800 mb-12">{t.itinerary.title}</h2>

				<div className="space-y-16">
					{items.map((item, index) => (
						<ItineraryItem
							key={index}
							index={index}
							icon={item.icon}
							color={item.color}
							title={item.title}
							time={item.time}
							details={item.details}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Itinerary;
