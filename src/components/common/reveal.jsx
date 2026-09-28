import { useEffect, useRef, useState } from 'react';

// スクロールで画面に入ったときに、中身をゆっくり浮かび上がらせる
export default function Reveal({children, delay = 0, className = ''}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // IntersectionObserverが使えない環境では最初から表示する
        if (typeof IntersectionObserver === 'undefined') {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setIsVisible(true);
                observer.disconnect();
            },
            {threshold: 0.12, rootMargin: '0px 0px -8% 0px'}
        );
        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
            style={delay ? {transitionDelay: `${delay}ms`} : undefined}
        >
            {children}
        </div>
    );
}
