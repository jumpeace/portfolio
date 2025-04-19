import { useState, useReducer } from "react";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    const [links] = useState([
        {uri: '/', title: 'Home'},
        {uri: '/works', title: 'Works'},
    ]);

    return (<div className="fixed top-0 left-0 w-full z-10 bg-white shadow-sm">
            <div className="flex justify-center gap-x-6 md:gap-x-8 h-12 md:h-20 tracking-widest items-center text-xl md:text-3xl">
                {links.map(link => (
                    <div key={link.title}>
                        {link.uri == router.pathname ? 
                            (<a className="font-normal text-[#415657] border-white border-b-2 hover:border-[#415657]" href={link.uri}>{link.title}</a>) :
                            (<a className="font-light text-gray-300 border-white border-b-2 hover:border-gray-300" href={link.uri}>{link.title}</a>)
                        } 
                    </div>
                    
                ))}
            </div>
        </div>
    );
}
