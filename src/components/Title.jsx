

export function Title({ title, subtitle, bgcolor }) {
    return (
			<div className={`h-1/2 w-full flex text-center`}>
			<div className={`flex flex-col ${bgcolor} w-screen py-4 mt-[5dvh]`}>
					<h1 className="text-5xl md:text-7xl text-white animate-fade-in-down font-[ephesis] outline-black">
						{title}
					</h1>
					<div className="bg-white bg-opacity-0 rounded-lg">
						<h2 className="text-2xl text-white">{subtitle}</h2>
					</div>
				</div>
			</div>
		);
}