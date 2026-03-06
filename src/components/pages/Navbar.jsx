import { useEffect, useState } from "react";
import { SiLinuxserver } from "react-icons/si";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;

      for (const { id, label } of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop) {
          setActiveSection(label);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full top-0 z-50 h-16 flex items-center justify-between px-6 sm:px-20 border-b border-white/[0.06] bg-[#070b14]/80 backdrop-blur-md">
      <SiLinuxserver
        data-testid="logo-icon"
        size={26}
        className="text-indigo-400"
      />
      <span className="text-xs tracking-widest uppercase text-slate-500">
        {activeSection}
      </span>
    </div>
  );
}
