import Head from 'next/head';
import { Cormorant_Garamond } from 'next/font/google';

import '@/styles/globals.css'

import Footer from '@/components/common/footer';

// 欧文の見出しに使うセリフ体
const display = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400'],
    display: 'swap',
    variable: '--font-display',
});

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>JUMPEI KAWAHARA</title>
                <meta name="description" content="Jumpei Kawaharaのホームページです。" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Jumpei Kawahara"></meta>
                <meta property="og:description" content="Jumpei Kawaharaのホームページです。" />
                <meta property="og:image" content="https://example.com/images/blog-thumbnail.jpg" />
                {/* JavaScriptが無効でも本文が読めるようにする */}
                <noscript>
                    <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
                </noscript>
            </Head>

            <div className={display.variable}>
                <Component {...pageProps} />

                {/* フッター */}
                <Footer />
            </div>
        </>
    );
}
