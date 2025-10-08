import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer({socials}) {
    return (
        <footer className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-y-8">
                {/* ソーシャルメディアアイコン */}
                <div className="flex justify-center gap-x-8 md:gap-x-12">
                    {socials.map(social => (
                        <a 
                            key={social.name} 
                            href={social.uri} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-all duration-300 transform"
                        >
                            <FontAwesomeIcon icon={social.icon} className="w-10 h-10 md:w-12 md:h-12" />
                        </a>
                    ))}
                </div>
                {/* 著作権表示 */}
                <div className="text-sm md:text-base text-gray-400 tracking-wide">
                    © 2023-25, Jumpei Kawahara
                </div>
            </div>
        </footer>
    );
}