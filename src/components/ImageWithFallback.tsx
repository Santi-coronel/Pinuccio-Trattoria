import React, { useState, useEffect } from "react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Classes for the outer wrapper (aspect box, shadow, etc.). */
  className?: string;
  /** Classes for the inner <img> (object-fit, hover scale, filters). */
  imgClassName?: string;
  imgStyle?: React.CSSProperties;
  aspectRatioClass?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = "",
  imgClassName = "",
  imgStyle,
  aspectRatioClass = "aspect-[4/3]",
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-paper-3 ${aspectRatioClass} ${className}`}>
      {/* Loading paper shimmer */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-paper-2 animate-pulse paper-grain z-0" />
      )}

      {!hasError ? (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          style={imgStyle}
          className={`w-full h-full object-cover transition-opacity duration-500 ease-out relative z-10 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
          {...props}
        />
      ) : (
        /* Handcrafted fallback placeholder */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-paper-2 text-ink paper-grain border border-ink/10 z-10">
          <div className="w-12 h-12 rounded-full border border-terracotta/40 flex items-center justify-center mb-3">
            <span className="font-display italic text-lg text-terracotta">P</span>
          </div>
          <p className="font-serif italic text-sm text-ink/70 text-center">{alt}</p>
          <span className="text-[10px] font-mono tracking-widest uppercase text-terracotta mt-2">
            Pinuccio · Mercado de Belgrano
          </span>
        </div>
      )}
    </div>
  );
};
