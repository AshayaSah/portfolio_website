"use client";

import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter, ArrowRight } from "lucide-react";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandDocker,
  IconBrandTailwind,
  IconBrandGolang,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandAws,
  IconBrandGit,
  IconBrandGithub,
  IconBrandGitlab,
  IconBrandMysql,
} from "@tabler/icons-react";

export default function HeroIntro() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-4 w-4" />,
      href: "https://github.com/ashayasah",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      href: "https://linkedin.com/in/yourprofile",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-4 w-4" />,
      href: "https://twitter.com/yourhandle",
    },
    {
      name: "Email",
      icon: <Mail className="h-4 w-4" />,
      href: "mailto:your.email@example.com",
    },
  ];

  const techStack = [
    { name: "React", icon: <IconBrandReact className="h-5 w-5" /> },
    { name: "Next.js", icon: <IconBrandNextjs className="h-5 w-5" /> },
    { name: "TypeScript", icon: <IconBrandTypescript className="h-5 w-5" /> },
    { name: "Tailwind CSS", icon: <IconBrandTailwind className="h-5 w-5" /> },

    { name: "Node.js", icon: <IconBrandNodejs className="h-5 w-5" /> },
    { name: "Python", icon: <IconBrandPython className="h-5 w-5" /> },
    { name: "Go", icon: <IconBrandGolang className="h-5 w-5" /> },
    { name: "Java", icon: <IconBrandJavascript className="h-5 w-5" /> },

    { name: "PostgreSQL", icon: <IconBrandMysql className="h-5 w-5" /> },
    { name: "MongoDB", icon: <IconBrandMongodb className="h-5 w-5" /> },

    { name: "Docker", icon: <IconBrandDocker className="h-5 w-5" /> },
    { name: "AWS", icon: <IconBrandAws className="h-5 w-5" /> },

    { name: "Git", icon: <IconBrandGit className="h-5 w-5" /> },
    { name: "GitHub Actions", icon: <IconBrandGithub className="h-5 w-5" /> },
    { name: "GitLab CI", icon: <IconBrandGitlab className="h-5 w-5" /> },
  ];

  const expertise = [
    "Full-Stack Engineering",
    "Scalable Backend Systems",
    "Modern Frontend Architecture",
    "Data Structures & Algorithms",
    "Cloud-Native Microservices",
    "DevOps & CI/CD Pipelines",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full space-y-8">
        {/* Current Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl"
        >
          I'm currently working as a{" "}
          <span className="text-foreground font-medium">Software Engineer</span>{" "}
          at{" "}
          <a href="https://cas.com.np" className="text-primary hover:underline">
            CAS Total Solutions, Nepal
          </a>
          . I've written software that is trusted by thousands of users. My goal
          is what keeps me building, currently building AI tools that help
          people articulate their ideas and share them at scale.
        </motion.p>

        {/* Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3"
        >
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            What I'm Expert In
          </h3>
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-3"
        >
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border hover:border-primary transition-colors cursor-pointer group"
              >
                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  {tech.icon}
                </span>
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
