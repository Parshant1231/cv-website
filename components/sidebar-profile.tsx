import type React from "react"
import Image from "next/image"
import { Mail, Phone, Calendar, MapPin } from "lucide-react"

interface SidebarProfileProps {
  name: string
  title: string
  email: string
  phone: string
  dob: string
  location: string
  socials: Array<{ icon: React.ReactNode; href: string }>
}

export default function SidebarProfile({ name, title, email, phone, dob, location, socials }: SidebarProfileProps) {
  return (
    <div className="h-full flex flex-col overflow-y-auto">
      <div className="flex flex-col items-center mb-8">
        <div className="w-32 h-32 bg-[#222] rounded-lg p-3 mb-4">
          <div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src="/img.jpeg" // Replace with your profile image path
              alt={`${name} avatar`}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white mb-1">{name}</h1>
        <p className="text-sm text-gray-400 bg-[#222] px-3 py-1 rounded-full">{title}</p>
      </div>

      <div className="border-t border-gray-800 pt-6 space-y-6 flex-1">
        <div className="flex items-center gap-3">
          <div className="text-[#6366f1]">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-gray-400">EMAIL</p>
            <p className="text-sm text-white">{email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-[#6366f1]">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-gray-400">PHONE</p>
            <p className="text-sm text-white">{phone}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-[#6366f1]">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-gray-400">DOB</p>
            <p className="text-sm text-white">{dob}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-[#6366f1]">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-gray-400">LOCATION</p>
            <p className="text-sm text-white">{location}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-6 flex gap-4 justify-center">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#222] text-gray-400 hover:text-[#6366f1] transition-colors"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  )
}
