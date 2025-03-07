import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialLinks: React.FC = () => {
  return (
    <>
      {/* Left Side Social Links */}
      <div className="fixed left-4 md:left-4 top-3/4 md:top-3/4 mt-5 transform -translate-y-1/2 flex flex-col space-y-6 md:space-y-8">
        {[
          {
            href: "https://github.com/nuelAY",
            icon: <FaGithub size={24} />,
            label: "GitHub",
          },
          {
            href: "https://www.linkedin.com/in/emmanuel-owolabi-870b28175",
            icon: <FaLinkedin size={24} />,
            label: "LinkedIn",
          },
          {
            href: "https://x.com/Aynuel99",
            icon: <FaTwitter size={24} />,
            label: "Twitter",
          },
          {
            href: "https://www.instagram.com/i_amnuel?igsh=OWd6cHVlcm50cjVs&utm_source=qr",
            icon: <FaInstagram size={24} />,
            label: "Instagram",
          },
        ].map(({ href, icon, label }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-[#495670] hover:text-[#64ffda] transition duration-300"
          >
            {icon}
          </a>
        ))}
        <div className="w-px h-40 bg-gray-700 mt-2 mx-auto"></div>
      </div>

      {/* Right Side Email */}
      <div className="fixed -right-10 md:-right-10 top-3/4 md:top-3/4 mt-12 md:mt-5 transform -translate-y-1/2 flex flex-col items-center space-y-6 md:space-y-8 text-[#495670]">
        <a
          href="mailto:nuelay99@gmail.com"
          className="rotate-90 mb-16 origin-center whitespace-nowrap hover:text-[#64ffda] transition duration-300"
          aria-label="Email"
        >
          nuelay99@gmail.com
        </a>
        <div className="w-px h-40 bg-gray-700 mx-auto"></div>
      </div>
    </>
  );
};

export default SocialLinks;
