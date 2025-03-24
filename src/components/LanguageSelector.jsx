import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LanguageSelector = ({ setLanguage, bannerColor }) => {
	function languageButton(flag, languageShorthand, language) {
		return (
			<TabsTrigger
				value={`${language}`}
				className="focus:outline-none text-sm md:text-lg data-[state=active]:bg-[var(--hover-bg-color)] data-[state=active]:text-white w-full h-full hover:border-none hover:bg-[var(--hover-bg-color)] hover:text-white"
				style={{ '--hover-bg-color': bannerColor }}>
				{supportsFlagEmoji() ? (
					<div>
						{flag} {languageShorthand}
					</div>
				) : (
					<div>{languageShorthand}</div>
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
		<div className="flex m-4 items-center justify-end align-middle  md:basis-[0] md:flex-grow w-fit">
			<Tabs defaultValue="english" onValueChange={setLanguage} className="md:h-16 h-11 w-fit">
				<TabsList className="grid md:w-fit w-full h-full grid-cols-3 gap-[0.25rem] shadow-md">
					{languageButton('🇬🇧', 'EN', 'english')}
					{languageButton('🇵🇱', 'PL', 'polish')}
					{languageButton('🇮🇳', 'HI', 'hindi')}
				</TabsList>
			</Tabs>
		</div>
	);
};

export default LanguageSelector;
