"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconHome,
  IconUser,
  IconCode,
  IconMessage,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-muted-foreground dark:text-muted-foreground" />
      ),
      href: "https://github.com/AshayaSah",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-muted-foreground dark:text-muted-foreground" />
      ),
      href: "https://linkedin.com/in/ashaya-sah",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandTwitter className="h-full w-full text-muted-foreground dark:text-muted-foreground" />
      ),
      href: "https://twitter.com/AshayaSah",
    },
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-muted-foreground dark:text-muted-foreground" />
      ),
      href: "mailto:ashayasah@gmail.com",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center pb-8 pointer-events-none">
      <div className="pointer-events-auto">
        <FloatingDock items={links} />
      </div>
    </div>
  );
}
