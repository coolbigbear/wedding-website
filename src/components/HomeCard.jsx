import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useIsVisible } from './hooks/useIsVisible';

export default function HomeCard({ title, imageUrl, delay, link }) {
	const ref = useRef();
	const isVisible = useIsVisible(ref)

	return (
		<div
			ref={ref}
			className={`xl:mx-28 xl:h-[40rem] h-[25rem] bg-no-repeat relative rounded-lg shadow-md overflow-hidden bg-cover transition-opacity ease-in duration-700
				${isVisible ? "opacity-100" : "opacity-0"} 
				hover:scale-[1.01] hover:shadow-lg bg-[image:var(--image-url)] bg-center`}
			style={{ '--image-url': `url(${imageUrl})` }}>
			<Link to={link}>
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 transition-opacity duration-300 hover:opacity-100"></div>
				<div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 ease-out hover:translate-y-[-5px]">
					<h2 className="xl:text-6xl text-5xl font-semibold text-white">{title}</h2>
				</div>
			</Link>
		</div>
	);
}
