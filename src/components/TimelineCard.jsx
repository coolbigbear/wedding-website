export default function TimelineCard({event, left}) {
	return (
		// <div className={`md:w-[22rem] max-w-[50%] z-10 ${left ? 'text-right pr-12' : 'text-left pl-12'}`}>
		<div className={`md:w-[22rem] max-w-[50%] h-[10dvh] text-center z-10 ${left ? 'pr-12' : ' pl-12'}`}>
			<div className="bg-white p-2 z-10 rounded-lg shadow-md border border-gray-100">
				<div className="font-bold text-lg text-black mb-1">{event.time}</div>
				<div className="text-black">{event.title}</div>
			</div>
		</div>
	);
}
