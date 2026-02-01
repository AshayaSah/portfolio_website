"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import DitherShader from "../ui/dither-shader";

interface AnimatedCollageProps {
  images: string[];
  autoplay?: boolean;
  className?: string;
}

export const AnimatedCollage = ({
  images,
  autoplay = true,
  className,
}: AnimatedCollageProps) => {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay && mounted) {
      const interval = setInterval(handleNext, 3000);
      return () => clearInterval(interval);
    }
  }, [autoplay, active, mounted]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  if (!mounted) {
    return (
      <div className={cn("relative", className)}>
        <div className="relative h-[400px] w-[300px]">
          <div className="absolute inset-0">
            <div className="relative h-full w-full overflow-hidden rounded-2xl border-4 border-border bg-background shadow-2xl">
              <Image
                src={images[0]}
                alt="Image 1"
                fill
                className="object-cover object-center"
                draggable={false}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
            <IconArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
            <IconArrowRight className="h-5 w-5 text-foreground" />
          </button>
        </div>
        <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-muted/50 blur-xl" />
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      <div className="relative h-[400px] w-[300px]">
        <AnimatePresence mode="sync">
          {images.map((image, index) => (
            <motion.div
              key={`${image}-${index}`}
              initial={{
                opacity: 0,
                scale: 0.9,
                z: -100,
                rotate: randomRotateY(),
              }}
              animate={{
                opacity: isActive(index) ? 1 : 0.7,
                scale: isActive(index) ? 1 : 0.95,
                z: isActive(index) ? 0 : -100,
                rotate: isActive(index) ? 0 : randomRotateY(),
                zIndex: isActive(index) ? 40 : images.length + 2 - index,
                y: isActive(index) ? [0, -20, 0] : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                z: 100,
                rotate: randomRotateY(),
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute inset-0 origin-bottom"
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl border-4 border-border bg-background shadow-2xl">
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-cover object-center"
                  draggable={false}
                  priority={index === 0}
                />

                {/* <DitherShader
                  src={image}
                  gridSize={1}
                  ditherMode="bayer"
                  colorMode="duotone"
                  primaryColor="primary"
                  secondaryColor="#f0e68c"
                  threshold={0.45}
                  className="h-72 w-[400px] sm:h-80 sm:w-[500px]"
                /> */}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={handlePrev}
          className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-muted/80"
          aria-label="Previous image"
        >
          <IconArrowLeft className="h-5 w-5 text-foreground transition-transform duration-300 group-hover/button:rotate-12" />
        </button>
        <button
          onClick={handleNext}
          className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-muted/80"
          aria-label="Next image"
        >
          <IconArrowRight className="h-5 w-5 text-foreground transition-transform duration-300 group-hover/button:-rotate-12" />
        </button>
      </div>

      {/* Decorative blur background */}
      <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-muted/50 blur-xl" />
    </div>
  );
};
