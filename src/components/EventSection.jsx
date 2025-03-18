'use client';

import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Autoscroll from 'embla-carousel-auto-scroll';


export default function EventSection({ title, description, images }) {
	return (
		<div className="mb-20 h-full">
			<div className="flex flex-col md:flex-row md:gap-10 h-full">
				<div className="flex flex-col md:w-1/2 mb-8 md:mb-0">
					<h2 className="text-3xl font-medium text-center mb-10">{title}</h2>
					<div className="text-lg mx-10">{description}</div>
				</div>

				<div className="md:w-1/2 h-full">
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
						className="md:hidden h-full">
						<CarouselContent className="-ml-4 h-full">
							{images.map((image, index) => (
								<CarouselItem className="basis-3/5 h-[45vh]" key={index}>
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
					<div id="grid" className="hidden md:grid grid-cols-2 gap-4 h-full">
						{images.map((image, index) => (
							<div key={index} className="relative w-full h-full flex items-center justify-center overflow-hidden">
								<img
									src={image}
									alt={`${title} image ${index + 1}`}
									className="max-h-full max-w-full object-contain rounded-xl"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
