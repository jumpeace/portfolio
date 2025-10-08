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


            {/* タイムラインセクション - 視覚的に魅力的なデザイン */}
            <section id="timeline" className="bg-white py-20 md:py-28">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-800 mb-12">
                        TIMELINE
                    </h2>
                    <div className="relative border-l-4 border-gray-500 ml-4 md:ml-12">
                    {timeline.map((item, index) => (
                        <div key={index} className="mb-8 md:mb-10 pl-8 md:pl-12 relative last:mb-0">
                            <div className="absolute left-0 top-0 mt-3 -ml-2.5 w-5 h-5 bg-gray-500 rounded-full border-4 border-white"></div>
                            
                            <h3 className="text-md md:text-lg font-bold text-gray-900 mb-1">
                                {item.date}
                            </h3>
                            <p className="text-xl md:text-2xl font-medium text-gray-800 mb-2">
                                {item.title}
                            </p>
                            
                            {item.description && (
                                <p className="text-sm md:text-base text-gray-600 mb-4">
                                    {item.description}
                                </p>
                            )}

                            {/* 複数のリンクを追加 */}
                            {item.links && (
                                <div className="flex flex-wrap gap-2">
                                    {item.links.map((link, linkIndex) => (
                                        <Link key={linkIndex} href={link.uri} target="_blank" rel="noopener noreferrer">
                                            <div
                                                className="inline-block px-4 py-2 text-sm md:text-base font-medium text-gray-800 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-300"
                                            >
                                                {link.title}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </main>
    );
}