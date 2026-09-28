import Head from 'next/head';

import HomeTemplate from '@/components/template';

import summary from "@/data/summary";
import metadata from "@/data/header";
import timeline from '@/data/timeline';
import socials from '@/data/socials';

// ホームのページ（プロフィール概要、これまでの経歴を表示）
export default function Home() {
    return (
        <HomeTemplate
            metadata={metadata}
            summary={summary}
            timeline={timeline}
            socials={socials}
        />
    );
}
