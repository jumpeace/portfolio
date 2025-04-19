import { useState } from "react"

import Hero from '@/components/hero.jsx';
import SkillGenre from '@/components/skillGenre';
import Footer from '@/components/footer.jsx';
import NavBar from '@/components/navBar';

import { faCode, faDatabase, faGem, faIdBadge, faLanguage, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import { faCss3, faGitAlt, faJs, faPython } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
    const [certificationAwardGenre] = useState({
        title: '資格・受賞歴',
        icon: faIdBadge,
        bgColor: 'white',
        skills: [
            {icon: faLanguage, title: 'TOEIC L&Rテスト 845点'},
            {icon: faTrophy, title: 'Hack U Kosen 2022 最優秀賞'},
            {icon: faIdCard, title: '普通自動車免許(AT)'},
        ]
    });
    const [itSkillGenre] = useState({
        title: 'ITスキル',
        icon: faCode,
        bgColor: 'gray-50',
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
        <main className="mt-12 md:mt-20">
            <Hero/>
            {/* <Summary /> */}
            <SkillGenre skillGenre={certificationAwardGenre} />
            <SkillGenre skillGenre={itSkillGenre} />
            {/* <History /> */}
            <Footer/>
            <NavBar />
        </main>
    );
}
