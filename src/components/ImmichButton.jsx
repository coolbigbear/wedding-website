import React from 'react';

const ImmichButton = ({ bgColor, hoverBgColor, textColor, hoverTextColor }) => {

	return (
		<div className="mx-auto">
			<a href="https://immich.coolbigbear.com/share/Syl2hg3evnhW7PwvUcIoYQMOnHHE6Kughza8kIfh_Jvnu4BEEQrgzfdddkw4s2u5dHA">
				<button
					className={`
					gap-4
					flex
					items-center
					border-2
					hover:border-black
					focus:outline-none 
					w-auto 
					h-auto 
					${bgColor}
					hover:bg-[var(--hover-bg-color)]
					text-[var(--text-color)]
					hover:text-[var(--hover-text-color)]
					md:text-2xl`}
					style={{
						'--hover-bg-color': hoverBgColor,
						'--text-color': textColor,
						'--hover-text-color': hoverTextColor,
					}}>
					Upload
					<img src="/images/immich.png" className="size-10" />
				</button>
			</a>
		</div>
	);
};

export default ImmichButton;
