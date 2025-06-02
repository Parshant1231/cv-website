"use client";
import { BookOpen, ExternalLink } from "lucide-react";

export default function ResumeSection() {

  return (
    <div>
      {/* Download Resume Link */}
      <div className="my-4">
      </div>
      <div className="flex flex-col justify-end sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        
        <a
          href="https://drive.google.com/file/d/1tQ8sJ4W7PhhNcXXonkfqtDs7XyqvmaIF/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="flex items-center gap-2 bg-[#6366f1] hover:bg-[#4f46e5] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-100"><span> <ExternalLink className="w-5 h-5" /> </span>
          Resume
        </a>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {/* Education Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-[#6366f1]" />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="relative border-l border-gray-800 pl-8 space-y-10">
            <div className="relative">
              <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-[#6366f1]"></div>
              <h4 className="text-xl font-semibold text-white">
                Master of Computer Applications
              </h4>
              <p className="text-[#6366f1] mb-2">August 2024 — Ongoing</p>
              <p className="text-gray-400">
                Postgraduate studies in computer applications with a focus on
                software development.
                <br />
                Sant Baba Bhag Singh University | Punjab, India
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-[#6366f1]"></div>
              <h4 className="text-xl font-semibold text-white">
                Bachelor of Science (B.Sc) in Computer Science
              </h4>
              <p className="text-[#6366f1] mb-2">2021 — 2024</p>
              <p className="text-gray-400">
                Graduated with a strong foundation in computer science and
                programming concepts.
                <br />
                Govt College, Dhaliara | HP, India
              </p>
            </div>
{/* 
            <div className="relative">
              <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-[#6366f1]"></div>
              <h4 className="text-xl font-semibold text-white">
                Web Development Bootcamp
              </h4>
              <p className="text-[#6366f1] mb-2">2022 — 2023</p>
              <p className="text-gray-400">
                Intensive program focused on modern web development technologies
                including the MERN stack.
              </p>
            </div> */}

            <div className="relative">
              <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-[#6366f1]"></div>
              <h4 className="text-xl font-semibold text-white">High School</h4>
              <p className="text-[#6366f1] mb-2">2019 — 2021</p>
              <p className="text-gray-400">
                Completed high school with focus on computer science and
                mathematics.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        {/* <div>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-[#6366f1]" />
            <h3 className="text-2xl font-bold text-white">Experience</h3>
          </div>

          <div className="relative border-l border-gray-800 pl-8 space-y-10">
            <div className="relative">
              <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-[#6366f1]"></div>
              <h4 className="text-xl font-semibold text-white">
                MERN Stack Developer
              </h4>
              <p className="text-[#6366f1] mb-2">2023 — Present</p>
              <p className="text-gray-400">
                Working on full-stack web applications using MongoDB,
                Express.js, React, and Node.js. Building responsive and
                interactive user interfaces and RESTful APIs.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-[#6366f1]"></div>
              <h4 className="text-xl font-semibold text-white">
                Frontend Developer Intern
              </h4>
              <p className="text-[#6366f1] mb-2">2022 — 2023</p>
              <p className="text-gray-400">
                Developed and maintained responsive websites using React.js.
                Collaborated with UI/UX designers to implement modern user
                interfaces.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
