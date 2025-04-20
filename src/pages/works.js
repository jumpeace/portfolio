import {useState} from "react"

import Works from '@/components/works.jsx';
import Footer from '@/components/footer.jsx';
import NavBar from '@/components/navBar';

export default function Home() {
    const [works] = useState([
        {
            title: '農工大 卒業研究',
            date: '2024年4月〜2025年2月',
            imgPath: '/shrine.JPG',
            description: '企業との共同研究で、マルチエージェント強化学習のQMIXを用いて、倉庫での運搬作業の経路探索の自動化を行いました。',
        },
        {
            title: 'ポートフォリオ',
            date: '2023年10月',
            imgPath: '/shrine.JPG',
            description: '自身のポートフォリオサイトを作りました（このサイトです）。シンプルで見やすいデザインにして、レスポンシブ対応も行いました。',
            link: {title: 'GitHub', uri: 'https://github.com/jumpeace/portfolio'},
        },
        {
            title: 'マインクラフト風ゲーム',
            date: '2023年3月',
            imgPath: '/shrine.JPG',
            description: 'マインクラフト風の簡易的なゲームを作りました。ワールド自動読み込み / 木の生成 / ブロックの破壊 / ブロックの設置 ができます。',
            link: {title: 'GitHub', uri: 'https://github.com/jumpeace/simple_mine_craft'},
        },
        {
            title: 'HackU Kosen 2022',
            date: '2022年11月～12月',
            imgPath: '/hack_u_kosen.png',
            description: '点呼アプリを共同開発し、最優秀賞を受賞しました。私はフロントエンドとWeb Socketの通信部分を担当しました。',
            link: {title: '発表会アーカイブ', uri: 'https://www.youtube.com/watch?v=VIwtxB-X24k&t=3430s'},
        },
        {
            title: '文化祭ゲーム展示システム',
            date: '2022年10月',
            imgPath: '/hack_u_kosen.png',
            description: '文化祭のクラス企画のために、クラスメイトが作成したゲームを全て展示し、かつ実行できるシステムを作りました。',
            link: {title: 'GitHub', uri: 'https://github.com/jumpeace/games_launcher'},
        },
        {
            title: '長野高専 卒業研究',
            date: '2022年4月～2023年3月',
            imgPath: '/nitnc_research.png',
            description: '研究室の電子部品管理システムを開発しました。ECサイトからChrome拡張機能を使って、長野高専独自の購入書を簡単に作成できます。',
        },
        {
            title: '寮の点呼システム',
            date: '2021年12月',
            imgPath: '/rollcall_system.png',
            description: '授業の課題で作りました。学生が点呼をできる機能と、教員が点呼確認をできる機能があります。Ajaxによる自動補完も実装しました。',
            link: {title: 'GitHub', uri: 'https://github.com/jumpeace/rollcall_system'},
        },
        {
            title: '遠藤さくらクイズ',
            date: '2021年7月〜10月',
            imgPath: '/sakura_quiz.png',
            description: '乃木坂46 遠藤さくらさんの誕生日に合わせて有志でクイズを作りました。プログラム部分は全て私が担当しました。',
            link: {title: 'クイズサイト', uri: 'https://endo-sakura-quiz-2021.pages.dev'},
        },
    ]);

    return (
        <main className="mt-12 md:mt-20">
            <Works works={works}/>
            <Footer/>
            <NavBar />
        </main>
    );
}
