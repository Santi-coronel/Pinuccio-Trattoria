import React, { useState, useEffect } from "react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatioClass?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = "",
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
    <div className={`relative overflow-hidden bg-[#EFEAE0] ${aspectRatioClass} ${className}`}>
      {/* Loading paper shimmer */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#E8E2D5] animate-pulse paper-grain z-0" />
      )}

      {!hasError ? (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ease-out relative z-10 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          {...props}
        />
      ) : (
        /* Handcrafted fallback placeholder */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-[#EFEAE0] text-[#1C1A17] paper-grain border border-[#1C1A17]/10 z-10">
          <div className="w-12 h-12 rounded-full border border-[#C24E2B]/40 flex items-center justify-center mb-3">
            <span className="font-serif italic text-lg text-[#C24E2B]">P</span>
          </div>
          <p className="font-serif italic text-sm text-[#1C1A17]/70 text-center">{alt}</p>
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#C24E2B] mt-2">
            Pinuccio · Mercado de Belgrano
          </span>
        </div>
      )}
    </div>
  );
};
