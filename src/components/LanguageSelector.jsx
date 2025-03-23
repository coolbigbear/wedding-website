import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LanguageSelector = ({ setLanguage }) => {
	function languageButton(flag, languageShorthand, language) {
		return (
			<TabsTrigger value={`${language}`} className="text-sm md:text-lg data-[state=active]:bg-gray-400 w-full">
				{supportsFlagEmoji() ? (
					<div>
						{flag} {languageShorthand}
					</div>
				) : (
					<div>
						{languageShorthand}
					</div>
				)}
			</TabsTrigger>
		);
	}

	function supportsFlagEmoji() {
		var canvas = document.createElement('canvas');
		canvas.height = 10;
		canvas.width = canvas.height * 2;
		var ctx = canvas.getContext('2d');
		ctx.font = canvas.height + 'px Arial';
		ctx.fillText('🇬🇧', 0, canvas.height);
		var data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
		var i = 0;
		while (i < data.length) {
			if (data[i] !== data[i + 1] || data[i] !== data[i + 2]) return true;
			i += 4;
		}
		return false;
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
