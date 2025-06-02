import { Code, Laptop, Database, Server } from "lucide-react";
import SkillsSection from "./skills-section";
// import TestimonialsSection from "./testimonials-section"

export default function AboutSection() {
  return (
    <div className="">
      {/* <h2 className="text-3xl font-bold text-white pb-3 mb-6 inline-block">
        <span className="text-[#6366f1] border-b-4 pb-1.5">#Abo</span>ut Me
      </h2> */}

      <div className="text-gray-300  space-y-6 ">
        <p>
          I'm a MERN Stack Developer from India, working in web development and
          software engineering. I enjoy turning complex problems into simple,
          beautiful and intuitive designs.
        </p>
        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way.
        </p>
      </div>

      <div className="mt-12 ">
        <h3 className="text-2xl font-bold text-white mb-6">What I'm Doing</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#222] p-6 rounded-md">
            <div className="flex gap-4 items-start">
              <div className="text-[#6366f1]">
                <Laptop className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Web Development
                </h4>
                <p className="text-gray-400">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#222] p-6 rounded-md">
            <div className="flex gap-4 items-start">
              <div className="text-[#6366f1]">
                <Server className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  REST API
                </h4>
                <p className="text-gray-400 ">
                  Node.js + Express backend with clean architecture. Features
                  JWT auth, rate-limiting, and Prisma integration for seamless
                  database operations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#222] p-6 rounded-md">
            <div className="flex gap-4 items-start">
              <div className="text-[#6366f1]">
                <Database className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Database
                </h4>
                <p className="text-gray-400">
                  PostgreSQL with Prisma ORM for efficient, type-safe database
                  operations. Scalable, ACID-compliant, and optimized for
                  performance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#222] p-6 rounded-md">
            <div className="flex gap-4 items-start">
              <div className="text-[#6366f1]">
                <Code className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  MERN Stack
                </h4>
                <p className="text-gray-400">
                  Full-stack application development using MongoDB, Express,
                  React, and Node.js.
                </p>
              </div>
            </div>
          </div>

          

        </div>
      </div>

      {/* Add Skills Section */}
      <SkillsSection />

      {/* Add Testimonials Section */}
      {/* <TestimonialsSection /> */}
    </div>
  );
}
