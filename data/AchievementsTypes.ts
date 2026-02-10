import { LucideIcon } from "lucide-react";
import { JSX, ReactNode } from "react";

type CategoryKey = "award" | "certification" | "competition" | "recognition";

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  about?: AchievementAbout[];
  description: string;
  category: CategoryKey;
  images?: string[];
  skills?: string[];
  link?: string;
  rank?: string;
}

type CategoryConfigItem = {
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
  label: string;
};

export interface AchievementAbout {
  title: string;
  description: string;
  content: ReactNode;
}

export type CategoryConfig = Record<CategoryKey, CategoryConfigItem>;
