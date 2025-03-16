import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LanguageSelector = ({ setLanguage }) => {
	return (
		<div className="p-2 flex justify-center items-center">
			<Tabs defaultValue="english" onValueChange={setLanguage}>
				<TabsList className="grid w-full grid-cols-4">
					<TabsTrigger value="english" className="text-sm">
						🇬🇧 EN
					</TabsTrigger>
					<TabsTrigger value="polish" className="text-sm">
						🇵🇱 PL
					</TabsTrigger>
					<TabsTrigger value="punjabi" className="text-sm">
						🇮🇳 PA
					</TabsTrigger>
					<TabsTrigger value="hindi" className="text-sm">
						🇮🇳 HI
					</TabsTrigger>
				</TabsList>
			</Tabs>
		</div>
	);
};

export default LanguageSelector;
