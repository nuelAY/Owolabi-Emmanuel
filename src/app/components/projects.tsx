import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Cardtonic Clone",
    description:
      "A clone or demo web version of a brand called Cadtonic which I was just using as practice",
    techStack: ["VS Code", "Swiper", "React", "Styled-components", "Framer"],
    image: "/image/project-img4.png",
    github: "https://github.com/nuelAY/Cardtonic-Clone",
    live: "https://cardtonic-clone-five.vercel.app/",
  },
  {
    title: "Store Dashboard",
    description:
      "A recognizable visual representation of a store dashboard, with a logo and charts to show sales and orders to show business output.",
    techStack: ["VS Code", "Tailwind Css", "React", "headless Ui"],
    image: "/image/project-img5.png",
    github: "https://github.com/nuelAY/Store-Dashboard",
    live: "https://store-dashboard-three.vercel.app/",
  },
  {
    title: "A Portfolio Template",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    techStack: ["VS Code", "HTML", "CSS", "JavaScript"],
    image: "/image/project-img2.png",
    github: "https://github.com/nuelAY/Portfilio-project",
    live: "http://portfilio-project.vercel.app/",
  },
  {
    title: "Owodex",
    description:
      "Owodex is a fully responsive web directory for money services that allows users to explore financial service providers in Nigeria. It serves as a listing platform for currency exchanges, showing verified vendors and contact options.",
    techStack: ["VS Code", "Tailwind CSS", "Next JS", "TypeScript", "Framer Motion", "ShadCN"],
    image: "/image/Owodex.png",
    github: "https://github.com/nuelAY/Owodex",
    live: "https://owodex.vercel.app/",
  },
  {
    title: "Cassidy FX",
    description:
      "Cassidy FX is a modern, responsive currency exchange platform frontend. It showcases the branding and marketing interface of a cross-border money transfer company with a focus on usability, motion design, and user trust.",
    techStack: ["VS Code", "React", "Next JS", "Typescrpt", "Tailwind CSS", "Framer Motion"],
    image: "/image/Cassidy.png",
    github: "https://github.com/nuelAY/Cassidy-fx",
    live: "https://cassidy-fx.vercel.app/",
  },
  {
    title: "A Blog App",
    description:
      "A full-stack blogging platform where users can create, edit, delete, and view blog posts. It features authentication, RESTful APIs, and a functional admin/user interface.",
    techStack: ["VS Code", "React/Next Js", "Tailwind CSS", "Redux/Redux toolkit", "Express js", "Mongo DB", "JWT"],
    image: "/image/Blog.png",
    github: "https://github.com/nuelAY/Blog-App",
    live: "https://blog-app-ten-rho-74.vercel.app/",
  },
];

const ProjectCard: React.FC = () => {
  return (
    <section className="bg-[#0A192F] text-white py-16 px-6 md:px-12" id='work'>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-10">
          <h2 className="text-2xl sm:text-3xl text-[#64ffda] font-mono">
            03. <span className="text-[#ccd6f6] font-sans font-bold">Some Things I&apos;ve Built</span>
          </h2>
          <hr className="hidden md:block w-40 sm:w-60 border-t border-gray-600 ml-5" />
        </div>

        {/* Project Cards */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2">
                <div className="bg-teal-600/20 hover:bg-transparent rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="opacity-80 hover:opacity-100 transition"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="md:w-1/2 space-y-4 p-4 text-gray-300">
                <p className="text-[#64ffda] font-mono text-sm">Featured Project</p>
                <h3 className="text-2xl font-bold text-[#ccd6f6]">{project.title}</h3>

                <div className="bg-[#112240] p-4 rounded-lg shadow-lg">
                  <p>{project.description}</p>
                </div>

                {/* Tech Stack */}
                <p className="text-gray-400 text-sm font-mono">{project.techStack.join(" • ")}</p>

                {/* Icons */}
                <div className="flex gap-4 text-[#ccd6f6] text-xl">
                  <a href={project.github} className="hover:text-[#64ffda] transition">
                    <FaGithub />
                  </a>
                  <a href={project.live} className="hover:text-[#64ffda] transition">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
