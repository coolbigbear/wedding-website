import 'react';
import { Gift } from 'lucide-react';

const CallToAction = ({ t }) => {
	return (
		<div className="py-16 bg-white">
			<div className="max-w-4xl mx-auto px-4 text-center">
				<div className="grid md:grid-cols-2 gap-8">
					<button className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition flex items-center justify-center">
						<div className="mr-2">✉️</div>
						{t.rsvp}
					</button>
					<button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition flex items-center justify-center">
						<Gift className="w-5 h-5 mr-2" />
						{t.gifts}
					</button>
				</div>
			</div>
		</div>
	);
};

export default CallToAction;
