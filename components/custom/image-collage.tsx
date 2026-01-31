"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  className?: string;
}

export function ImageCarousel({ images, className }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Speed: 3s normal, 0.5s on hover
    const interval = setInterval(
      () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      },
      isHovered ? 500 : 3000,
    );

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <div
      className={cn("relative h-[400px] w-[300px]", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((image, index) => {
        // Calculate position offset for stacking effect
        const offset = (index - currentIndex + images.length) % images.length;
        const isActive = index === currentIndex;
        const isNext = offset === 1;
        const isPrev = offset === images.length - 1;

        return (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all duration-500 ease-out",
              isActive && "z-30 scale-100 opacity-100",
              isNext && "z-20 scale-95 opacity-70 translate-x-4 translate-y-4",
              isPrev &&
                "z-10 scale-90 opacity-40 -translate-x-4 -translate-y-4",
              !isActive && !isNext && !isPrev && "z-0 scale-85 opacity-0",
            )}
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl border-4 border-border bg-background shadow-2xl">
              <Image
                src={image}
                alt={`Portfolio image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        );
      })}

      {/* Decorative elements */}
      <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-muted/50 blur-xl" />
    </div>
  );
}
