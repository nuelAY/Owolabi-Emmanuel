'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const fullText = "Owolabi Emmanuel.";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && index < fullText.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, index + 1));
        setIndex(index + 1);
      }, 150);
    } else if (!isDeleting && index === fullText.length) {
      // Wait before starting to delete or reset
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 3000); // Wait 3 seconds after full name is shown
    } else if (isDeleting && index > 0) {
      // Deleting (optional, but requested "effect take place again", 
      // usually implies it disappears then reappears)
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, index - 1));
        setIndex(index - 1);
      }, 50);
    } else if (isDeleting && index === 0) {
      // Finished deleting, start typing again
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullText]);

  return (
    <section className="h-screen flex flex-col justify-center items-center md:items-start bg-[#0A192F] text-white px-6 sm:px-8 md:px-16 lg:px-24 text-center md:text-left">
      <p className="text-[#64ffda] text-sm sm:text-lg font-mono">Hi, my name is</p>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#ccd6f6] mt-5 mb-5 h-[1.2em] flex items-center justify-center md:justify-start">
        {displayText}
        <span className="animate-pulse ml-1">|</span>
      </h1>

      <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#495670] mt-2">
        I build things for the web.
      </h2>

      <p className="text-[#8892b0] font-semibold max-w-lg sm:max-w-xl mt-4">
        I&apos;m a Nigeria-based software engineer who specializes in building
        (and occasionally designing) exceptional digital experiences.
        Currently, I&apos;m an engineer at <span className="text-[#64ffda]">Instant Fiber</span> focused on
        building accessible, human-centered products.
      </p>

      <Link
        href="#contact"
        className="mt-6 border-2 border-[#64ffda] text-[#64ffda] font-bold px-5 py-3 rounded-md 
        hover:border-[#64ffda] hover:bg-[#64ffda] hover:text-[#0A192F] transition duration-300 ease-in-out"
      >
        Get In Touch
      </Link>
    </section>
  );
};

export default HeroSection;
