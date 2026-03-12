"use client";

import React, { useState } from "react";

interface JobDetail {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

const jobDetails: JobDetail[] = [
  {
    company: "Cardic",
    position: "React Native Developer",
    period: "December 2025 - Present",
    responsibilities: [
      "Engineered a modular 6-level KYC verification system integrating BVN and NIN verification, secure document uploads(Government IDs, Utility Bills), and persistent state logic to manage sequential compliance workflows.",
      "Built a digital asset trading interface for Gift Cards and Crypto with real-time pricing using a Live Rate Calculator and efficient data synchronization via RTK Query.",
      "Implemented real-time trade updates and in-app chat using Socket.io and Firebase Cloud Messaging, improving transaction transparency and user interaction. ",
      "Strengthened platform security by integrating biometric authentication (Fingerprint/FaceID) and secure local storage with MMKV and Encrypted Storage for sensitive data protection.",
      "Developed a high-performance mobile UI with React Native, responsive design systems, push notifications, referral features, and optimized navigation using React Navigation and Reanimated."
    ],
  },
  {
    company: "Product Studio",
    position: "Frontend Developer",
    period: "September 2025 - December 2025",
    responsibilities: [
      "Worked on the development of Bvndle LAAS(Loyalty as a service) by enabling performance enhancements and seamless UI/UX.",
      "Worked closely with UI/UX designers, backend developers, and product managers to align web features with user requirements and business goals.",
      "Leveraged Redux, ReduxTooklkit for efficient application state management, and also caching necessary datas when needed ,ensuring smooth and responsive user experiences.",
      "Improved developer clarity around RTK Query usage and API debugging",
    ],
  },
  {
    company: "Instant Fiber",
    position: "Software Engineer Intern",
    period: "April 2024 - June 2025",
    responsibilities: [
      "Deliver high-quality, robust production code for a diverse array of projects.",
      "Work alongside the lead engineer to lead research and development.",
      "Collaborate with designers, project managers, and engineers to create production-ready solutions.",
      " Worked on the mobile application with React Native and Python with frameworks like Gluestack, and also using Redux for API calls.",
    ],
  },
  // {
  //   company: "Warneo",
  //   position: "Associate Software Engineer",
  //   period: "April 2024 - January 2025",
  //   responsibilities: [
  //     " Worked  closely  alongside  senior  developers  to  develop  user-friendly  web  interfaces  for Warneo  which  is  an  online  marketplace  for  locating  vendors  for  different  services  that  need rendering.",
  //     "Optimized applications for performance and scalability.",
  //     "Collaborated  with  cross-functional  teams  (design,  backend)  to  deliver  a  cohesive  user experience.",
  //   ],
  // },
  {
    company: "The Intern Place",
    position: "Frontend Developer Volunteer",
    period: "June 2024 - December 2024",
    responsibilities: [
      "Built responsive web applications using modern JavaScript frameworks.",
      "Conducted code reviews and improved overall code quality.",
      "Collaborated with UX designers to create user-friendly interfaces.",
    ],
  },
];

const JobExperience: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobDetail>(jobDetails[0]);

  return (
    <div className="w-full px-6 sm:px-12 md:px-24 mt-24" id="experience">
      {/* Section Title */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <h2 className="text-2xl sm:text-3xl text-[#64ffda] mb-6 font-mono">
          02. <span className="text-[#ccd6f6] font-sans font-bold">Where I&apos;ve Worked</span>
        </h2>
        <hr className="hidden md:block w-40 sm:w-60 border-t border-gray-600 ml-5 md:mt-5" />
      </div>

      {/* Experience Content */}
      <div className="flex flex-col md:flex-row w-full text-gray-300">
        {/* Sidebar - Company List */}
        <div className="md:w-1/4 border-l-2 border-[#112240] space-y-2">
          {jobDetails.map((job) => (
            <button
              key={job.company}
              className={`w-full text-left py-3 px-4 font-mono text-sm sm:text-base transition-all duration-300 rounded-md focus:outline-none ${selectedJob.company === job.company
                  ? "bg-[#112240] text-[#64ffda] border-l-4 border-[#64ffda]"
                  : "hover:bg-[#112240] hover:text-[#64ffda]"
                }`}
              onClick={() => setSelectedJob(job)}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Job Details Section */}
        <div className="md:w-3/4 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-[#ccd6f6]">
            {selectedJob.position} <span className="text-[#64ffda]">@ {selectedJob.company}</span>
          </h2>
          <p className="text-[#495670] text-sm sm:text-md font-mono mb-4">{selectedJob.period}</p>
          <ul className="list-disc pl-5 space-y-2">
            {selectedJob.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-[#64ffda]">▸</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobExperience;
