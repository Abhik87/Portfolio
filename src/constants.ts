import { Project, Experience, SkillCategory, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Abhik Dutta",
  title: "Senior Java & Cloud Architect",
  experience_years: "14+",
  email: "abhikltim@gmail.com",
  phone: "+91 8967996679",
  location: "Kolkata, India",
  linkedin: "https://www.linkedin.com/in/abhik-dutta-50a0a233",
  github: "https://github.com/Abhik87",
  summary: "Accomplished Senior Specialist with over 14 years of expertise in software development, cloud architecture, and technical leadership. Master in Java Spring-boot Microservices and Amazon AWS ecosystems, with a proven track record in Insurance, Financial Services, and Retail sectors."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "JAVA Technologies",
    skills: ["Java 8+", "Spring Framework", "JPA", "Hibernate", "Spring Boot", "Spring MVC"]
  },
  {
    category: "Cloud Technologies",
    skills: ["Amazon AWS (EC2, Lambda, SSQ, SNS)", "API Gateway", "S3", "ECS", "EKS", "Azure Fundamentals"]
  },
  {
    category: "Web & Databases",
    skills: ["HTML5", "CSS3", "JavaScript", "Angular JS", "PostgreSQL", "Oracle", "MySQL", "RDS", "Aurora"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "Jenkins", "GIT", "Maven", "JIRA", "SonarQube", "Ansible"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "LTIMindtree",
    role: "Senior Specialist",
    period: "Jan 2023 - Present",
    location: "Kolkata"
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Senior Software Engineer / Lead",
    period: "Oct 2015 - Dec 2022",
    location: "Kolkata"
  },
  {
    company: "Tata Consultancy Services",
    role: "IT Analyst",
    period: "Mar 2011 - Sept 2015",
    location: "Kolkata/Bangalore"
  },
  {
    company: "RS Software India Limited",
    role: "QA Analyst",
    period: "Mar 2010 - Dec 2010",
    location: "Kolkata"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "RPS Modernization",
    client: "Lincoln Financial Group",
    organization: "LTIMindtree",
    duration: "Jan 2023 - Present",
    role: "Lead, Senior Developer, Release Manager",
    description: "Orchestrated large-scale modernization of the Retirement Plan Services flagship platform. Rewrote legacy Java web applications and replatformed on-premise Servlet/JSP systems to AWS.",
    environment: ["Java 11", "Spring-boot", "Microservices", "MySQL", "Kafka", "AWS Lambda", "SQS", "Docker"],
    responsibilities: [
      "Designed and developed business-critical use-cases using AWS platform services.",
      "Developed Event-Driven Microservices using Restful APIs and Apache Kafka.",
      "Automated manual monitoring processes significantly reducing manual efforts."
    ]
  },
  {
    title: "AXA Belgium DIF",
    client: "AXA",
    organization: "Cognizant",
    duration: "July 2021 - Dec 2023",
    role: "Lead, Senior Developer, Scrum Master",
    description: "Greenfield project for AXA Belgium focused on managing Distributors and stakeholders, replacing legacy mainframe systems with a future-proof cloud-based application.",
    environment: ["Java Microservices", "Spring-boot", "Angular", "PostgreSQL", "AWS Elastic Beanstalk", "AWS Lambda"],
    responsibilities: [
      "Designed and developed 'DIF-DRM Integration' and 'Admin Changes' use cases.",
      "Managed a team of 8 members and participated in active communication to higher management.",
      "Facilitated Scrum ceremonies as a Scrum Master."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "AWS Certified AI Practitioner", issuer: "Amazon AWS" },
  { name: "AWS Certified Solution Architect - Associate", issuer: "Amazon AWS" },
  { name: "AWS Certified Developer - Associate", issuer: "Amazon AWS" },
  { name: "Azure Fundamentals", issuer: "Microsoft" },
  { name: "DevOps Practitioner", issuer: "SimpliLearn" },
  { name: "Oracle Certified Professional (Java SE 6)", issuer: "Oracle" }
];
