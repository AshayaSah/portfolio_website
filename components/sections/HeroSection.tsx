"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight";
import { useTheme } from "next-themes";
import { AnimatedCollage } from "../custom/animated-collage";
import { motion } from "motion/react";

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
    "/godawari.jpeg",
    "/jungle.jpeg",
    "/maak-arar.jpeg",
  ];

  return (
    <div className="">
      <div
        className={cn(
          "relative flex h-[60rem] md:h-[50rem] lg:h-[40rem] w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center",
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
          {/* <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8"> */}
          <div className="md:px-8 flex justify-evenly flex-col md:flex-row items-center flex-wrap gap-16">
            {/* Text Content */}
            <div className="flex-1">
              <h1
                className={cn(
                  "bg-clip-text text-center md:text-left text-4xl font-bold text-transparent md:text-7xl pb-4",
                  "bg-gradient-to-b from-foreground to-foreground/60",
                )}
              >
                Hey! I am Ashaya Sah
              </h1>

              {/* <HeroIntro></HeroIntro> */}

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg md:text-xl text-muted-foreground max-w-3xl"
              >
                I'm currently working as a{" "}
                <span className="text-foreground font-medium">
                  Software Engineer
                </span>{" "}
                at{" "}
                <a
                  href="https://cas.com.np"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CAS Total Solutions, Nepal
                </a>
                . I've built software trusted by{" "}
                <a
                  href="https://losapp.nppf.org.bt"
                  className="font-medium text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  the Bhutanese Government
                </a>
                , serving thousands of users. Currently building Projects and AI
                tools that help people and businesses in their daily life.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                {[
                  "JavaScript / TypeScript",
                  "Python",
                  "Java (DSA)",
                  "Go",
                  "SQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium text-foreground bg-muted"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* <p className="mx-auto md:mx-0 mt-4 max-w-lg text-center md:text-left text-base font-normal text-muted-foreground">
                Spotlight effect is a great way to draw attention to a specific
                part of the page. Here, we are drawing the attention towards the
                text section of the page. I don&apos;t know why but I&apos;m
                running out of copy.
              </p> */}
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
