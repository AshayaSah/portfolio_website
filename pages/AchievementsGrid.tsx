"use client";

import React from "react";
import {
  Trophy,
  Award,
  Star,
  Medal,
  Calendar,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  category: "award" | "certification" | "competition" | "recognition";
  image?: string;
  skills?: string[];
  link?: string;
  rank?: string;
}

interface AchievementsGridProps {
  achievements: Achievement[];
}

const categoryConfig = {
  award: {
    icon: Trophy,
    color: "text-yellow-600 dark:text-yellow-500",
    bgColor: "bg-yellow-600/10",
    borderColor: "border-yellow-600/20",
  },
  certification: {
    icon: Award,
    color: "text-blue-600 dark:text-blue-500",
    bgColor: "bg-blue-600/10",
    borderColor: "border-blue-600/20",
  },
  competition: {
    icon: Medal,
    color: "text-purple-600 dark:text-purple-500",
    bgColor: "bg-purple-600/10",
    borderColor: "border-purple-600/20",
  },
  recognition: {
    icon: Star,
    color: "text-green-600 dark:text-green-500",
    bgColor: "bg-green-600/10",
    borderColor: "border-green-600/20",
  },
};

export default function AchievementsGrid({
  achievements,
}: AchievementsGridProps) {
  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Trophy className="w-4 h-4" />
            <span>Achievements & Recognition</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of awards, certifications, and recognitions I've earned
            throughout my journey
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>

        {/* Empty State */}
        {achievements.length === 0 && (
          <div className="text-center py-12">
            <Trophy className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground">
              No achievements to display yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function AchievementCard({ achievement }: { achievement: Achievement }) {
  const config = categoryConfig[achievement.category];
  const Icon = config.icon;

  return (
    <Link href={`/achievements/${achievement.id}`}>
      <article className="group relative h-full bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div
              className={`p-3 rounded-lg ${config.bgColor} ${config.borderColor} border`}
            >
              <Icon className={`w-6 h-6 ${config.color}`} />
            </div>
            {achievement.rank && (
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                {achievement.rank}
              </span>
            )}
          </div>

          {/* Title & Organization */}
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {achievement.title}
          </h3>
          <p className="text-sm font-medium text-muted-foreground mb-3">
            {achievement.organization}
          </p>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {achievement.description}
          </p>

          {/* Skills */}
          {achievement.skills && achievement.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {achievement.skills.slice(0, 3).map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                >
                  {skill}
                </span>
              ))}
              {achievement.skills.length > 3 && (
                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                  +{achievement.skills.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              <span>{achievement.date}</span>
            </div>
            <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Hover Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </article>
    </Link>
  );
}
