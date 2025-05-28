import { Title } from '../Title';
import ImmichButton from '../ImmichButton';
import { GalleryCard } from '../GalleryCard';

const Gallery = ({ language, bgcolor }) => {
	const markup = { __html: language.description };
	return (
		<div className={`flex flex-col bg-white font-serif`}>
			<Title title={language.title} subtitle={language.subtitle} bgcolor={bgcolor} />
			<h1 className="text-2xl md:mx-40 mx-4 text-center text-black my-8" dangerouslySetInnerHTML={markup}></h1>
			<div className="grid col-auto">
				<div className='mx-auto mb-5'>
					<ImmichButton
						buttonText='Upload'
						bgColor={'bg-black'}
						textColor={'white'}
						hoverBgColor={'bg-white'}
						hoverTextColor={'black'}
						url={'https://immich.coolbigbear.com/share/Syl2hg3evnhW7PwvUcIoYQMOnHHE6Kughza8kIfh_Jvnu4BEEQrgzfdddkw4s2u5dHA'}
					/>
				</div>
				<div className="md:grid md:grid-cols-3 md:gap-8 md:mx-8">
					{language.events.map((eventObj, index) => (
						<GalleryCard
							key={index}
							title={eventObj.title}
							description={eventObj.description}
							bgcolor={bgcolor}
							time={eventObj.time}
							url={eventObj.url}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Gallery;
