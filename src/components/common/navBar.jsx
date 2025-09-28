import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBar() {
    const router = useRouter();
    const links = [
        { uri: '/', title: 'HOME'},
        { uri: '/blog', title: 'BLOG'},
    ];

    // ブログの記事を見たときも、ナビゲーションメニューのフォーカスがBLOGになるようにする
    const linkUrisBySortingLength = links.map(link => link.uri).sort((uri1, uri2) => uri2.length - uri1.length);
    const [currentLinkUri, setCurrentLinkUri] = useState(null);
    useEffect(() => {
        for (let linkUri of linkUrisBySortingLength) {
            if (router.pathname.startsWith(linkUri)) {
                setCurrentLinkUri(linkUri);
                break;
            }
        }
    }, [router]);

    return (
        <nav className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-md transition-all duration-300">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center h-16 md:h-20">
                    <ul className="flex gap-x-12 md:gap-x-16">
                        {links.map(link => (
                            <li key={link.uri}>
                                <Link href={link.uri}>
                                    <div className={`
                                        relative text-xl md:text-2xl font-normal transition-colors duration-300 py-2
                                        ${currentLinkUri === link.uri 
                                            ? 'text-gray-900 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-900 after:transform after:scale-x-100' 
                                            : 'text-gray-500 hover:text-gray-900 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-900 after:transform after:scale-x-0 transition-transform duration-300 hover:after:scale-x-75'
                                        }
                                    `}>
                                        {link.title}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}