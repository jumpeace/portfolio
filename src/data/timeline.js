// 所属（学校）ごとに区切ったタイムライン
const timeline = [
    {
        "org": "東京農工大学大学院",
        "department": "工学府 知能情報システム工学専攻",
        "period": "2025.04 - 現在",
        "items": [
            {
                "date": "2026.07 - 08",
                "title": "ドイツにて2ヶ月間のインターンシップ",
                "tags": ["Docusaurus", "i18n", "Playwright"],
                "description": "ドイツのITスタートアップにて、英語環境の開発チームに参加しました。サービスのバグ修正に加え、メインプロジェクトとして従来のPDFマニュアルをWeb版へ刷新しました。ただWeb版へ刷新するだけでなく、26言語対応でかつPDF出力ができるようなドキュメントサイトを構築しました。",
            },
            {
                "date": "2026.06",
                "title": "人工知能学会全国大会で発表",
                "tags": ["モデルベース強化学習", "DreamerV3"],
                "description": "ロボットと作業員が共存する倉庫におけるロボットの運搬ルートの最適化問題に対して、モデルベース強化学習のDreamerV3を用いた研究を発表しました。",
                "links": [
                    {
                        "title": "発表情報",
                        "uri": "https://pub.confit.atlas.jp/ja/event/jsai2026/presentation/4D1-OS-1-04"
                    },
                ],
            },
            {
                "date": "2025.09",
                "title": "楽天にて5日間のインターンシップ",
                "description": "夏の陣 新規プロトタイプ開発コースに参加し、チームでアイデア出しから開発まで実施しました。",
                "links": [
                    {
                        "title": "夏の陣",
                        "uri": "https://corp.rakuten.co.jp/careers/graduates/event/natsunojin/"
                    },
                ],
            },
            {
                "date": "2025.08",
                "title": "Accentureにて4日間のインターンシップ",
                "description": "和魂偉才塾 エンジニア塾に参加し、チームでアイデア出しから開発まで実施しました。",
                "links": [
                    {
                        "title": "和魂偉才塾 エンジニア塾",
                        "uri": "https://www.accenture.com/jp-ja/careers/local/engineer-internship"
                    },
                ],
            },
            {
                "date": "2025.06",
                "title": "ANAC2025 ANLリーグに出場",
                "tags": ["自動交渉"],
                "description": "複数エージェントとの逐次自動交渉問題に対して、効用予測ツリーを用いた交渉エージェントを開発し、ANLリーグに出場しました。",
                "links": [
                    {
                        "title": "ANAC",
                        "uri": "http://anac.cs.brown.edu/anac"
                    },
                    {
                        "title": "GitHub",
                        "uri": "https://github.com/jumpeace/anl2025-rivagent"
                    },
                ],
            },
        ]
    },
    {
        "org": "東京農工大学",
        "department": "工学部 知能情報システム工学科（3年次編入学）",
        "period": "2023.04 - 2025.03",
        "items": [
            {
                "date": "2024.07 - 現在",
                "title": "共同研究プロジェクトに参加",
                "tags": ["マルチエージェント経路探索"],
                "description": "ロボットと作業員が共存する倉庫におけるロボットの運搬ルートの最適化問題に取り組んでいます。",
            },
            {
                "date": "2024.02",
                "title": "インドネシアに2週間留学",
                "description": "大学の語学留学プログラムを使って、インドネシア大学に留学しました。",
            },
            {
                "date": "2023.11",
                "title": "藤田桂英研究室に配属",
                "links": [
                    {
                        "title": "研究室Webサイト",
                        "uri": "https://katfuji.lab.tuat.ac.jp/"
                    },
                ],
            },
            {
                "date": "2023.05 - 2025.07",
                "title": "IAESTE TLSCにて活動",
                "description": "総務部門の統括として新歓活動を指揮し、新入部員数を40名から70名へ大幅に増加させました。また、来日した海外インターン生との1対1での生活サポートや、インターンシップ説明会の運営も行いました。",
                "links": [
                    {
                        "title": "IAESTE TLSC",
                        "uri": "https://tlsc.iaeste.or.jp/"
                    },
                ],
            },
        ]
    },
    {
        "org": "長野工業高等専門学校",
        "department": "電子情報工学科",
        "period": "2018.04 - 2023.03",
        "items": [
            {
                "date": "2022.11 - 12",
                "title": "Hack U Kosen 2022にて最優秀賞を受賞",
                "tags": ["React", "WebSocket"],
                "description": "4人チームで寮の点呼システムを開発しました。リアルタイム顔追跡やIPアドレス認証による不正防止機能を共同設計し、自身はフロントエンドおよびWebSocketを活用したリアルタイム通信システムの実装を担当しました。",
                "links": [
                    {
                        "title": "発表会アーカイブ",
                        "uri": "https://www.youtube.com/watch?v=VIwtxB-X24k&t=3430s"
                    },
                ],
            },
            {
                "date": "2022.04 - 2023.01",
                "title": "長野高専 卒業制作",
                "tags": ["Django", "Chrome拡張機能"],
                "description": "研究室内の運用効率化のため電子部品管理システムを開発しました。種類や仕様ごとの在庫検索機能に加え、学校の正式な購入書類を自動生成する機能も実装しました。",
            },
            {
                "date": "2021.08 - 09",
                "title": "コトヒラ工業株式会社にて2週間のインターンシップ",
                "tags": ["Windows Form"],
                "description": "社内SEを体験し、製品貸出システムをWindowsアプリケーションとして開発しました。",
            },
        ]
    },
];

export default timeline;
