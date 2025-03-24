import { Title } from '../Title';
import { DescriptionCard } from '../DescriptionCard';

const Events = ({ language, bgcolor }) => {
	const markup = { __html: language.description };
	return (
		<div className={`flex flex-col bg-white font-serif`}>
			<Title title={language.title} subtitle={language.subtitle} bgcolor={bgcolor} />
			<h1 className="text-2xl md:mx-40 mx-4 text-center text-black my-8" dangerouslySetInnerHTML={markup}></h1>
			<div className="grid col-auto">
				<div className="md:grid md:grid-cols-3 md:gap-8 md:mx-8">
					{language.events.map((eventObj, index) => (
						<DescriptionCard
							key={index}
							title={eventObj.title}
							description={eventObj.description}
							bgcolor={bgcolor}
							time={eventObj.time}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Events;
