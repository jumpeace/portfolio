export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-10 md:py-12">
            <div className="max-w-3xl mx-auto px-6 flex justify-center">
                {/* 著作権表示 */}
                <p className="text-[0.6rem] md:text-[0.65rem] font-light tracking-[0.2em] text-gray-400">
                    © 2023-{new Date().getFullYear()} JUMPEI KAWAHARA
                </p>
            </div>
        </footer>
    );
}
