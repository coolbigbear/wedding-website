export default function TimelineCard({event, left}) {
	return (
		<div className={`w-[15rem] md:w-[22rem] max-w-[50%] text-center z-10 ${left ? 'pr-12' : ' pl-12'}`}>
			<div id="timeline-card" className="bg-white p-2 z-10 rounded-lg shadow-md border border-gray-100">
				<div className="font-bold text-lg text-black mb-1">{event.time}</div>
				<div className="text-black">{event.title}</div>
			</div>
		</div>
	);
}
