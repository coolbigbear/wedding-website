export function Title({ title, subtitle, bgcolor }) {
	return (
		<div className={`h-1/2 w-full flex text-center`}>
			<div id="banner" className={`absolute inset-0 h-[10rem] ${bgcolor} w-full`}></div>
			<div className={`z-30 flex flex-col ${bgcolor} w-screen py-4 px-2 `}>
				<h1 className="text-5xl md:text-7xl text-white animate-fade-in-down font-[ephesis] outline-black">{title}</h1>
				<div className="bg-white bg-opacity-0 rounded-lg">
					{subtitle && <h2 className="text-2xl text-white">{subtitle}</h2>}
				</div>
			</div>
		</div>
	);
}
