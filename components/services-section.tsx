import type React from "react"
import { Code, Database, Layout, Smartphone, Server, Globe } from "lucide-react"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

export default function ServicesSection() {
  const services: Service[] = [
    {
      icon: <Layout className="w-10 h-10" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using React.js and modern CSS frameworks.",
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Express, and RESTful APIs.",
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Database Design",
      description: "Designing and implementing efficient database schemas with MongoDB and Mongoose.",
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Full Stack Development",
      description: "End-to-end application development using the MERN (MongoDB, Express, React, Node.js) stack.",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Web Performance",
      description: "Optimizing web applications for speed, efficiency, and better user experience.",
    },
  ]

  return (
    <div className="mt-16">
      {/* <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-3 mb-8 inline-block">My Services</h2> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-[#222] p-6 rounded-lg hover:bg-[#2a2a2a] transition-colors">
            <div className="text-[#6366f1] mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
