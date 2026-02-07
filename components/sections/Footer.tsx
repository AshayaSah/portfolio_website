"use client";

import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUp,
  Code2,
  Zap,
  Sparkles,
  Send,
} from "lucide-react";

export default function FooterMinimal() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full">
      {/* Glassy Card Footer */}
      <div className="container mx-auto px-4 pb-8">
        <div className="relative backdrop-blur-xl bg-card/50 border border-border rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>

          <div className="relative z-10">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-center items-center mb-8 gap-8">
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
                <div className="flex justify-center gap-4">
                  <a
                    href="mailto:your.email@example.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span className="font-medium">Get In Touch</span>
                  </a>
                  <button
                    onClick={scrollToTop}
                    className="group p-4 bg-primary/10 hover:bg-primary rounded-full transition-all duration-300 hover:scale-110"
                    aria-label="Scroll to top"
                  >
                    <ArrowUp className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </button>
                </div>
              </div>

              {/* Scroll to Top Button */}
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {/* Quick Links */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {["Home", "About", "Projects", "Contact"].map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transform"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Services
                </h4>
                <ul className="space-y-2">
                  {[
                    "Web Development",
                    "API Design",
                    "Consulting",
                    "Code Review",
                  ].map((service) => (
                    <li key={service}>
                      <a
                        href="#services"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transform"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Resources
                </h4>
                <ul className="space-y-2">
                  {["Blog", "Case Studies", "Documentation", "Newsletter"].map(
                    (resource) => (
                      <li key={resource}>
                        <a
                          href="#resources"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transform"
                        >
                          {resource}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Connect
                </h4>
                <div className="flex gap-2 mb-4">
                  {[
                    {
                      icon: <Github className="w-4 h-4" />,
                      href: "#",
                      color: "hover:bg-gray-800",
                    },
                    {
                      icon: <Linkedin className="w-4 h-4" />,
                      href: "#",
                      color: "hover:bg-blue-600",
                    },
                    {
                      icon: <Twitter className="w-4 h-4" />,
                      href: "#",
                      color: "hover:bg-sky-500",
                    },
                    {
                      icon: <Mail className="w-4 h-4" />,
                      href: "#",
                      color: "hover:bg-red-500",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-2 rounded-lg bg-muted text-muted-foreground ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <a
                  href="mailto:your.email@example.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  your.email@example.com
                </a>
              </div>
            </div>

            {/* Divider with dots */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex-1 border-t border-border"></div>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-primary/30"></div>
              </div>
              <div className="flex-1 border-t border-border"></div>
            </div>

            {/* Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-muted-foreground">
                © {currentYear} Ashaya Sah. All rights reserved.
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="#privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy
                </a>
                <span className="text-border">•</span>
                <a
                  href="#terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms
                </a>
                <span className="text-border">•</span>
                <a
                  href="#cookies"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>

          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/20 rounded-br-3xl"></div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
    </footer>
  );
}
