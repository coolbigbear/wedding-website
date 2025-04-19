import PolaroidText from '../PolaroidText';
import { Title } from '../Title';

const About = ({ language, bgcolor }) => {
	return (
		<div className="flex flex-col bg-white font-serif">
			<Title title={language.title} subtitle={language.subtitle} bgcolor={bgcolor} />
			{language.body.map((body, index) => (
				<div key={index} className="relative w-full mt-5">
					<PolaroidText key={index} text={body} imageUrl={language.images[index]} left={index % 2 == 0} />
				</div>
			))}
		</div>
	);
};

export default About;
