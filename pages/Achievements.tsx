"use client";

import {
  Trophy,
  Award,
  Star,
  Medal,
  Calendar,
  ExternalLink,
  ArrowLeft,
  Share2,
  Download,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { categoryConfig } from "./AchievementsGrid";
import { Achievement } from "@/data/AchievementsTypes";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

interface AchievementDetailProps {
  achievement: Achievement;
}

export default function Achievements({ achievement }: AchievementDetailProps) {
  if (!achievement) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        <p>Achievement not found.</p>
      </div>
    );
  }

  const config = categoryConfig[achievement.category];
  const Icon = config.icon;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: achievement.title,
          text: achievement.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    }
  };

  return (
    <div className="bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/achievements"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Achievements</span>
        </Link>

        {/* Main Card */}
        <article className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
          {/* Header Section */}
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            {/* Category Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`p-3 rounded-lg ${config.bgColor} ${config.borderColor} border`}
              >
                <Icon className={`w-8 h-8 ${config.color}`} />
              </div>
              <div>
                <span className={`text-sm font-medium ${config.color}`}>
                  {config.label}
                </span>
                {achievement.rank && (
                  <span className="ml-3 px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    {achievement.rank}
                  </span>
                )}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {achievement.title}
            </h1>

            {/* Organization & Date */}
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span className="font-medium">{achievement.organization}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{achievement.date}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Certificate</span>
                </a>
              )}
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Image Section (if available) */}
          {/* {achievement.images && (
            <div className="relative w-full h-64 md:h-96 bg-muted">
              <Image
                src={achievement.images[0]}
                alt={achievement.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )} */}

          {achievement.about && (
            <StickyScroll content={achievement.about}></StickyScroll>
          )}

          {/* Content Section */}
          <div className="p-8 md:p-12">
            {/* Description */}
            {/* <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {achievement.description}
              </p>
            </div> */}

            {/* Skills Section */}
            {achievement.skills && achievement.skills.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Skills & Technologies
                </h2>
                <div className="flex flex-wrap gap-3">
                  {achievement.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Info Card */}
            <div className="bg-muted/50 border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Achievement Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Category</p>
                  <p className="font-medium text-foreground">{config.label}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Date Achieved
                  </p>
                  <p className="font-medium text-foreground">
                    {achievement.date}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Organization
                  </p>
                  <p className="font-medium text-foreground">
                    {achievement.organization}
                  </p>
                </div>
                {achievement.rank && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Rank/Position
                    </p>
                    <p className="font-medium text-foreground">
                      {achievement.rank}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* Related Achievements - Placeholder */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            More Achievements
          </h2>
          <div className="text-center py-8 bg-card border border-border rounded-xl">
            <p className="text-muted-foreground">View all achievements</p>
            <Link
              href="/achievements"
              className="inline-flex items-center gap-2 mt-4 text-primary hover:underline"
            >
              <span>Browse All</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
