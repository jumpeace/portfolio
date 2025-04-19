import {useState} from "react"

import Works from '@/components/works.jsx';
import Footer from '@/components/footer.jsx';
import NavBar from '@/components/navBar';

export default function Home() {
    const [works] = useState([
        {
            title: 'IAESTE TLSC',
            date: '2023年5月～',
            imgPath: '/shrine.JPG',
            description: '国際交流や他大学の人との交流をしています',
            link: {title: 'Instagram', uri: 'https://www.instagram.com/iaeste_japan_tlsc/'},
        },
        {
            title: 'HackU Kosen 2022',
            date: '2022年11月～12月',
            imgPath: '/hack_u_kosen.png',
            description: '点呼アプリを共同開発し、最優秀賞を受賞',
            link: {title: '発表会アーカイブ', uri: 'https://www.youtube.com/watch?v=VIwtxB-X24k&t=3430s'},
        },
        {
            title: '卒業研究(長野高専)',
            date: '2021年10月～2023年3月',
            imgPath: '/nitnc_research.png',
            description: '研究室の電子部品管理システムを開発',
        },
        {
            title: 'Web×IoT Makers',
            date: '2020年11月～2023年12月',
            imgPath: '/web_iot.png',
            description: 'COVIDiffuser を共同開発し、特別賞を受賞',
            link: {title: '公式サイト 開催報告', uri: 'https://webiotmakers.github.io/2020/shinshu/'},
        },
    ]);
    
    return (
        <main className="my-10">
            <Works works={works}/>
            <Footer/>
            <NavBar />
        </main>
    );
}
