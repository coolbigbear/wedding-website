import { useContext } from "react";
import EventSection from "../EventSection";
import { LanguageContext } from "../../App";
import { Title } from "../Title";

const Attire = () => {

	const { language } = useContext(LanguageContext)

	return (
		<div className="flex flex-col bg-white font-serif">
			<Title title={language.attire.title} subtitle={language.attire.subtitle} />
			<h1 className="text-2xl md:mx-40 mx-4 text-center text-black my-8">{language.attire.description}</h1>
			<div className="flex flex-col 2xl:mx-32">
				{language.attire.events.map((eventObj, index) => (
					<EventSection
						key={'event-section-' + index}
						title={eventObj.eventTitle}
						description={eventObj.eventDescription}
						images={ eventObj.images}
					/>
				))}
			</div>
		</div>
	);
};

export default Attire;
