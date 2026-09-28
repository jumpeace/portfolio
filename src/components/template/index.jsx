import React from 'react';
import Image from 'next/image';

// セクション共通の見出し（細字＋広いトラッキング＋ヘアライン）
function SectionTitle({children}) {
    return (
        <h2 className="text-center mb-12 md:mb-14">
            <span className="block text-2xl md:text-3xl font-light tracking-[0.35em] text-gray-900 indent-[0.35em]">
                {children}
            </span>
            <span aria-hidden="true" className="block w-10 h-px bg-gray-300 mx-auto mt-5"></span>
        </h2>
    );
}

// ホームのページ（プロフィール概要、これまでの経歴を表示）
export default function HomeTemplate({metadata, summary, timeline}) {
    return (
        <main className="bg-white text-gray-800 antialiased">
            {/* ヘッダーセクション - 白地に細字のタイポグラフィのみで構成 */}
            <header className="bg-white pt-20 pb-16 md:pt-28 md:pb-20">
                <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 md:gap-10">
                    <Image
                        src={`/${metadata.icon.link}`}
                        alt={metadata.icon.alt}
                        width={240}
                        height={240}
                        className="shrink-0 w-28 h-28 md:w-32 md:h-32 object-cover rounded-full border border-gray-200"
                    />
                    <div>
                        <h1 className="text-2xl md:text-4xl font-light tracking-[0.3em] text-gray-900 uppercase indent-[0.3em] md:indent-0">
                            {metadata.title}
                        </h1>
                        <p className="text-[0.7rem] md:text-xs font-light tracking-[0.25em] text-gray-400 mt-4">
                            {metadata.subTitle}
                        </p>
                    </div>
                </div>
            </header>

            {/* 概要セクション - ヘアラインで区切った定義リスト */}
            <section id="summary" className="bg-white pb-16 md:pb-20">
                <div className="max-w-3xl mx-auto px-6">
                    <SectionTitle>ABOUT ME</SectionTitle>
                    <dl className="border-t border-gray-100">
                        {summary.map((summaryItem) => (
                            <div
                                key={summaryItem.key}
                                className="border-b border-gray-100 py-5 md:flex md:gap-8"
                            >
                                <dt className="shrink-0 md:w-24 whitespace-nowrap text-xs font-light tracking-[0.15em] text-gray-400 md:pt-1">
                                    {summaryItem.title}
                                </dt>
                                <dd className="text-sm md:text-[0.95rem] font-normal tracking-[0.05em] text-gray-900 leading-relaxed mt-1.5 md:mt-0 whitespace-pre-wrap">
                                    {summaryItem.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* タイムラインセクション - 1本の軸に沿って所属ごとにまとめて表示 */}
            <section id="timeline" className="bg-white py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <SectionTitle>TIMELINE</SectionTitle>

                    <div className="relative">
                        {/* 全ての所属を貫く1本のタイムライン軸 */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute z-10 top-1 bottom-1 left-3 md:left-4 w-px bg-gray-200"
                        ></div>

                        {timeline.map((group, groupIndex) => (
                            <div
                                key={groupIndex}
                                className="relative pl-9 md:pl-16 pt-9 first:pt-0 pb-9 last:pb-0"
                            >
                                {/* 所属のヘッダー */}
                                <div className="relative">
                                    {/* 軸上のマーカーと、見出しへ伸びるヘアライン */}
                                    <span
                                        aria-hidden="true"
                                        className="absolute z-20 -left-6 md:-left-12 top-[0.45rem] -translate-x-1/2 w-[7px] h-[7px] rounded-full bg-white border border-gray-800"
                                    ></span>
                                    <span
                                        aria-hidden="true"
                                        className="hidden md:block absolute z-20 -left-11 top-[0.6rem] w-8 h-px bg-gray-200"
                                    ></span>

                                    <p className="text-[0.65rem] md:text-xs font-light tracking-[0.25em] text-gray-400">
                                        {group.period}
                                    </p>
                                    <h3 className="text-lg md:text-xl font-normal tracking-[0.08em] text-gray-900 mt-2">
                                        {group.org}
                                    </h3>
                                    {group.department && (
                                        <p className="text-xs font-light tracking-[0.02em] text-gray-400 mt-1.5">
                                            {group.department}
                                        </p>
                                    )}
                                </div>

                                {/* 所属内のエピソード */}
                                <div className="mt-7 space-y-6">
                                    {group.items.map((item, index) => (
                                        <div key={index} className="relative md:flex md:gap-8">
                                            <span
                                                aria-hidden="true"
                                                className="absolute z-20 -left-6 md:-left-12 top-[0.45rem] -translate-x-1/2 w-1 h-1 rounded-full bg-gray-300 ring-4 ring-white"
                                            ></span>

                                            <p className="shrink-0 md:w-32 whitespace-nowrap text-[0.65rem] font-light tracking-[0.1em] text-gray-400 md:pt-1">
                                                {item.date}
                                            </p>

                                            <div className="mt-1.5 md:mt-0 min-w-0">
                                                <p className="text-sm md:text-[0.95rem] font-normal tracking-[0.05em] text-gray-900 leading-relaxed">
                                                    {item.title}
                                                </p>

                                                {item.description && (
                                                    <p className="text-xs md:text-[0.8rem] font-light text-gray-500 leading-[1.9] mt-2">
                                                        {item.description}
                                                    </p>
                                                )}

                                                {/* 使用した技術・取り組んだテーマ */}
                                                {item.tags && (
                                                    <ul className="flex flex-wrap gap-x-2 gap-y-1.5 mt-3">
                                                        {item.tags.map((tag, tagIndex) => (
                                                            <li
                                                                key={tagIndex}
                                                                className="border border-gray-200 px-2.5 py-1 text-[0.6rem] md:text-[0.65rem] font-light tracking-[0.1em] text-gray-500"
                                                            >
                                                                {tag}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
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