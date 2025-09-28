import '@/styles/globals.css'

import Footer from '@/components/common/footer';
import NavBar from '@/components/common/navBar';

export default function App({ Component, pageProps }) {
    return (
        <div>
            {/* ナビゲーションバー */}
            <NavBar />

            <Component {...pageProps} />
            
            {/* フッター */}
            <Footer />
        </div>
    );
}
