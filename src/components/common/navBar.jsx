import { useState, useReducer } from "react";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    const [links] = useState([
        {uri: '/', title: 'Home'},
        {uri: '/works', title: 'Works'},
    ]);

    return (<div className="fixed top-0 left-0 w-full z-10 bg-white shadow-lg">
            <div className="flex justify-center gap-x-6 h-12 md:h-14 tracking-widest items-center text-xl">
                {links.map(link => (
                    <div key={link.title}>
                        {link.uri == router.pathname ? 
                            (<a className="text-gray-900 hover:border-gray-900 hover:border-b-2" href={link.uri}>{link.title}</a>) :
                            (<a className="font-light text-gray-500 hover:border-gray-600 hover:border-b-2" href={link.uri}>{link.title}</a>)
                        } 
                    </div>
                    
                ))}
            </div>
        </div>
    );
}
