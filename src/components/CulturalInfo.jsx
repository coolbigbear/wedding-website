import React, { useEffect, useRef } from 'react';

const CulturalInfo = ({ t }) => {
	const sectionRef = useRef(null);

	useEffect(() => {
		// Animation for cards on scroll
		const cards = document.querySelectorAll('.cultural-card');

		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.1,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry, index) => {
				if (entry.isIntersecting) {
					// Stagger the animations
					setTimeout(() => {
						entry.target.classList.add('opacity-100');
						entry.target.classList.remove('translate-y-8');
					}, index * 200);

					observer.unobserve(entry.target);
				}
			});
		}, observerOptions);

		cards.forEach((card) => {
			observer.observe(card);
		});

		return () => {
			cards.forEach((card) => {
				observer.unobserve(card);
			});
		};
	}, []);

	return (
		<div className="py-16 bg-gradient-to-r from-red-50 to-blue-50" ref={sectionRef}>
			<div className="max-w-4xl mx-auto px-4">
				<h2 className="text-3xl text-center font-semibold text-gray-800 mb-10">{t.culturalInfo.title}</h2>

				<div className="grid md:grid-cols-2 gap-8">
					<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow opacity-0 translate-y-8 duration-700 cultural-card">
						<h3 className="text-xl font-semibold text-gray-800 mb-4">{t.culturalInfo.polishTraditions.title}</h3>
						<p className="text-gray-700">{t.culturalInfo.polishTraditions.details}</p>
					</div>

					<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow opacity-0 translate-y-8 duration-700 cultural-card">
						<h3 className="text-xl font-semibold text-gray-800 mb-4">{t.culturalInfo.indianTraditions.title}</h3>
						<p className="text-gray-700">{t.culturalInfo.indianTraditions.details}</p>
					</div>

					<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow md:col-span-2 opacity-0 translate-y-8 duration-700 cultural-card">
						<h3 className="text-xl font-semibold text-gray-800 mb-4">{t.culturalInfo.dresscode.title}</h3>
						<p className="text-gray-700">{t.culturalInfo.dresscode.details}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CulturalInfo;
