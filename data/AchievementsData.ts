import { Achievement } from "@/pages/AchievementsGrid";

export const achievementsData: Achievement[] = [
  {
    id: "hackathon-winner-2024",
    title: "First Place - Global AI Hackathon 2024",
    organization: "TechCorp International",
    date: "January 2024",
    description:
      "Won first place among 500+ participants worldwide by developing an AI-powered solution for sustainable agriculture. Our team created a machine learning model that predicts crop yields with 94% accuracy, helping farmers optimize their resources.",
    category: "competition",
    rank: "1st Place",
    skills: ["Python", "TensorFlow", "React", "FastAPI", "Docker"],
    link: "https://example.com/certificate",
    image: "/images/hackathon-2024.jpg",
  },
  {
    id: "aws-solutions-architect",
    title: "AWS Certified Solutions Architect - Professional",
    organization: "Amazon Web Services",
    date: "November 2023",
    description:
      "Earned the AWS Solutions Architect Professional certification, demonstrating advanced technical skills and expertise in designing distributed applications and systems on the AWS platform. This certification validates my ability to design and deploy dynamically scalable, highly available, fault-tolerant, and reliable applications.",
    category: "certification",
    skills: [
      "AWS",
      "Cloud Architecture",
      "DevOps",
      "Infrastructure as Code",
      "Kubernetes",
    ],
    link: "https://aws.amazon.com/certification/",
  },
  {
    id: "opensource-contributor-2023",
    title: "Top Open Source Contributor Award",
    organization: "GitHub",
    date: "December 2023",
    description:
      "Recognized as a top contributor to major open-source projects, with over 500 contributions made throughout the year. Contributed to popular frameworks and libraries including Next.js, React, and TailwindCSS, helping improve documentation and fix critical bugs.",
    category: "recognition",
    skills: ["JavaScript", "TypeScript", "Git", "Open Source", "Documentation"],
    link: "https://github.com",
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
  {
    id: "best-mentor-2022",
    title: "Best Technical Mentor Award",
    organization: "DevMentor Platform",
    date: "December 2022",
    description:
      "Awarded Best Technical Mentor for outstanding contribution to helping junior developers grow their skills. Mentored 50+ developers in full-stack development, conducted weekly coding sessions, and maintained a 4.9/5 satisfaction rating.",
    category: "recognition",
    skills: [
      "Mentoring",
      "Teaching",
      "Full-stack Development",
      "Code Review",
      "Career Guidance",
    ],
  },
  {
    id: "startup-hackathon-winner",
    title: "Winner - Startup Weekend 2022",
    organization: "Techstars",
    date: "September 2022",
    description:
      "Led a team to win Startup Weekend by pitching and building a SaaS product for remote team collaboration. Developed a working prototype in 54 hours that attracted interest from three potential investors. The product focused on asynchronous video communication for distributed teams.",
    category: "competition",
    rank: "Winner",
    skills: ["Product Management", "Next.js", "WebRTC", "PostgreSQL", "Agile"],
  },
  {
    id: "security-certification",
    title: "CompTIA Security+ Certified",
    organization: "CompTIA",
    date: "April 2022",
    description:
      "Obtained CompTIA Security+ certification, validating baseline cybersecurity skills and knowledge. Demonstrated competency in risk management, network security, cryptography, and compliance. This certification establishes the core knowledge required for any cybersecurity role.",
    category: "certification",
    skills: [
      "Cybersecurity",
      "Network Security",
      "Risk Management",
      "Compliance",
      "Encryption",
    ],
    link: "https://www.comptia.org/certifications/security",
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
