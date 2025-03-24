import { useRef } from 'react';
import Polaroid from './Polaroid';
import { useIsVisible } from './hooks/useIsVisible';

export default function PolaroidText({ text, imageUrl, left = true }) {
	text = { __html: text };

	const ref = useRef();
	const isVisible = useIsVisible(ref);

	return (
		<div
			ref={ref}
			className={`flex flex-col items-center mx-10 md:mx-[20vw]transition-opacity ease-in duration-700
			${left ? 'md:flex-row' : 'md:flex-row-reverse'}
			${isVisible ? 'opacity-100' : 'opacity-0'} 
		`}>
			<div className="flex z-20 max-w-[70vw] md:text-xl items-center my-5">
				<div dangerouslySetInnerHTML={text} />
			</div>
			<Polaroid imageUrl={imageUrl} left={left} />
		</div>
	);
}
