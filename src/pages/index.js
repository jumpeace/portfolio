import Metadata from '@/components/pages/index/metadata.jsx';
import Summary from "@/components/pages/index/summary";
import SkillGenre from '@/components/pages/index/skillGenre';
import Footer from '@/components/common/footer.jsx';
import NavBar from '@/components/common/navBar';

import summaryItems from "@/data/summaryItems";
import metadata from "@/data/metadata";
import itSkills from "@/data/itSkills";
import qualifications from "@/data/qualifications";

// ホームのページ（プロフィール概要、スキルを表示）
export default function Home() {
    return (
        <main className="pt-12 md:pt-14">
            <Metadata metadata={metadata} />
            <Summary summaryItems={summaryItems} />
            <SkillGenre skillGenre={qualifications} />
            <SkillGenre skillGenre={itSkills} />
            <Footer/>
            <NavBar />
        </main>
    );
}
