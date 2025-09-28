import Head from 'next/head';

import React from 'react';
import Link from 'next/link';
import fs from 'fs'; // Node.jsのファイルシステムモジュール
import path from 'path'; // Node.jsのパスモジュール
import matter from 'gray-matter'; // Markdownのフロントマターを解析

// 記事のルートディレクトリを定義 (詳細ページと同じパスを使用)
const postsDirectory = path.join(process.cwd(), 'posts'); 

export default function BlogListPage({ posts }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800 antialiased">
            {/* ヘッダーセクション - グレーのグラデーションで落ち着いた雰囲気に */}
            <header className="py-24 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-widest text-white uppercase">
                        Blog
                    </h1>
                    <p className="text-xl md:text-2xl font-light tracking-wider mt-2 text-gray-300">
                        Insights from Daily Life and Engineering
                    </p>
                </div>
            </header>

            {/* コンテンツセクション - 記事一覧を表示 */}
            <section className="flex-grow bg-white py-20 md:py-28">
                <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* 記事がない場合の代替表示 */}
                    {posts.length === 0 && (
                        <div className="md:col-span-2 lg:col-span-3 text-center p-12 bg-gray-50 rounded-lg">
                            <p className="text-xl text-gray-600">まだ記事がありません。<br />`public/posts`フォルダにMarkdownファイルを作成してください。</p>
                        </div>
                    )}
                    
                    {posts.map(post => (
                        <article key={post.slug} className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 transition-transform duration-300 transform  hover:shadow-2xl">
                            <Link href={`/blog/${post.slug}`}>
                                <div className="block">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:underline">
                                        {post.title}
                                    </h2>
                                    <p className="text-sm text-gray-500 mb-4">
                                        {post.date}
                                    </p>
                                    <p className="text-base text-gray-700">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}

// ファイルシステムから記事データをリアルタイムで取得する getStaticProps
export async function getStaticProps() {
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(fileName => {
            // スラグ (拡張子なしのファイル名) を取得
            const slug = fileName.replace(/\.md$/, '');
            
            // ファイルのフルパス
            const fullPath = path.join(postsDirectory, fileName);
            
            // ファイルの内容を読み込み
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            
            // フロントマターを解析
            const matterResult = matter(fileContents);

            // 必要なデータのみを抽出
            return {
                slug,
                title: matterResult.data.title || slug,
                date: matterResult.data.date || '日付不明',
                // フロントマターに excerpt がない場合は、本文の最初の100文字を使用
                excerpt: matterResult.data.excerpt || matterResult.content.substring(0, 100) + '...',
            };
        });

    // 日付順にソート (新しい記事が上に来るように降順)
    allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });

    return {
        props: {
            posts: allPostsData,
        },
    };
}