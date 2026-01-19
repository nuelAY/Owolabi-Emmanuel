"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RotatingLogo from "./RotatingLogo";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="font-mono"
  >
    <Link href={href} className="text-[#495670] hover:text-[#64ffda] mt-2" onClick={onClick}>
      {children}
    </Link>
  </motion.div>
);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 opacity-100 shadow-lg backdrop-blur-md font-mono">
      <div
        className="container mx-auto px-4 py-4 flex justify-between items-center shadow-md"
        style={{
          fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace",
        }}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <RotatingLogo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 ">
          <div className="md:flex md:mt-2 space-x-6">
            <NavLink href="#about">
              <span className="text-[#64ffda]">01.</span> About
            </NavLink>
            <NavLink href="#experience">
              <span className="text-[#64ffda]">02.</span> Experience
            </NavLink>
            <NavLink href="#work">
              <span className="text-[#64ffda]">03.</span> Work
            </NavLink>
            <NavLink href="#contact">
              <span className="text-[#64ffda]">04.</span> Contact
            </NavLink>
          </div>

          <a
            href="https://drive.google.com/file/d/1Sz4RRdw_yWLG1nb_rQPGikSe2xbU-jjd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#64ffda] text-[#64ffda] px-4 py-2 rounded-md hover:border-r-4 hover:border-b-4 transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.4 }}
            className="md:hidden flex flex-col items-center space-y-4 py-4 bg-[#0a192f] shadow-md font-mono"
          >
            <NavLink href="#about" onClick={() => setIsOpen(false)}>
              <span className="text-[#64ffda]">01.</span> About
            </NavLink>
            <NavLink href="#experience" onClick={() => setIsOpen(false)}>
              <span className="text-[#64ffda]">02.</span> Experience
            </NavLink>
            <NavLink href="#work" onClick={() => setIsOpen(false)}>
              <span className="text-[#64ffda]">03.</span> Work
            </NavLink>
            <NavLink href="#contact" onClick={() => setIsOpen(false)}>
              <span className="text-[#64ffda]">04.</span> Contact
            </NavLink>
            <a
              href="https://docs.google.com/document/d/11t-ElV68LUkbeu49Yd_aCnYnsLqiA6KG/edit?usp=drive_link&ouid=105508305897099251837&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#64ffda] text-[#64ffda] px-4 py-2 rounded-md hover:border-r-4 hover:border-b-4 transition-all duration-300"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
