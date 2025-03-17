import { useEffect, useRef, useState } from "react";

export default function HomeCard({ title, imageUrl, delay }) {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						setIsVisible(true);
					}, delay);
					observer.unobserve(entry.target);
				}
			},
			{
				threshold: 0.1,
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [delay]);
	console.log(imageUrl)
	return (
		<div
			ref={ref}
			className={`xl:mx-28 xl:h-[40rem] h-[25rem] bg-no-repeat relative rounded-lg shadow-md overflow-hidden bg-cover transition-all duration-700 ease-out transform ${
				isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
			} hover:scale-[1.01] hover:shadow-lg bg-[image:var(--image-url)] bg-center`}
			style={{ '--image-url': `url(${imageUrl})` }}>
			{/* <img
				src={imageUrl}
				alt={title}
				className="transition-transform duration-500 ease-out hover:scale-105 bg-end"
			/> */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 transition-opacity duration-300 hover:opacity-100"></div>
			<div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 ease-out hover:translate-y-[-5px]">
				<h2 className="xl:text-6xl text-5xl font-semibold text-white">{title}</h2>
			</div>
		</div>
	);
}
