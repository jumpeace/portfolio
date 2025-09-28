import Head from 'next/head';

import '@/styles/globals.css'

import Footer from '@/components/common/footer';
import NavBar from '@/components/common/navBar';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Jumpei Kawahara</title>
                <meta name="description" content="Jumpei Kawaharaのホームページです。" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Jumpei Kawahara"></meta>
                <meta property="og:description" content="Jumpei Kawaharaのホームページです。" />
                <meta property="og:image" content="https://example.com/images/blog-thumbnail.jpg" />
            </Head>
            {/* ナビゲーションバー */}
            <NavBar />

            <Component {...pageProps} />
            
            {/* フッター */}
            <Footer />
        </>
    );
}
