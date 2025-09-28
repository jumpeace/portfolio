import HomeTemplate from '@/components/template';

import summary from "@/data/summary";
import metadata from "@/data/metadata";
import timeline from '@/data/timeline';
import skills from '@/data/skills';

// ホームのページ（プロフィール概要、スキルを表示）
export default function Home() {
    return (
        <HomeTemplate 
            metadata={metadata}
            summary={summary}
            timeline={timeline}
            skills={skills}
        />
    );
}
