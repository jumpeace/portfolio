export default function Footer({socials}) {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 md:py-14">
            <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-y-7">
                {/* ソーシャルメディアへのリンク */}
                <div className="flex justify-center gap-x-8 md:gap-x-10">
                    {socials.map(social => (
                        <a
                            key={social.name}
                            href={social.uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[0.65rem] md:text-xs font-light tracking-[0.2em] text-gray-500 hover:text-gray-900 transition-colors duration-300"
                        >
                            {social.name.toUpperCase()}
                        </a>
                    ))}
                </div>
                {/* 著作権表示 */}
                <p className="text-[0.6rem] md:text-[0.65rem] font-light tracking-[0.2em] text-gray-400">
                    © 2023-2026 JUMPEI KAWAHARA
                </p>
            </div>
        </footer>
    );
}
