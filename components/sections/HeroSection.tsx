"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight";
import { useTheme } from "next-themes";
import { ImageCarousel } from "../custom/image-collage";
import { AnimatedCollage } from "../custom/animated-collage";

export function HeroSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted ? theme === "light" : false;

  const portfolioImages = [
    "/professional-profile.jpg",
    "/professional-profile.jpg",
    "/professional-profile.jpg",
  ];

  return (
    <div className="">
      <div
        className={cn(
          "relative flex h-[50rem] md:h-[40rem] w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center",
          "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        )}
      >
        {mounted && (
          <div
            className={cn(
              "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
              isLight
                ? "[background-image:linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)]"
                : "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
            )}
          />
        )}

        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          theme={isLight ? "light" : "dark"}
        />

        <div className="relative z-10 mx-auto w-full container px-4 pt-20 md:pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* Text Content */}
            <div className="flex-1">
              <h1
                className={cn(
                  "bg-clip-text text-center md:text-left text-4xl font-bold text-transparent md:text-7xl",
                  "bg-gradient-to-b from-foreground to-foreground/60",
                )}
              >
                Hey! I am Ashaya Sah
              </h1>
              <p className="mx-auto md:mx-0 mt-4 max-w-lg text-center md:text-left text-base font-normal text-muted-foreground">
                Spotlight effect is a great way to draw attention to a specific
                part of the page. Here, we are drawing the attention towards the
                text section of the page. I don&apos;t know why but I&apos;m
                running out of copy.
              </p>
            </div>

            {/* Image Carousel */}
            <div className="flex justify-center items-center">
              <AnimatedCollage images={portfolioImages} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
