import { useContext } from 'react';
import { LanguageContext } from '../App';

const ImmichButton = ({ bgColor, hoverBgColor, textColor, hoverTextColor, buttonText, url }) => {

	const { language } = useContext(LanguageContext);
	return (
		<div className="mx-auto">
			<a href={url}>
				<button
					className={`
					gap-4
					flex
					items-center
					border-2
					hover:border-black
					focus:outline-none 
					w-auto 
					h-auto 
					${bgColor}
					hover:bg-[var(--hover-bg-color)]
					text-[var(--text-color)]
					hover:text-[var(--hover-text-color)]
					md:text-2xl`}
					style={{
						'--hover-bg-color': hoverBgColor,
						'--text-color': textColor,
						'--hover-text-color': hoverTextColor,
					}}>
					{ buttonText ? buttonText : language.gallery.buttonText}
					<img src="/images/immich.png" className="size-10" />
				</button>
			</a>
		</div>
	);
};

export default ImmichButton;
