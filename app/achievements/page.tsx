import { achievementsData } from "@/data/AchievementsData";
import AchievementsGrid from "@/pages/AchievementsGrid";

export default function AchievementsPage() {
  return (
    <div className="min-h-screen">
      <AchievementsGrid achievements={achievementsData} />
    </div>
  );
}
