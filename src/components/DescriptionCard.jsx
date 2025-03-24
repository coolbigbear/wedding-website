import { useRef } from "react";
import { useIsVisible } from './hooks/useIsVisible';


export function DescriptionCard({ title, description, bgcolor, time = null }) {
	description = { __html: description };

	const ref = useRef();
	const isVisible = useIsVisible(ref);

	return (
		<div
			ref={ref}
			className={`flex flex-col mb-8 md:mb-8
				transition-opacity ease-in duration-700
				${isVisible ? 'opacity-100' : 'opacity-0'} 
		`}>
			<h2 className={`text-3xl font-medium text-center mb-5 px-2 ${bgcolor} text-white py-2`}>{title}</h2>
			{time && <div className="text-2xl text-center px-2 font-bold">{time}</div>}
			<div className="text-lg md:text-2xl mx-10 mt-5" dangerouslySetInnerHTML={description} />
		</div>
	);
}
