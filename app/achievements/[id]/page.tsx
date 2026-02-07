import { achievementsData, getAchievementById } from "@/data/AchievementsData";
import Achievements from "@/pages/Achievements";
import { notFound } from "next/navigation";

interface AchievementPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Static params (this part is fine)
export async function generateStaticParams() {
  return achievementsData.map((achievement) => ({
    id: achievement.id,
  }));
}

// Metadata
export async function generateMetadata({ params }: AchievementPageProps) {
  const { id } = await params; // 👈 unwrap params
  const achievement = getAchievementById(id);

  if (!achievement) {
    return { title: "Achievement Not Found" };
  }

  return {
    title: `${achievement.title} | Achievements`,
    description: achievement.description,
  };
}

// Page
export default async function AchievementPage({
  params,
}: AchievementPageProps) {
  const { id } = await params; // 👈 unwrap params
  const achievement = getAchievementById(id);

  if (!achievement) {
    notFound();
  }

  return <Achievements achievement={achievement} />;
}
