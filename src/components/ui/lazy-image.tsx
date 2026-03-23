import { useState, useEffect, useRef, ImgHTMLAttributes } from "react";
import { motion } from "framer-motion";

interface LazyImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'> {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

export function LazyImage({ src, alt, className = "", placeholder, ...props }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/Blur */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse z-0" />
      )}

      {/* Actual Image */}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`w-full h-full object-cover relative z-10 ${isLoaded ? "" : "opacity-0"}`}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
}

