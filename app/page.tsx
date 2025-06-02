"use client";

import { useState } from "react";
import AboutSection from "@/components/about-section";
import ResumeSection from "@/components/resume-section";
import PortfolioSection from "@/components/portfolio-section";
// import ContactSection from "@/components/contact-section";
import ServicesSection from "@/components/services-section";
import SideBar from "@/components/sidebar";
import {
  Mail,
  Phone,
  Calendar,
  Facebook,
  Linkedin,
  Instagram,
  ChevronLeft,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about Me");
  const [showTabletContacts, setShowTabletContacts] = useState(false);

  const renderSection = () => {
    switch (activeSection.toLowerCase()) {
      case "about":
        return <AboutSection />;
      case "resume":
        return <ResumeSection />;
      case "portfolio":
        return <PortfolioSection />;
      case "services":
        return <ServicesSection />;
      case "blog":
        return (
          <div className="min-h-[60vh]">
            <h2 className="text-3xl font-bold mb-6">Blog</h2>
            <p>Blog content coming soon...</p>
          </div>
        );
      // case "contact":
      //   return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  const TabletContactGrid = () => (
    <div
      className={`md:flex  will-change-transform flex-col gap-4 bg-[#1A1A1A] rounded-lg mt-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${
        showTabletContacts
          ? "max-h-[500px] opacity-100 visible p-4"
          : "max-h-0 opacity-0 invisible p-0"
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-stone-700 py-5">
        <div className="flex items-center gap-4 transition-opacity duration-300 delay-100">
          <Mail className="text-[#6366f1]" size={20} />
          <div>
            <p className="text-gray-400 text-sm">Email</p>
            <p className="text-white">your.email@example.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4 transition-opacity duration-300 delay-150">
          <Phone className="text-[#6366f1]" size={20} />
          <div>
            <p className="text-gray-400 text-sm">Phone</p>
            <p className="text-white">+1 234 567 890</p>
          </div>
        </div>
        <div className="flex items-center gap-4 transition-opacity duration-300 delay-200">
          <Calendar className="text-[#6366f1]" size={20} />
          <div>
            <p className="text-gray-400 text-sm">Availability</p>
            <p className="text-white">Mon-Fri, 9AM - 5PM</p>
          </div>
        </div>
        <div className="flex items-center gap-4 transition-opacity duration-300 delay-300">
          <Calendar className="text-[#6366f1]" size={20} />
          <div>
            <p className="text-gray-400 text-sm">Location</p>
            <p className="text-white">Badhal Uparli, Himachal Pradesh 177113</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start border-t border-stone-700 pt-4 transition-opacity duration-300 delay-400">
        <div className="flex gap-3">
          <Facebook
            className="text-[#9F9F9F] hover:text-stone-300 cursor-pointer transition-colors duration-200"
            size={20}
          />
          <Linkedin
            className="text-[#9F9F9F] hover:text-stone-300 cursor-pointer transition-colors duration-200"
            size={20}
          />
          <Instagram
            className="text-[#9F9F9F] hover:text-stone-300 cursor-pointer transition-colors duration-200"
            size={20}
          />
        </div>
      </div>
    </div>
  )

  return (
    <main className=" box-content flex-col md:flex-row min-h-screen max-sm:mx-0 sm:mx-15 mx-22 xl:mx-25 2xl:mx-65 xl:top-17  bg-[#111111] relative  text-[13px] md:text-[16px]  text-ellipsis duration-500">
      {/* Mobile & Tablet View - Top Header */}
      <div className="xl:hidden w-full bg-[#1a1a1a] p-5 sm:p-10 mt-2 sm:mt-16 mb-6 border border-[#383838] rounded-3xl">
        <div className="flex items-center gap-4">
          {/* Profile Image */}
          <div className="flex-shrink-0 w-16 h-16 md:w-26 md:h-26 bg-[#222] rounded-lg p-1">
            <div className="w-full h-full rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt={`${name} avatar`}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name & Title */}
          <div className="flex-1 min-w-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-medium  text-white truncate font-stretch-expanded">
              Parshant
            </h1>
            <p className="text-xs w-26 md:w-30 text-gray-400 bg-[#222] px-2 md:px-4 md:py-1 md:mt-4 rounded-md truncate mt-1">
              Web Developer
            </p>
          </div>

          {/* Contacts Button */}
          <button className="hidden md:block flex-shrink-0 text-xs bg-[#212122] relative bottom-18 left-10 text-[#6366F1] px-5 py-3 rounded-tr-3xl rounded-bl-xl text-sm hover:bg-[#333] transition-colors">
            <span
              className="hidden md:inline cursor-pointer transition-all duration-500 "
              onClick={() => {
                setShowTabletContacts(!showTabletContacts);
              }}
            >
              {showTabletContacts ? 'Hide Contacts' : 'Show Contacts'}
            </span>
          </button>
          {/* Toggle Button for Tablet View */}
          <button className="block md:hidden flex-shrink-0 text-xs bg-[#212122] relative bottom-9 left-5 sm:bottom-14 sm:left-10 text-[#6366F1] px-2 py-1 rounded-tr-3xl rounded-bl-xl text-sm hover:bg-[#333] transition-colors">
            <span onClick={() => setShowTabletContacts(!showTabletContacts)}>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  showTabletContacts ? "rotate-180" : "rotate-0"
                }`}
              />
            </span>
          </button>
        </div>
        {showTabletContacts && <TabletContactGrid />}
      </div>

      <div className="flex   lg:flex-row lg:mx-0 xl:mx-5  ">
        {/* Desktop Sidebar (Original Structure) */}
        <SideBar />

        {/* Main Content Area (Original Desktop Structure) */}
        <div className="  xl:flex-1 bg-[#1a1a1a] rounded-3xl pl-6   lg:overflow-auto shadow-md border border-[#383838] mb-23">
          <div className="flex justify-between md:flex-row gap-6">
            <div className="relative top-8 flex-none text-3xl font-bold text-white pb-18 rounded inline-block">
              <span className="border-b-5 border-indigo-800 pb-4">
                {activeSection.charAt(0).toUpperCase() +
                  activeSection.slice(1, 2)}
              </span>
              {activeSection.slice(2)}
            </div>

            <div>
              <div className="hidden  lg:flex justify-end px-4 mb-4 gap-5 rounded-bl-xl bg-darkgray shadow-xl/15">
                {[
                  "about Me",
                  "resume",
                  "portfolio",
                  "services",
                  "blog",
                  // "contact",
                ].map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`px-1 py-4 cursor-pointer ${
                      activeSection === section
                        ? "font-medium text-[#6366f1]"
                        : "text-white hover:text-gray-300 duration-400"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pr-6 mb-8 duration-500">{renderSection()}</div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-6 z-50  backdrop-blur-lg border-t border-[#383838] rounded-t-2xl">
        <div className="flex justify-center px-1">
          {["about", "resume", "portfolio", "services"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-4 text-base cursor-pointer duration-300 ${
                activeSection.toLowerCase() === section
                  ? "text-[#6366f1] "
                  : "hover:text-gray-400 text-white teA"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
