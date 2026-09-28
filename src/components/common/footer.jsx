export default function Footer() {
    return (
        <footer className="bg-paper border-t border-line py-10 md:py-12">
            <div className="max-w-3xl mx-auto px-6 flex justify-center">
                {/* 著作権表示 */}
                <p className="font-display text-[0.7rem] tracking-[0.2em] text-muted">
                    © 2023-{new Date().getFullYear()} JUMPEI KAWAHARA
                </p>
            </div>
        </footer>
    );
}
