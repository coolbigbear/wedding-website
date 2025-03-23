import Polaroid from '../Polaroid';
import PolaroidText from '../PolaroidText';
import { Title } from '../Title';

const About = ({ language, bgcolor }) => {
	return (
		<div className="flex flex-col bg-white font-serif">
			<Title title={language.title} subtitle={language.subtitle} bgcolor={bgcolor} />
			{language.body.map((body, index) => (
				<div className="relative w-full mt-5">
					<PolaroidText text={body} imageUrl={language.images[index]} left={index % 2 == 0} />
				</div>
			))}
		</div>
	);
};

export default About;
