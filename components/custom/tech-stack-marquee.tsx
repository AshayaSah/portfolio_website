"use client";

import React from "react";
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiDocker,
  SiGithubactions,
  SiGo,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

interface TechStack {
  name: string;
  Icon: React.ElementType;
  colorClass: string;
}

const techStacks: TechStack[] = [
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    colorClass: "text-black dark:text-white",
  },
  { name: "MongoDB", Icon: SiMongodb, colorClass: "text-green-500" },
  { name: "Express", Icon: SiExpress, colorClass: "text-gray-500" },
  { name: "React", Icon: SiReact, colorClass: "text-sky-500" },
  { name: "Node.js", Icon: SiNodedotjs, colorClass: "text-green-600" },
  { name: "Python", Icon: SiPython, colorClass: "text-yellow-400" },
  { name: "Django", Icon: SiDjango, colorClass: "text-green-700" },
  { name: "FastAPI", Icon: SiFastapi, colorClass: "text-teal-400" },
  { name: "Java", Icon: FaJava, colorClass: "text-orange-500" },
  { name: "Go", Icon: SiGo, colorClass: "text-cyan-400" },
  { name: "PostgreSQL", Icon: SiPostgresql, colorClass: "text-blue-500" },
  { name: "Docker", Icon: SiDocker, colorClass: "text-sky-500" },
  { name: "CI / CD", Icon: SiGithubactions, colorClass: "text-purple-500" },
];

export default function TechStackMarquee() {
  return (
    <section className="w-full py-16 overflow-hidden bg-background">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-3xl font-bold text-center text-foreground">
          Tech Stack
        </h2>
        <p className="text-center text-muted-foreground mt-2">
          Technologies I work with
        </p>
      </div>

      <div className="relative w-full">
        {/* Gradient edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Track */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee gap-10 pr-10">
            {techStacks.map((tech, index) => (
              <TechCard key={`tech-${index}`} tech={tech} />
            ))}
          </div>

          {/* Duplicate for seamless loop */}
          <div className="flex animate-marquee gap-10 pr-10" aria-hidden="true">
            {techStacks.map((tech, index) => (
              <TechCard key={`tech-dup-${index}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </section>
  );
}

function TechCard({ tech }: { tech: TechStack }) {
  const { Icon } = tech;
  return (
    <div className="flex-shrink-0 flex flex-col items-center justify-center min-w-[150px] h-[150px] p-6 rounded-xl border border-border bg-card transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
      <Icon className={`text-5xl mb-3 ${tech.colorClass}`} />
      <span className="text-sm font-semibold text-card-foreground text-center">
        {tech.name}
      </span>
    </div>
  );
}
