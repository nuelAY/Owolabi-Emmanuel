import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <section
        id="contact"
        className="flex flex-col items-center py-20 bg-[#0a192f] text-white"
      >
        <p className="text-[#64ffda]  mb-6 cursor-pointer hover:underline font-mono">05. What&apos;s Next? </p>
        <h2 className="text-2xl md:text-7xl font-bold font-sans text-[#ccd6f6] mt-2">Get In Touch</h2>
        <p className="text-center text-[#8892b0] max-w-lg mt-4 mb-5">
            I’m currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <a
          href="mailto:nuelay99@gmail.com"
          rel="noopener noreferrer"
          className="border-2 border-[#64ffda;] text-[#64ffda;] px-4 py-2 rounded-md hover:border-r-4 hover:border-b-4"
        >
          Say Hello{" "}
        </a>
      </section>
      <footer className=" text-gray-500 text-sm text-center py-6">
          Designed & Built by Owolabi Emmanuel
          <div className="flex items-center justify-center mt-2 space-x-4">
            <span>⭐ 7,746</span>
            <span>🔄 3,884</span>
            <span>🛠️ 1,000</span>
          </div>
        </footer>
    </>
  );
};

export default Footer;
