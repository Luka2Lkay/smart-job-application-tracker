export type ApplicationStatus =
  | "SAVED"
  | "APPLIED"
  | "INTERVIEW"
  | "OFFER"
  | "REJECTED";

export interface Application {
  id: string;
  company: string;
  position: string;
  location: string;
  salary: string;
  status: ApplicationStatus;
  appliedAt: string;
  jobUrl: string;
  notes: string;
}

export const applications: Application[] = [
  {
    id: "1",
    company: "Microsoft",
    position: "Software Engineer",
    location: "Cape Town, South Africa",
    salary: "R35,000 - R50,000",
    status: "INTERVIEW",
    appliedAt: "2026-09-10",
    jobUrl: "https://careers.microsoft.com",
    notes: "Technical interview scheduled.",
  },
  {
    id: "2",
    company: "Takealot",
    position: "Frontend Developer",
    location: "Cape Town, South Africa",
    salary: "R30,000 - R45,000",
    status: "APPLIED",
    appliedAt: "2026-09-08",
    jobUrl: "https://www.takealot.com",
    notes: "React and TypeScript position.",
  },
  {
    id: "3",
    company: "Shopify",
    position: "Full Stack Developer",
    location: "Remote",
    salary: "$70,000 - $90,000",
    status: "SAVED",
    appliedAt: "",
    jobUrl: "https://www.shopify.com/careers",
    notes: "Need to research the company before applying.",
  },
  {
    id: "4",
    company: "Amazon",
    position: "Cloud Support Engineer",
    location: "Cape Town, South Africa",
    salary: "R28,000 - R40,000",
    status: "REJECTED",
    appliedAt: "2026-08-28",
    jobUrl: "https://www.amazon.jobs",
    notes: "Application rejected.",
  },

  {
    id: "5",
    company: "Discovery",
    position: "Junior Software Developer",
    location: "Sandton, South Africa",
    salary: "R25,000 - R35,000",
    status: "OFFER",
    appliedAt: "2026-08-20",
    jobUrl: "https://www.discovery.co.za/careers",
    notes: "Offer received.",
  },
];
