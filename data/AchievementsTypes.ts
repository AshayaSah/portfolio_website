import { LucideIcon } from "lucide-react";

type CategoryKey = "award" | "certification" | "competition" | "recognition";

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
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

export type CategoryConfig = Record<CategoryKey, CategoryConfigItem>;
