import { Achievement } from "./AchievementsTypes";

export const achievementsData: Achievement[] = [
  {
    id: "hackathon-winner-2024",
    title: "First Place - Global AI Hackathon 2024",
    organization: "TechCorp International",
    date: "January 2024",
    about: [
      {
        title: "Collaborative Editing",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
            <img
              src="/professional-profile.jpg"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
      {
        title: "Real time changes",
        description:
          "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        content: (
          <div className="flex h-full w-full items-center justify-center text-white">
            <img
              src="/godawari.jpeg"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
      {
        title: "Version control",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
            <img
              src="/jungle.jpeg"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
      {
        title: "Running out of content",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
            <img
              src="/maak-arar.jpeg"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
    ],
    description:
      "Won first place among 500+ participants worldwide by developing an AI-powered solution for sustainable agriculture. Our team created a machine learning model that predicts crop yields with 94% accuracy, helping farmers optimize their resources.",
    category: "competition",
    rank: "1st Place",
    skills: ["Python", "TensorFlow", "React", "FastAPI", "Docker"],
    link: "https://example.com/certificate",
    images: ["/achievements/kibo.png"],
  },
  {
    id: "google-developer-expert",
    title: "Google Developer Expert - Web Technologies",
    organization: "Google",
    date: "March 2023",
    description:
      "Selected as a Google Developer Expert in Web Technologies, recognizing expertise in modern web development, performance optimization, and Progressive Web Apps. Engaged in community activities including speaking at conferences, writing technical articles, and mentoring developers.",
    category: "award",
    skills: [
      "Web Performance",
      "PWA",
      "JavaScript",
      "Modern Web",
      "Developer Relations",
    ],
    link: "https://developers.google.com/community/experts",
  },
  {
    id: "innovation-challenge-2023",
    title: "Runner-up - National Innovation Challenge",
    organization: "Innovation Hub",
    date: "August 2023",
    description:
      "Secured second place in the National Innovation Challenge by developing a blockchain-based supply chain tracking system. The solution improved transparency and reduced fraud in the pharmaceutical industry, receiving recognition from industry leaders.",
    category: "competition",
    rank: "2nd Place",
    skills: ["Blockchain", "Ethereum", "Solidity", "Node.js", "MongoDB"],
  },
  {
    id: "kubernetes-certification",
    title: "Certified Kubernetes Administrator (CKA)",
    organization: "Cloud Native Computing Foundation",
    date: "June 2023",
    description:
      "Successfully passed the Certified Kubernetes Administrator exam, demonstrating proficiency in Kubernetes cluster administration, including installation, configuration, and maintenance. Skilled in troubleshooting, security, and managing containerized applications at scale.",
    category: "certification",
    skills: [
      "Kubernetes",
      "Docker",
      "Container Orchestration",
      "Cloud Native",
      "DevOps",
    ],
    link: "https://www.cncf.io/certification/cka/",
  },
];

// Helper function to get achievement by ID
export function getAchievementById(id: string): Achievement | undefined {
  return achievementsData.find((achievement) => achievement.id === id);
}

// Helper function to get achievements by category
export function getAchievementsByCategory(
  category: Achievement["category"],
): Achievement[] {
  return achievementsData.filter(
    (achievement) => achievement.category === category,
  );
}

// Helper function to get recent achievements
export function getRecentAchievements(limit: number = 3): Achievement[] {
  return achievementsData.slice(0, limit);
}
