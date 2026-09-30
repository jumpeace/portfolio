// 所属（学校）ごとに区切ったタイムライン
const timeline = [
    {
        "org": "東京農工大学大学院",
        "department": "工学府 知能情報システム工学専攻",
        "period": "2025.04 - 現在",
        "items": [
            {
                "date": "2026.07 - 08",
                "title": "ドイツにて2ヶ月間のインターン",
                "tags": ["Docusaurus", "i18n"],
                "description": "ドイツのリハビリ系のITスタートアップでインターンに参加しました。ヘルプページの刷新を担当し、26言語に対応したページを開発しました。",
                "links": [
                    {
                        "title": "IAESTEインターン",
                        "uri": "https://iaeste.org/about"
                    }
                ]
            },
            {
                "date": "2026.06",
                "title": "人工知能学会全国大会で発表",
                "tags": ["モデルベース強化学習", "DreamerV3"],
                "description": "ロボットと作業員が共存する倉庫におけるロボットの運搬ルートの最適化問題に対して、モデルベース強化学習のDreamerV3を用いた研究を発表しました。",
            },
            {
                "date": "2025.09",
                "title": "楽天にて5日間のインターン",
                "tags": ["Next.js"],
                "description": "夏の陣 新規プロトタイプ開発コースに参加し、チームでアイデア出しから開発まで実施しました。",
                "links": [
                    {
                        "title": "インターンの詳細",
                        "uri": "https://corp.rakuten.co.jp/careers/graduates/event/natsunojin/"
                    }
                ]
            },
            {
                "date": "2025.08",
                "title": "Accentureにて4日間のインターン",
                "description": "和魂偉才塾 エンジニア塾に参加し、チームで要件定義から開発まで実施しました。",
                "links": [
                    {
                        "title": "インターンの詳細",
                        "uri": "https://www.accenture.com/jp-ja/careers/local/engineer-internship"
                    }
                ]
            },
            {
                "date": "2025.06",
                "title": "ANAC2025 ANLリーグに出場",
                "tags": ["自動交渉"],
                "description": "複数のシナリオにおける複数エージェントとの自動交渉に対応できる戦略を考案・開発しました。",
                "links": [
                    {
                        "title": "ANACホームページ",
                        "uri": "http://anac.cs.brown.edu/anac"
                    },
                    {
                        "title": "GitHub",
                        "uri": "https://github.com/jumpeace/anl2025-rivagent"
                    }
                ]
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
                "description": "大学の文化体験プログラムを使って、インドネシア大学に留学しました。",
            },
            {
                "date": "2023.11",
                "title": "藤田桂英研究室に配属",
                "links": [
                    {
                        "title": "ホームページ",
                        "uri": "https://katfuji.lab.tuat.ac.jp/"
                    },
                ]
            },
            {
                "date": "2023.05 - 現在",
                "title": "IAESTE学生ボランティアに所属",
                "description": "海外インターン生への来日時の生活サポートや、日本文化体験イベント（高尾山登山、川越での文化体験など）の企画・実施しました。また、関東や関西の大学生向けの、IAESTEインターンシップ説明会をリーダーとして企画・運営しました。",
                "links": [
                    {
                        "title": "ホームページ",
                        "uri": "https://tlsc.iaeste.or.jp/"
                    },
                ]
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
                "description": "4人チームで学生寮の点呼システムを開発しました。リアルタイム顔追跡やIPアドレス認証など、不正防止機能をチームメンバーと共同で設計しました。また、リアルタイム顔追跡のためにWebSocketを用いたリアルタイム通信システムを開発しました。",
                "links": [
                    {
                        "title": "発表会アーカイブ",
                        "uri": "https://www.youtube.com/watch?v=VIwtxB-X24k&t=3430s"
                    },
                ]
            },
            {
                "date": "2022.04 - 2023.01",
                "title": "長野高専 卒業制作",
                "tags": ["Django", "Chrome拡張機能"],
                "description": "研究室向け電子部品管理システムを開発しました。部品の種類と仕様ごとに部品を追跡する在庫管理機能を開発しました。また、在庫追加や学校の正式な購入書類を自動生成できる購入ワークフローも開発しました。",
            },
            {
                "date": "2021.08 - 09",
                "title": "コトヒラ工業株式会社にて2週間のインターン",
                "tags": ["Windows Form"],
                "description": "社内SEを体験し、製品貸出システムをWindowsアプリケーションとして開発しました",
            },
        ]
    },
];

export default timeline;
