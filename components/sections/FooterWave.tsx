"use client";

import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";

export default function FooterWave() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-background overflow-hidden">
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[80px] md:h-[120px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                className="text-primary/20"
                stopColor="currentColor"
              />
              <stop
                offset="50%"
                className="text-primary/30"
                stopColor="currentColor"
              />
              <stop
                offset="100%"
                className="text-primary/20"
                stopColor="currentColor"
              />
            </linearGradient>
          </defs>
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="url(#waveGradient)"
          />
          <path
            d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,88C672,91,768,85,864,80C960,75,1056,69,1152,69.3C1248,69,1344,75,1392,77.3L1440,80L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            className="text-card/50"
            fill="currentColor"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative pt-24 md:pt-32 pb-8 bg-gradient-to-b from-card/30 to-card">
        <div className="container mx-auto px-4">
          {/* Top Section - CTA */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Let's work together</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Have a project in mind?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <span className="font-medium">Get In Touch</span>
            </a>
          </div>

          {/* Middle Section - Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 container mx-auto">
            {/* Column 1 - About */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold text-foreground mb-3">
                Your Name
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Full-stack developer specializing in building exceptional
                digital experiences.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center md:justify-start">
                <MapPin className="w-4 h-4" />
                <span>Your Location</span>
              </div>
            </div>

            {/* Column 2 - Navigation */}
            <div className="text-center">
              <h4 className="text-lg font-bold text-foreground mb-3">
                Explore
              </h4>
              <nav className="flex flex-col gap-2">
                {["Home", "About", "Projects", "Blog", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center justify-center gap-1 group"
                    >
                      <span className="relative">
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </a>
                  ),
                )}
              </nav>
            </div>

            {/* Column 3 - Social */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-bold text-foreground mb-3">
                Follow Me
              </h4>
              <div className="flex gap-3 justify-center md:justify-end mb-4">
                {[
                  {
                    icon: <Github className="w-5 h-5" />,
                    href: "#",
                    label: "GitHub",
                  },
                  {
                    icon: <Linkedin className="w-5 h-5" />,
                    href: "#",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Twitter className="w-5 h-5" />,
                    href: "#",
                    label: "Twitter",
                  },
                  {
                    icon: <Mail className="w-5 h-5" />,
                    href: "#",
                    label: "Email",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Always up for a chat about tech and ideas
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border mb-6"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Your Name. Crafted with passion.</p>
            <div className="flex gap-6">
              <a
                href="#privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#sitemap"
                className="hover:text-foreground transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient orb */}
      {/* <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div> */}
    </footer>
  );
}
