"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/nav";
import AboutSection from "./components/About";
import SocialLinks from "./components/socials";
import HeroSection from "./components/hero";
import JobExperience from "./components/works";
import ProjectCard from "./components/projects";
import NoteworthyProjects from "./components/other-projects";
import Footer from "./components/footer";

export default function Home() {


  const slideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div>
      <Navbar />
      <SocialLinks />
      <main className="container mx-auto px-11 py-8">
        {/* Hero Section */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <HeroSection />
        </motion.div>

        {/* About Section */}
        <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        >
        <AboutSection />
        </motion.div>

        {/* Job Experience */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <JobExperience />
        </motion.div>

        {/* Project Card */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ProjectCard />
        </motion.div>

        {/* Noteworthy Projects */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <NoteworthyProjects />
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Footer />
        </motion.div>
      </main>
    </motion.div>
  );
}
