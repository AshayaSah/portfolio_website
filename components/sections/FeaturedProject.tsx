"use client";

import { useTheme } from "next-themes";
import { ThreeDCard } from "./ThreeDCard";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function FeaturedProject() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted ? theme === "light" : false;

  return (
    <div className="relative pt-20 pb-40">
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

      <div className="relative z-10 container mx-auto">
        <h1 className="text-4xl font-bold text-center md:text-7xl text-foreground">
          Featured
        </h1>

        {/* <LayoutGrid cards={cards} /> */}
        <div className="flex justify-between w-full flex-col lg:flex-row flex-wrap">
          {cards.map((card) => {
            return <ThreeDCard key={card.id} card={card} />;
          })}
        </div>
      </div>
    </div>
  );
}

const cards = [
  {
    id: 1,
    cardTitle: "My Recent Achievement",
    title: "Representing Nepal in JAXA's KIBO RPC",
    subTitle: "(suprised ourselves)",
    content: `We were selected as the representative team from Nepal for the JAXA
          Kibo Robot Programming Challenge. Yes, that JAXA — the space agency.
          🚀 Now we're waiting for the final round results.`,
    className: "col-span-1",
    tryNow: "#achievements",
    readMore: "#achievements",
    thumbnail: "/achievements/kibo.png",
  },
  {
    id: 2,
    cardTitle: "My Recent Project",
    title: "AI Automation Messaging for Instagram and Messenger",
    subTitle: "(college's final year project)",
    content: `I am currently developing an AI-powered automation system for Instagram and Messenger, 
            designed to streamline messaging, engagement, and responses for BUSINESSES running over social medias.`,
    className: "col-span-1",
    tryNow: "#projects",
    readMore: "#projects",
    thumbnail: "/projects/aiMessaging.png",
  },
  {
    id: 3,
    cardTitle: "Experience",
    title: "Software Engineer",
    subTitle: "(CAS Total Solutions, Nepal)",
    content: `Currently working as a FullStack Software Engineer with 1.5 Years of Experience in JS/TS, Python and SQL. 
            Did a bit of CI/CD. Fell in love with Coding (building sesible things). Continue Exploring ..`,
    className: "col-span-1",
    tryNow: "#experienec",
    readMore: "#experience",
    thumbnail: "/professional-profile.jpg",
  },
  {
    id: 4,
    cardTitle: "My Hobbies",
    title: "Want To Know Me More ..",
    subTitle: "(reasons not to hire me)",
    content: `Love to do Randoms Things. Love listening Bhojpuri Songs. Travelling (only on bike). Exploring New Things 
            (maybe Quantam Physics). Mad about CARS (Skyline GTR R34 <3)`,
    className: "col-span-1",
    tryNow: "#experienec",
    readMore: "#experience",
    thumbnail: "/jungle.jpeg",
  },
];
