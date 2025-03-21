export function DescriptionCard({ title, description, bgcolor, time = null }) {
	return (
		<div className="flex flex-col mb-8 md:mb-8">
			<h2 className={`text-3xl font-medium text-center mb-5 px-2 ${bgcolor} text-white py-2`}>{title}</h2>
			{time && <div className="text-2xl text-center px-2 font-bold">{time}</div>}
			<div className="text-lg mx-10 mt-5">{description}</div>
		</div>
	);
}
