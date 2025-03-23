export default function Polaroid({ imageUrl, left=true }) {
	return (
		<div className={`bg-white z-10 shadow-xl p-[3%] pb-[8%] h-fit w-fit ${left ? '-rotate-6' : 'rotate-6'}  border`}>
			<div
				className="h-full w-full"
				style={{ '--image-url': `url(${imageUrl})` }}>
				<img
					className={`md:max-h-[20vw] md:max-w-[20vw] h-auto w-auto max-h-[40vh] max-w-[40vh] object-contain bg-center bg-no-repeat`}
					src={`${imageUrl}`}></img>
			</div>
		</div>
	);
}
