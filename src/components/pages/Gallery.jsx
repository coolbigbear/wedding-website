import { Title } from '../Title';
import ImmichButton from '../ImmichButton';

const Gallery = ({ language, bgcolor }) => {
	const markup = { __html: language.description };
	return (
		<div className={`flex flex-col bg-white font-serif`}>
			<Title title={language.title} subtitle={language.subtitle} bgcolor={bgcolor} />
			<h1 className="text-2xl md:mx-40 mx-4 text-center text-black my-8" dangerouslySetInnerHTML={markup}></h1>
			<div className="grid col-auto">
				<ImmichButton buttonText={language.events[0].title} bgColor={'bg-black'} textColor={'white'} hoverBgColor={'bg-white'} hoverTextColor={'black'}/>
			</div>
		</div>
	);
};

export default Gallery;
