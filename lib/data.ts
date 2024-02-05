import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import carHubImg from "@/public/carHub.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-end Developer",
    location: "Dhaka, Bangladesh",
    description:
      "I have done a training on front-end development under SEIP project of BASIS for 3 months during graduation. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Internship Front-end Developer",
    location: "Dhaka, Bangladesh",
    description:
      "I interned as a front-end developer for 6 months in a job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
  
] as const;

export const projectsData = [
  {
    title: "Car Hub",
    description:
      "I completed this simple project which is provide different type of car service such as rent, book, car details, search car.",
    tags: ["TypeScript","React", "Next.js", "Tailwind"],
    imageUrl: carHubImg,
    codeUrl: "https://github.com/Abdullah628/car-hub",
    demoLiveUrl: "https://car-hub-sand-xi.vercel.app/"
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    codeUrl: "https://drive.google.com/file/d/1qrMmL_iBxFMgdfpOXRg01prdIi8woIXu/view?usp=sharing",
    demoLiveUrl: "https://drive.google.com/file/d/1qrMmL_iBxFMgdfpOXRg01prdIi8woIXu/view?usp=sharing"
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    codeUrl: "https://drive.google.com/file/d/1qrMmL_iBxFMgdfpOXRg01prdIi8woIXu/view?usp=sharing",
    demoLiveUrl: "https://drive.google.com/file/d/1qrMmL_iBxFMgdfpOXRg01prdIi8woIXu/view?usp=sharing"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
