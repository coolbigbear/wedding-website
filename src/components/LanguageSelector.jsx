import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LanguageSelector = ({ setLanguage }) => {
	function languageButton(flag, languageShorthand, language) {
		return (
			<TabsTrigger value={`${language}`} className="text-sm md:text-lg data-[state=active]:bg-gray-400 w-full">
				{flag} {languageShorthand}
			</TabsTrigger>
		);
	}

	return (
		<div className="flex p-2 justify-center items-center">
			<Tabs defaultValue="english" onValueChange={setLanguage} className="md:h-16 h-11 w-full">
				<TabsList className="grid w-full h-full grid-cols-3 gap-2 shadow-md">
					{languageButton('🇬🇧', 'EN', "english")}
					{languageButton('🇵🇱', 'PL', "polish")}
					{languageButton('🇮🇳', 'HI', "hindi")}
				</TabsList>
			</Tabs>
		</div>
	);
};

export default LanguageSelector;
