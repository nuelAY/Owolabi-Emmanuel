"use client"

import { FC, useState } from "react";
import { FaFolder, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const allProjects = [
  {
    title: "V1 Portfolio website",
    description:
      "Built a portfolio website with React using Bootstrap as the styling",
    tech: ["React", "Bootstrapo", "email js","Express Js"],
    externalLink: "https://my-work-portfolio-eight.vercel.app/",
    github: "https://github.com/nuelAY/My-WORK-Portfolio",
  },
  {
    title: "Github Finder App",
    description:
      "A single page web app for helping anyone search for a user on github without neccessarily going on github, built with React.js, Firebase, and Tailwind CSS",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
    externalLink: "http://github-finder-nuelay.vercel.app/",
    github: "https://github.com/nuelAY/Github-Finder",
  },
  {
    title: "Building my First React Native App from a John Traversy Tutorial",
    description:
      "I built a video blog app that allows for saving and creating videos for people to see with React Native, Expo, and Firebase.",
    tech: ["TypeScript", "React Native", "Expo"],
    externalLink: "",
    github: "https://github.com/P-Moriarty/Tut-App",
  },
  {
    title: "Playin Around with Python",
    description: "A quizzler app that generates and asks random questions in form of quizzes from a json data and creating the UI for Tkinter",
    tech: ["Python", "Tkinter"],
    externalLink: "",
    github: "https://github.com/P-Moriarty/quizzler-app-start",
  },
  {
    title: "Another Great App",
    description: "A mobile application built with React Native and Python",
    tech: ["React Native", "Typescript", "Python"],
    externalLink: "",
    github: "",
  },
];

const NoteworthyProjects: FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  return (
    <section className=" text-[#ccd6f6] py-16 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#ccd6f6]">Other Noteworthy Projects</h2>
        <p className="text-[#64ffda]  mb-6 cursor-pointer hover:underline font-mono">view the archive</p>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {allProjects.slice(0, visibleProjects).map((project, index) => (
            <div key={index} className="bg-[#112240] p-6 rounded-lg shadow-lg relative">
              <FaFolder className="text-[#ccd6f6]  hover:text-[#64ffda]   text-3xl" />
              <a href={project.externalLink} className="absolute top-6 right-6 text-[#ccd6f6]  hover:text-[#64ffda] transition">
                <FaExternalLinkAlt />
              </a>
              <h3 className="text-lg font-semibold mt-4 hover:text-[#64ffda]">{project.title}</h3>
              <p className="text-[#495670] text-sm mt-2">{project.description}</p>
              <div className="text-gray-500 text-xs mt-4 flex gap-2 flex-wrap">
                {project.tech.map((tech, i) => (
                  <span key={i} className="font-mono">{tech}</span>
                ))}
              </div>
              <div className="absolute bottom-6 right-6 flex gap-4 text-lg">
                <a href={project.github} className="text-[#ccd6f6]  hover:text-[#64ffda]  transition">
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
        <a className="border-2 border-[#64ffda;] text-[#64ffda;] px-4 py-2 rounded-md hover:border-r-4 hover:border-b-4">
          {visibleProjects < allProjects.length ? (
            <button
              className="text-[#64ffda] "
              onClick={() => setVisibleProjects(allProjects.length)}
            >
              Show More
            </button>
          ) : (
            <button
              className="text-[#64ffda] "
              onClick={() => setVisibleProjects(3)}
            >
              Show Less
            </button>
          )}
        </a>
      </div>
    </section>
  );
};

export default NoteworthyProjects;
