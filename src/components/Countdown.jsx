import React, { useState, useEffect } from 'react';

const Countdown = ({ t }) => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	// Wedding date - set to 6 months from now
	const weddingDate = new Date();
	weddingDate.setMonth(weddingDate.getMonth() + 6);

	// Update countdown timer
	useEffect(() => {
		const timer = setInterval(() => {
			const now = new Date();
			const difference = weddingDate.getTime() - now.getTime();

			const days = Math.floor(difference / (1000 * 60 * 60 * 24));
			const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((difference % (1000 * 60)) / 1000);

			setTimeLeft({ days, hours, minutes, seconds });
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="py-16 bg-gradient-to-r from-pink-100 to-purple-100">
			<div className="max-w-4xl mx-auto px-4">
				<h2 className="text-3xl text-center font-semibold text-gray-800 mb-10">{t.countdown.title}</h2>
				<div className="grid grid-cols-4 gap-4 text-center">
					<div className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform">
						<div className="text-4xl font-bold text-purple-600">{timeLeft.days}</div>
						<div className="text-gray-600">{t.countdown.days}</div>
					</div>
					<div className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform">
						<div className="text-4xl font-bold text-purple-600">{timeLeft.hours}</div>
						<div className="text-gray-600">{t.countdown.hours}</div>
					</div>
					<div className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform">
						<div className="text-4xl font-bold text-purple-600">{timeLeft.minutes}</div>
						<div className="text-gray-600">{t.countdown.minutes}</div>
					</div>
					<div className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform">
						<div className="text-4xl font-bold text-purple-600">{timeLeft.seconds}</div>
						<div className="text-gray-600">{t.countdown.seconds}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Countdown;
