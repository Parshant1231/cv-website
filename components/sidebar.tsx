import { Facebook, Instagram, Linkedin } from "lucide-react";
import SidebarProfile from "./sidebar-profile";

export default function SideBar() {
  return (
    <div className="hidden md:hidden  xl:block  mr-7 w-full md:block  md:w-64 md:sticky md:top-4 md:h-[calc(100vh-2rem)] md:self-start lg:w-68  xl:top-13 xl:h-200 bg-[#1a1a1a] rounded-3xl  p-6  overflow-auto border border-[#383838]">
      <SidebarProfile
        name="Parshant"
        title="MERN stack developer"
        email="parshant0011pk@gmail.com"
        phone="+91 78763-39596"
        dob="October 20, 2003"
        location="Parshant's Location"
        socials={[
          { icon: <Facebook className="w-4 h-4" />, href: "#" },
          { icon: <Instagram className="w-4 h-4" />, href: "#" },
          { icon: <Linkedin className="w-4 h-4" />, href: "#" },
        ]}
      />
    </div>
  );
}
