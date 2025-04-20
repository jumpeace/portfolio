import { useState } from "react"

import Hero from '@/components/pages/index/hero.jsx';
import Summary from "@/components/pages/index/summary";
import SkillGenre from '@/components/pages/index/skillGenre';
import Footer from '@/components/common/footer.jsx';
import NavBar from '@/components/common/navBar';

import { faCode, faDatabase, faGem, faIdBadge, faLanguage, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faSchool, faBook, faGraduationCap, faFlaskVial, faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import { faCss3, faGitAlt, faJs, faPython } from "@fortawesome/free-brands-svg-icons";

// ホームのページ（プロフィール概要、スキルを表示）
export default function Home() {
    const [hero] = useState({link: 'hero.png'});
    const [title] = useState({
        icon: {link: 'icon.jpg', alt: 'icon image'},
        title: 'Jumpei Kawahara',
        subTitle: 'Computer Science College Student'
    });
    const [summaryItems] = useState([
        {
            key: 'school',
            title: '学校', 
            icon: faSchool,
            value: '東京農工大学大学院',
        },
        {
            key: 'department',
            title: '所属', 
            icon: faBook,
            value: '工学府 知能情報システム工学専攻',
        },
        {
            key: 'grade',
            title: '学年', 
            icon: faGraduationCap,
            value: '修士課程 1年',
        },
        {
            key: 'laboratory',
            title: '研究室',
            icon: faFlaskVial,
            value: '藤田桂英研究室',
        },
        {
            key: 'volunteer',
            title: '学生ボランティア',
            icon: faHandshakeAngle,
            value: 'IAESTE JAPAN 関東地区学生委員 総務部門統括',
        },
    ]);
    const [certificationAwardGenre] = useState({
        title: '資格・受賞歴',
        icon: faIdBadge,
        bgColor: 'gray-50',
        skills: [
            {icon: faLanguage, title: 'TOEIC L&Rテスト 845点'},
            {icon: faTrophy, title: 'Hack U Kosen 2022 最優秀賞'},
            {icon: faIdCard, title: '普通自動車免許(AT)'},
        ]
    });
    const [itSkillGenre] = useState({
        title: 'ITスキル',
        icon: faCode,
        bgColor: 'white',
        skills: [
            {icon: faPython, title: 'Python', details: 'MARL, PyTorch, Django'},
            {icon: faJs, title: 'JavaScript', details: 'React, Next.js, p5.js'},
            {icon: faCss3, title: 'CSS', details: 'Tailwind CSS'},
            {icon: faGem, title: 'Ruby', details: 'Sinatra'},
            {icon: faDatabase, title: 'DB', details: 'SQLite3'},
            {icon: faGitAlt, title: 'Git', details: 'GitHub'},
        ]
    });

    return (
        <main className="pt-12 md:pt-16">
            <Hero hero={hero} title={title} />
            <Summary summaryItems={summaryItems} />
            <SkillGenre skillGenre={certificationAwardGenre} />
            <SkillGenre skillGenre={itSkillGenre} />
            <Footer/>
            <NavBar />
        </main>
    );
}
