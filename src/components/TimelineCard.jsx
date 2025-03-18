export default function TimelineCard({event, left}) {
	return (
		// <div className={`md:w-[22rem] max-w-[50%] z-10 ${left ? 'text-right pr-12' : 'text-left pl-12'}`}>
		<div className={`md:w-[22rem] max-w-[50%] text-center z-10 ${left ? 'pr-12' : ' pl-12'}`}>
			<div className="bg-white p-2 z-10 rounded-lg border border-gray-100">
				<div className="font-bold text-lg text-amber-900 mb-1">{event.time}</div>
				<div className="text-amber-900">{event.title}</div>
			</div>
		</div>
	);
}
