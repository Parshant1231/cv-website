"use client"

import { useState } from "react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  category: string
  image: string
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const categories = [
    { id: "all", label: "All" },
    { id: "web", label: "Web design" },
    { id: "app", label: "Applications" },
    { id: "mern", label: "MERN Stack" },
  ]

  const projects: Project[] = [
    { id: 1, title: "E-commerce Dashboard", category: "web", image: "/placeholder.svg?height=400&width=600" },
    { id: 2, title: "Social Media App", category: "app", image: "/placeholder.svg?height=400&width=600" },
    { id: 3, title: "Finance Tracker", category: "mern", image: "/placeholder.svg?height=400&width=600" },
    { id: 4, title: "Task Management System", category: "mern", image: "/placeholder.svg?height=400&width=600" },
    { id: 5, title: "Portfolio Website", category: "web", image: "/placeholder.svg?height=400&width=600" },
    { id: 6, title: "Chat Application", category: "app", image: "/placeholder.svg?height=400&width=600" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div>
      {/* <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-3 mb-8 inline-block">Portfolio</h2> */}

      <div className="flex gap-4 mb-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-4 py-1 rounded-md text-sm transition-colors ${
              activeFilter === category.id ? "bg-[#6366f1] text-white" : "bg-[#222] text-gray-400 hover:text-white"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden rounded-lg">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
              <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
              <p className="text-sm text-[#6366f1]">{categories.find((c) => c.id === project.category)?.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
