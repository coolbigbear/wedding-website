import { useContext } from "react";
import EventSection from "../EventSection";
import Hero from "../Hero";
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
			{/* <Hero title={language.attire.title} subtitle={language.attire.subtitle} homepage={false} /> */}
			<h1 className="text-2xl pb-14 md:mx-52 mx-4 text-center text-black mt-52">{language.attire.description}</h1>
			<div className="flex flex-col 2xl:mx-32 mx-8">
				<EventSection
					title="Welcome Dinner"
					description="Join us for a casual evening to kick off the wedding weekend. Smart casual attire is recommended - think sundresses, linen shirts, or light summer wear."
					images={['/images/attire.jpeg', '/images/attire.jpeg', '/images/attire.jpeg', '/images/attire.jpeg']}
				/>

				<EventSection
					title="Ceremony & Reception"
					description="For our special day, we suggest formal attire. Ladies may wear cocktail dresses or evening gowns, while gentlemen can opt for suits or tuxedos."
					images={['/images/attire.jpeg', '/images/attire.jpeg', '/images/attire.jpeg', '/images/attire.jpeg']}
				/>

				<EventSection
					title="Farewell Brunch"
					description="As we say goodbye, join us in comfortable, casual attire. Relaxed summer wear is perfect for this laid-back gathering."
					images={['/images/attire.jpeg', '/images/attire.jpeg', '/images/attire.jpeg', '/images/attire.jpeg']}
				/>
			</div>
		</div>
	);
};

export default Attire;
