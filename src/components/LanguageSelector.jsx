import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Globe } from 'lucide-react';

const LanguageSelector = ({ setLanguage }) => {
	return (
		<div className="fixed top-4 right-4 z-50 bg-white bg-opacity-80 rounded-full shadow-md p-2">
			<Tabs defaultValue="english" onValueChange={setLanguage}>
				<TabsList className="grid w-full grid-cols-4">
					<TabsTrigger value="english" className="text-sm">
						<Globe className="w-4 h-4 mr-1" /> EN
					</TabsTrigger>
					<TabsTrigger value="polish" className="text-sm">
						<Globe className="w-4 h-4 mr-1" /> PL
					</TabsTrigger>
					<TabsTrigger value="punjabi" className="text-sm">
						<Globe className="w-4 h-4 mr-1" /> PA
					</TabsTrigger>
					<TabsTrigger value="hindi" className="text-sm">
						<Globe className="w-4 h-4 mr-1" /> HI
					</TabsTrigger>
				</TabsList>
			</Tabs>
		</div>
	);
};

export default LanguageSelector;
