import { useEffect, useRef, useState } from 'react';

const LazyImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (imgRef.current) {
            observer.observe(imgRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <img
            ref={imgRef}
            src={isVisible ? src : undefined}
            alt={alt}
            className={`${className} transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            loading="lazy"
        />
    );
}

export default LazyImage;