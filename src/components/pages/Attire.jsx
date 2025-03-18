import { useContext } from "react";
import EventSection from "../EventSection";
import { LanguageContext } from "../../App";

const Attire = () => {

	const { language } = useContext(LanguageContext)

	return (
		<div className="flex flex-col bg-white font-serif">
			<div className={`h-1/2 w-full flex text-center`}>
				<div className="flex flex-col bg-amber-900 w-screen py-4 mt-[10vh]">
					<h1 className="text-5xl md:text-7xl text-white animate-fade-in-down font-[ephesis] outline-black">
						{language.attire.title}
					</h1>
					<div className="bg-white bg-opacity-0 rounded-lg">
						<h2 className="text-2xl text-white">{language.attire.subtitle}</h2>
					</div>
				</div>
			</div>
			<h1 className="text-2xl pb-14 md:mx-40 mx-4 text-center text-black mt-32">{language.attire.description}</h1>
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
