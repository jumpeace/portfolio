import Head from 'next/head';

import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import fs from 'fs'; // Node.jsのファイルシステムモジュール
import path from 'path'; // Node.jsのパスモジュール
import matter from 'gray-matter'; // Markdownのフロントマターを解析

// 記事のルートディレクトリを定義
const postsDirectory = path.join(process.cwd(), 'posts'); 

// 💡 以下のダミーデータは不要になるため削除します
// const dummyPostSlugs = [
//     "my-first-blog-post",
//     "next-gen-ai",
//     "web-dev-trends-2026",
// ];

/**
 * Markdownファイルを読み込み、フロントマターを解析して内容を返す非同期関数
 * @param {string} slug - ファイルのスラグ名
 * @returns {Promise<{slug: string, title: string, date: string, content: string}>} 投稿データ
 */
async function getPostData(slug) {
    // 1. ファイル名を取得 (例: my-first-blog-post.md)
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    let fileContents;
    try {
        // 2. ファイルの内容をutf8で読み込む
        // getStaticPropsはサーバーサイド（ビルド時）で実行されるため、fsを使用できます。
        fileContents = fs.readFileSync(fullPath, 'utf8');
    } catch (e) {
        // ファイルが見つからない場合はエラーを返す
        console.error(`Post file not found for slug: ${slug} at path: ${fullPath}`, e);
        // ユーザーに分かりやすいエラーメッセージを返す
        return {
            title: "Error: Post Not Found",
            date: "N/A",
            content: "The requested markdown file was not found. Please check that the file is located at: `public/posts/" + slug + ".md`",
            slug: slug,
        };
    }
    
    // 3. gray-matterを使用してフロントマターとコンテンツを分離
    const matterResult = matter(fileContents);
    
    // 4. ReactMarkdownを使うため、matterResult.content (Markdown文字列) をそのまま返します。
    
    return {
        slug,
        title: matterResult.data.title || slug,
        date: matterResult.data.date || '日付不明',
        content: matterResult.content, // Markdown文字列をそのままpropsとして渡す
    };
}


export default function BlogPost({ post }) {
    // エラー時の表示を詳細化
    if (!post || post.title.includes("Error")) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 antialiased p-8">
                <h1 className="text-3xl font-bold mb-4 text-red-600">{post ? post.title : "Post Not Found"}</h1>
                <p className="text-lg text-gray-700 text-center whitespace-pre-wrap">{post ? post.content : "The requested post could not be loaded."}</p>
                <div className="mt-8">
                    <Link href="/blog">
                        <div className="inline-flex items-center text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            ブログ一覧へ戻る
                        </div>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800 antialiased">
            {/* ヘッダーセクション - グラデーション背景 */}
            <header className="py-24 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center relative overflow-hidden text-center">
                <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest text-white uppercase mb-4">
                        {post.title}
                    </h1>
                    <p className="text-xl font-light tracking-wider text-gray-300">
                        {post.date}
                    </p>
                </div>
            </header>

            {/* コンテンツセクション - proseクラスで整形 */}
            <section className="flex-grow bg-white py-20 md:py-28">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    
                    {/* ブログ一覧へ戻るリンク (上部) */}
                    <div className="mb-12 pb-4 border-b border-gray-200">
                        <Link href="/blog">
                            <div className="inline-flex items-center text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                </svg>
                                ブログ一覧へ戻る
                            </div>
                        </Link>
                    </div>

                    {/* MarkdownをHTMLに変換し、proseスタイルを適用 */}
                    {/* post.contentはMarkdown文字列 */}
                    <div className="prose prose-lg mx-auto">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                </div>
            </section>
        </div>
    );
}

// ページコンポーネントがサーバーサイドでレンダリングされる際に、
// 動的なパス（[slug]）に対応するデータを取得します。
export async function getStaticPaths() {
    // 💡 public/posts ディレクトリ内のファイル名を動的に取得します。
    const fileNames = fs.readdirSync(postsDirectory);
    
    const paths = fileNames
        .filter(fileName => fileName.endsWith('.md')) // .mdファイルのみをフィルタリング
        .map(fileName => {
            const slug = fileName.replace(/\.md$/, ''); // 拡張子を取り除く
            return {
                params: { slug: slug },
            };
        });

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    // Markdownファイルからデータを取得
    const post = await getPostData(params.slug);

    return {
        props: {
            post,
        },
    };
}
