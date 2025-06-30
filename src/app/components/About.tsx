import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const technologies = ["JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "Flask", "React Native", "Express Js", "Mongo DB", "Redux", "Expo", "ShadCN", "Framer Motion"];

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutSection: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 px-6 sm:px-12 md:px-24"
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Left Side - Text */}
      <motion.div className="md:w-2/3 font-semibold text-center md:text-left" variants={slideUp}>
        <div className="flex items-center justify-center md:justify-start">
          <h2 className="text-2xl sm:text-3xl text-[#64ffda] mb-6 font-mono">
            01. <span className="text-[#ccd6f6] font-sans font-bold">About Me</span>
          </h2>
          <hr className="hidden md:block w-40 sm:w-60 border-t-1 border-gray-600 ml-5 mb-6" />
        </div>

        <p className="text-[#8892b0] mt-4">
          Hello! My name is Manuel and I enjoy creating things that live on the internet. My interest in web development started back in
          2018 when I decided to try creating a basic landing page — turns out creating tables and buttons taught me a lot about
          HTML & CSS!
        </p>
        <p className="text-[#8892b0] mt-4">
          Fast-forward to today, and I’ve had the privilege of working at{" "}
          <span className="text-[#64ffda]">a Fiber Optics Company</span>, <span className="text-[#64ffda]">a start-up</span>,{" "}
          <span className="text-[#64ffda]">a service rendering mobile company</span>, and <span className="text-[#64ffda]">an already existing company I joined</span>.
          My main focus these days is building accessible, inclusive products and digital experiences at{" "}
          <span className="text-[#64ffda]">Instant Fiber</span> for users while honing other skills like python to get better at.
        </p>

        {/* Tech Stack */}
        <h3 className="text-lg sm:text-xl font-semibold text-[#8892b0] mt-6">Here are a few technologies I’ve been working with:</h3>
        <ul className="grid grid-cols-2 gap-2 text-[#8892b0] mt-4">
          {technologies.map((tech, index) => (
            <motion.li
              key={index}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <FaArrowRight className="inline-block mr-2 text-[#64ffda]" />
              {tech}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 border-2 border-[#64ffda] rounded-lg overflow-hidden"
        variants={slideUp}
      >
        <motion.div
          className="w-full h-full object-cover"
          initial={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Image src="/image/header-img.gif" alt="Manuel's Profile" width={320} height={300} className="rounded-lg" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
