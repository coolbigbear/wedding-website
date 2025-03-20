import { useContext } from "react";
import EventSection from "../EventSection";
import { LanguageContext } from "../../App";
import { Title } from "../Title";

const Events = () => {

	const { language } = useContext(LanguageContext)
	const bgcolor = "bg-amber-500"

	return (
		<div className="flex flex-col bg-white font-serif bg-">
			<Title title={language.events.title} subtitle={language.events.subtitle} bgcolor={bgcolor} />
			<h1 className="text-2xl md:mx-40 mx-4 text-center text-black my-8">{language.events.description}</h1>
			<div className="flex flex-col 2xl:mx-32">
				{language.events.events.map((eventObj, index) => (
					<EventSection
						key={'event-section-' + index}
						title={eventObj.title}
						description={eventObj.description}
						images={eventObj.images}
						bgcolor={bgcolor}
						flowDirection="flex-row-reverse"
					/>
				))}
			</div>
		</div>
	);
};

export default Events;
