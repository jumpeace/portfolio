import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Reveal from '@/components/common/reveal';

// セクションの見出し（欧文ラベル / 和文ラベル / 右へ伸びるヘアライン）
function SectionTitle({label, japanese}) {
    return (
        <div className="flex items-baseline gap-4 md:gap-6 mb-10 md:mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-light tracking-[0.3em] text-ink">
                {label}
            </h2>
            <span className="font-mincho text-[0.7rem] tracking-[0.2em] text-muted">
                {japanese}
            </span>
            <span aria-hidden="true" className="flex-1 h-px bg-line"></span>
        </div>
    );
}

// 日付表記（「2024.07 - 現在」など）の和文部分だけ明朝体にして、欧文セリフ体と高さ・太さを揃える
function DateText({children}) {
    return children.split(/([^\x00-\x7F]+)/).map((part, index) => (
        index % 2 === 1
            ? <span key={index} className="font-mincho text-[0.88em] tracking-[0.08em]">{part}</span>
            : part
    ));
}

// ホームのページ（プロフィール概要、これまでの経歴を表示）
export default function HomeTemplate({metadata, summary, timeline, socials}) {
    return (
        <main className="bg-paper text-ink antialiased">
            {/* ヘッダーセクション - 大きなセリフ体の氏名と縦長のポートレート */}
            <header className="pt-16 pb-14 md:pt-24 md:pb-16">
                <div className="max-w-3xl mx-auto px-6">
                    <Reveal>
                        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10 md:gap-12">
                            <div>
                                <p className="font-display text-[0.65rem] tracking-[0.35em] text-muted">
                                    PORTFOLIO
                                </p>

                                <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] tracking-[0.04em] text-ink mt-5">
                                    {metadata.title.split(' ').map((word) => (
                                        <span key={word} className="block">{word}</span>
                                    ))}
                                </h1>

                                <div className="flex items-center gap-4 mt-6">
                                    <span aria-hidden="true" className="w-8 h-px bg-line"></span>
                                    <p className="text-[0.7rem] md:text-[0.8rem] tracking-[0.2em] text-sub">
                                        {metadata.subTitle}
                                    </p>
                                </div>

                                {/* ソーシャルメディアへのリンク */}
                                {socials && (
                                    <div className="flex gap-x-5 mt-7">
                                        {socials.map((social) => (
                                            <a
                                                key={social.name}
                                                href={social.uri}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={social.name}
                                                title={social.name}
                                                className="text-sub hover:text-ink transition-colors duration-300"
                                            >
                                                <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* ポートレート - 円形に人物を寄せて切り抜き、外側に細いリングと弧を重ねる */}
                            <div className="relative shrink-0 self-center w-44 h-44 md:w-60 md:h-60">
                                {/* 外周のリングと、上部に走る墨色の弧 */}
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 100 100"
                                    className="absolute -inset-5 -rotate-[100deg]"
                                >
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="49"
                                        fill="none"
                                        stroke="#E4E2DB"
                                        strokeWidth="0.3"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="49"
                                        fill="none"
                                        stroke="#1A1A18"
                                        strokeWidth="0.3"
                                        strokeLinecap="round"
                                        className="portrait-arc"
                                    />
                                </svg>

                                {/* 写真 - 人物が円の中心に来るように拡大して配置 */}
                                <div className="relative w-full h-full overflow-hidden rounded-full">
                                    <Image
                                        src={`/${metadata.icon.link}`}
                                        alt={metadata.icon.alt}
                                        width={480}
                                        height={480}
                                        className="w-full h-full object-cover translate-x-[13%] translate-y-[34%] scale-[2]"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </header>

            {/* 概要セクション - ヘアラインで区切った定義リスト */}
            <section id="summary" className="py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <Reveal>
                        <SectionTitle label="ABOUT ME" japanese="プロフィール" />
                    </Reveal>

                    <dl className="border-t border-line">
                        {summary.map((summaryItem, index) => (
                            <Reveal
                                key={summaryItem.key}
                                delay={index * 60}
                                className="border-b border-line py-5 md:flex md:gap-8"
                            >
                                <dt className="shrink-0 md:w-24 whitespace-nowrap font-mincho text-xs tracking-[0.15em] text-muted md:pt-1">
                                    {summaryItem.title}
                                </dt>
                                <dd className="font-mincho text-sm md:text-[0.95rem] tracking-[0.06em] text-ink leading-relaxed mt-1.5 md:mt-0 whitespace-pre-wrap">
                                    {summaryItem.value}
                                </dd>
                            </Reveal>
                        ))}
                    </dl>
                </div>
            </section>

            {/* タイムラインセクション - 1本の軸に沿って所属ごとにまとめて表示 */}
            <section id="timeline" className="py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <Reveal>
                        <SectionTitle label="TIMELINE" japanese="これまでの歩み" />
                    </Reveal>

                    <div className="relative">
                        {/* 全ての所属を貫く1本のタイムライン軸 */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute z-10 top-1 bottom-1 left-3 md:left-4 w-px bg-line"
                        ></div>

                        {timeline.map((group, groupIndex) => (
                            <div
                                key={groupIndex}
                                className="relative pl-9 md:pl-16 pt-8 md:pt-10 first:pt-0 pb-8 md:pb-10 last:pb-0"
                            >
                                {/* モバイルでは所属の境目がわかるように区切り線を入れる */}
                                {groupIndex > 0 && (
                                    <div aria-hidden="true" className="md:hidden h-px bg-line mb-8"></div>
                                )}

                                {/* 所属のヘッダー - PC幅ではスクロール中も上部に留める */}
                                <div className="relative md:sticky md:top-10 md:z-30 bg-paper md:py-2">
                                    {/* 軸上のマーカーと、見出しへ伸びるヘアライン */}
                                    <span
                                        aria-hidden="true"
                                        className="absolute z-20 -left-6 md:-left-12 top-[0.45rem] md:top-[0.95rem] -translate-x-1/2 w-[7px] h-[7px] rounded-full bg-ink md:bg-paper border border-ink"
                                    ></span>
                                    <span
                                        aria-hidden="true"
                                        className="hidden md:block absolute z-20 -left-11 top-[1.1rem] w-8 h-px bg-line"
                                    ></span>

                                    <Reveal>
                                        <p className="font-display lining-nums text-xs md:text-[0.8rem] tracking-[0.22em] text-muted">
                                            <DateText>{group.period}</DateText>
                                        </p>
                                        <h3 className="font-mincho text-lg md:text-xl tracking-[0.1em] text-ink mt-2">
                                            {group.org}
                                        </h3>
                                        {group.department && (
                                            <p className="text-xs tracking-[0.02em] text-muted mt-1.5">
                                                {group.department}
                                            </p>
                                        )}
                                    </Reveal>
                                </div>

                                {/* 所属内のエピソード */}
                                <div className="mt-7 space-y-7">
                                    {group.items.map((item, index) => (
                                        <Reveal key={index}>
                                            <div className="relative md:flex md:gap-8 group">
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute z-20 -left-6 md:-left-12 top-[0.45rem] -translate-x-1/2 w-1 h-1 rounded-full bg-muted ring-4 ring-paper transition-colors duration-500 group-hover:bg-ink"
                                                ></span>

                                                <p className="shrink-0 md:w-32 whitespace-nowrap font-display lining-nums text-[0.8rem] tracking-[0.12em] text-muted md:pt-1">
                                                    <DateText>{item.date}</DateText>
                                                </p>

                                                <div className="mt-1.5 md:mt-0 min-w-0">
                                                    <p className="font-mincho text-[0.95rem] md:text-base tracking-[0.06em] text-ink leading-relaxed">
                                                        {item.title}
                                                    </p>

                                                    {item.description && (
                                                        <p className="text-[0.8rem] md:text-[0.85rem] text-sub leading-[1.9] mt-2">
                                                            {item.description}
                                                        </p>
                                                    )}

                                                    {/* 使用した技術・取り組んだテーマ */}
                                                    {item.tags && (
                                                        <ul className="flex flex-wrap gap-x-2 gap-y-1.5 mt-3">
                                                            {item.tags.map((tag, tagIndex) => (
                                                                <li
                                                                    key={tagIndex}
                                                                    className="border border-line px-2.5 py-1 text-[0.65rem] md:text-[0.7rem] tracking-[0.1em] text-sub"
                                                                >
                                                                    {tag}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}

                                                    {/* 関連ページへのリンク */}
                                                    {item.links && (
                                                        <ul className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
                                                            {item.links.map((link, linkIndex) => (
                                                                <li key={linkIndex}>
                                                                    <a
                                                                        href={link.uri}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="text-[0.7rem] md:text-[0.75rem] tracking-[0.12em] text-sub underline decoration-line underline-offset-4 hover:text-ink hover:decoration-ink"
                                                                    >
                                                                        {link.title}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>
                                        </Reveal>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
