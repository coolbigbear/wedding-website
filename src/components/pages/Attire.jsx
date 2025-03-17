import EventSection from "../EventSection";
import Hero from "../Hero";

const Attire = () => {
	return (
		<div className="flex flex-col bg-white font-serif">
			<Hero title={'Attire'} subtitle={'What should I wear?'} homepage={false} />
			<h1 className="text-2xl pb-14 md:mx-52 mx-4 text-center text-black mt-52">
				We gathered mood boards to inspire your outfits for the wedding events, but please wear whatever makes you feel
				most comfortable, and beautiful.
			</h1>
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
					imagesOnRight={false}
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
