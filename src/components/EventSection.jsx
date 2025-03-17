'use client';

import { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

export default function EventSection({ title, description, images, imagesOnRight = true }) {
	const carouselRef = useRef(null);

	return (
		<div className="mb-20">
			<h2 className="text-3xl font-medium text-center mb-10">{title}</h2>

			<div className="flex flex-col md:flex-row md:gap-10">
				{imagesOnRight ? (
					<div className="flex flex-col">
						<div className="md:w-1/2 mb-8 md:mb-0">
							{typeof description === 'string' ? <p className="text-lg">{description}</p> : description}
						</div>

						<div className="md:w-1/2">
							<Carousel
								opts={{
									loop: true,
									align: 'start',
								}}
								className="md:hidden">
								<CarouselContent className="-ml-4">
									{images.map((image, index) => (
										<CarouselItem className="pl-4 basis-4/5" key={index}>
											<img
												key={index}
												src={image}
												alt={`${title} image ${index + 1}`}
												className=" object-contain overflow-hidden rounded-xl"
											/>
										</CarouselItem>
									))}
								</CarouselContent>
							</Carousel>
							<div className="hidden md:grid grid-cols-2 gap-4">
								{images.map((image, index) => (
									<img
										key={index}
										src={image || '/placeholder.svg'}
										alt={`${title} image ${index + 1}`}
										className=" object-contain overflow-hidden rounded-xl"
									/>
								))}
							</div>
						</div>
					</div>
				) : (
					<div className="flex flex-col">
						<div className="md:w-1/2">
							{/* Mobile carousel */}
							<Carousel
								opts={{
									loop: true,
									align: 'start',
								}}
								className="md:hidden">
								<CarouselContent className="-ml-4">
									{images.map((image, index) => (
										<CarouselItem className="pl-4 basis-4/5" key={index}>
											<img
												key={index}
												src={image}
												alt={`${title} image ${index + 1}`}
												className=" object-contain overflow-hidden rounded-xl"
											/>
										</CarouselItem>
									))}
								</CarouselContent>
							</Carousel>
							<div className="hidden md:grid grid-cols-2 gap-4">
								{images.map((image, index) => (
									<img
										key={index}
										src={image || '/placeholder.svg'}
										alt={`${title} image ${index + 1}`}
										className=" object-contain overflow-hidden rounded-xl"
									/>
								))}
							</div>
						</div>
						<div className="md:w-1/2 mb-8 md:mb-0 px-4">
							{typeof description === 'string' ? <p className="text-lg">{description}</p> : description}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
