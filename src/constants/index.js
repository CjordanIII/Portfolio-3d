import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    redux,
    snapgram,
    tailwindcss,
    typescript
} from "../assets/icons";
import { Forage, computer, proLogistix } from "../assets/images";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },


    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },

    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
  {
    title:
      "Software Engineering Lite virtual experience program on Forage             ",
    company_name: "JPMorgan Chase & Co.",
    icon: Forage,
    iconBg: "#accbe1",
    date: " November 2023",
    points: [
      "Completed a simulation focused on the process of completing an engineering ticket for a system in the credit-card rewards department of JPMorgan Chase & Co..",
      "Created a new class to get an existing system up and running .",
      "Wrote a test suite for the class added.",
    ],
  },
  {
    title: "Package handler",
    company_name: "Pro Logistics ",
    icon: proLogistix,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Proficient in operating forklifts, reach trucks, and cherry pickers to efficiently handle and transport packages, ensuring timely and accurate processing in a fast-paced environment.",
      "Prioritize and adhere to strict safety protocols while using equipment, maintaining an incident-free record, and contributing to a secure work environment for all team members.",
    ],
  },
  {
    title: "Full Stack Software Developer",
    company_name: "Freelancing",
    icon: computer,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Successfully completed a MERN stack project for a client, demonstrating proficiency in JavaScript, React.js, Express.js, and MongoDB, resulting in a fully functional and user-friendly web application..",
      "Engaged in effective communication with a single client throughout the project, ensuring a clear understanding of requirements, timely updates, and delivering a tailored solution that met and exceeded client expectations.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/CjordanIII?tab=repositories",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/clarencejordaniii/",
  },
];

export const projects = [
  {
    iconUrl: computer,
    theme: "btn-back-red",
    name: "Todo's app",
    description:
      "This app uses React.js and keeps track of what you need to do.",
    link: "https://imaginative-genie-42e1b1.netlify.app/",
  },
  {
    iconUrl: computer,
    theme: "btn-back-green",
    name: "Dog tender",
    description:
      "Created a app lets you scroll between dogs and you get to choose which picture you like and do not like.One of my first projects.",
    link: "https://adorable-malasada-f81a6a.netlify.app/",
  },
  {
    iconUrl: computer,
    theme: "btn-back-blue",
    name: "Password Generator",
    description:
      "This app generate's a strong password you can copy and past to make your passwords more secure.One of my first projects.",
    link: "https://stellular-syrniki-9c8d6b.netlify.app/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Unit Conversion",
    description:
      "Built a conversion app so you can convert Metric to Imperial and back to Metric.One of my first projects.",
    link: "https://shimmering-axolotl-37e848.netlify.app/",
  },
  {
    iconUrl: computer,
    theme: "btn-back-black",
    name: "Oldgram",
    description:
      "Developed a front end display of a instagram like page.One of my first projects.",
    link: "https://quiet-semifreddo-6e92a1.netlify.app/",
  },
  {
    iconUrl: computer,
    theme: "btn-back-yellow",
    name: "Pong(still in development)",
    description:
      "App that mimics pong, still in the dev process one of my first projects.",
    link: "https://stunning-conkies-68011f.netlify.app/html/index.html",
  },
];