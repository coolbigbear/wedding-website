'use client';

import { useRef } from 'react';
import { DescriptionCard } from './DescriptionCard';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Autoscroll from 'embla-carousel-auto-scroll';
import { useIsVisible } from './hooks/useIsVisible';

export default function EventSection({ title, description, images, bgcolor, flowDirection = 'order-last' }) {
	const carousel = (
		<Carousel
			opts={{
				loop: true,
				align: 'start',
			}}
			plugins={[
				Autoscroll({
					speed: 0.7,
				}),
			]}
			className="h-full">
			<CarouselContent className="-ml-4 h-full">
				{images &&
					images.map((image, index) => (
						<CarouselItem className="basis-auto h-[45vh]" key={index}>
							<div key={index} className={`w-full h-full flex items-center justify-center`}>
								<img
									src={image}
									alt={`${title} image ${index + 1}`}
									className="max-h-full max-w-full object-cover rounded-xl"
								/>
							</div>
						</CarouselItem>
					))}
			</CarouselContent>
		</Carousel>
	);

	const ref = useRef();
	const isVisible = useIsVisible(ref);

	return (
		<div
			ref={ref}
			className={`mb-20 h-full
				transition-opacity ease-in duration-700
				${isVisible ? 'opacity-100' : 'opacity-0'}
			`}>
			<div className={`flex flex-col md:grid md:grid-cols-2 md:gap-10 h-full`}>
				<DescriptionCard title={title} description={description} bgcolor={bgcolor} />
				<div className={`h-full mx-10 md:${flowDirection}`}>{carousel}</div>
			</div>
		</div>
	);
}
