import Polaroid from "./Polaroid";

export default function PolaroidText({ text, imageUrl, left=true }) {
	
	text = { __html: text};

	return (
		<div className={`flex ${left ? "md:flex-row" : "md:flex-row-reverse" } flex-col items-center mx-10 md:mx-[20vw]`}>
			<div className="flex z-20 max-w-[70vw] md:text-xl items-center my-5">
				<div dangerouslySetInnerHTML={text}/>
			</div>
			<Polaroid imageUrl={imageUrl} left={left} />
		</div>
	);
}
