import Link from "next/link";

export default function NavBar() {
    const links = [
        { uri: '', title: 'HOME'},
        { uri: '#summary', title: 'ABOUT ME'},
        { uri: '#timeline', title: 'TIMELINE'},
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
            <div className="max-w-3xl mx-auto px-6">
                <div className="flex justify-center items-center h-14 md:h-16">
                    <ul className="flex gap-x-7 md:gap-x-12">
                        {links.map(link => (
                            <li key={link.uri}>
                                <Link href={link.uri}>
                                    <span className="block text-[0.65rem] md:text-xs font-light tracking-[0.2em] text-gray-500 hover:text-gray-900 transition-colors duration-300">
                                        {link.title}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
