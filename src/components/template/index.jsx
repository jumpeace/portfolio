import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';

// ホームのページ（プロフィール概要、スキルを表示）
export default function HomeTemplate({metadata, summary, skills, timeline}) {
    return (
        <main className="bg-white text-gray-800 antialiased">
            {/* ヘッダーセクション - グレーのグラデーションで落ち着いた雰囲気に */}
            <header className="py-24 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
                <div className="max-w-3xl mx-auto px-6 md:px-4 relative z-10"> {/* px-4をpx-6に変更 */}
                    {/* タイトルとアイコン */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-6 text-center">
                        {/* アイコン - 影と光沢感を加えてより際立たせる */}
                        <Image
                            src={`/${metadata.icon.link}`}
                            alt={metadata.icon.alt}
                            width={160}
                            height={160}
                            className="rounded-full border-4 border-gray-400 shadow-xl transform transition-transform duration-500"
                        />
                        <div className="flex flex-col">
                            {/* タイトル - フォントをより太く、モダンに */}
                            <h1 className="text-5xl md:text-6xl font-extrabold tracking-widest text-white uppercase">
                                {metadata.title}
                            </h1>
                            {/* サブタイトル */}
                            <p className="text-xl md:text-2xl font-light tracking-wider mt-2 text-gray-300">
                                {metadata.subTitle}
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* 概要セクション - カードデザインで情報を視覚的に整理 */}
            <section id="summary" className="bg-white py-20 md:py-28">
                <div className="max-w-4xl mx-auto px-6 md:px-4"> {/* px-4をpx-6に変更 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {summary.map((summaryItem) => (
                            <div
                                key={summaryItem.key}
                                className="flex flex-col items-center text-center p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-lg transition-transform duration-300 transform"
                            >
                                <FontAwesomeIcon
                                    icon={summaryItem.icon}
                                    className="w-12 h-12 text-gray-600 mb-4 transition-colors duration-300 hover:text-gray-800"
                                />
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 tracking-wide mb-2">
                                    {summaryItem.title}
                                </h3>
                                <p className="text-base md:text-lg text-gray-600 whitespace-pre-wrap">
                                    {summaryItem.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* スキルセクション */}
            <section id="skills" className="bg-gray-100 py-20 md:py-28">
                <div className="max-w-4xl mx-auto px-6 md:px-4"> {/* px-4をpx-6に変更 */}
                    <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-800 mb-12">
                        SKILLS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {Object.entries(skills).map(([genre, skills]) => (
                            <div key={genre} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                                    {genre}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                    {skills.map((skill, index) => (
                                        <div key={index} className="flex items-center space-x-4">
                                            <FontAwesomeIcon icon={skill.icon} className="w-8 h-8 text-gray-600" />
                                            <p className="text-lg text-gray-700 font-medium">{skill.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* タイムラインセクション - 1本の軸に沿って所属ごとにまとめて表示 */}
            <section id="timeline" className="bg-white py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-center mb-12 md:mb-14">
                        <span className="block text-2xl md:text-3xl font-light tracking-[0.35em] text-gray-900 indent-[0.35em]">
                            TIMELINE
                        </span>
                        <span aria-hidden="true" className="block w-10 h-px bg-gray-300 mx-auto mt-5"></span>
                    </h2>

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

                                            <p className="shrink-0 md:w-28 text-[0.65rem] md:text-xs font-light tracking-[0.18em] text-gray-400 md:pt-1">
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