"use client";

import React, { useState, useEffect } from "react";
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar when scrolled past the hero section (viewport height)
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      if (scrollPosition > viewportHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 animate-in fade-in slide-in-from-top-5 duration-300">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#hero">Hero</HoveredLink>
            <HoveredLink href="#about">About</HoveredLink>
            <HoveredLink href="#testimonials">Testimonials</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#blockchain">Blockchain Development</HoveredLink>
            <HoveredLink href="#backend">Backend Systems</HoveredLink>
            <HoveredLink href="#classes">Private & Public Classes</HoveredLink>
            <HoveredLink href="#freelance">Freelance Projects</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Work">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#projects">Projects</HoveredLink>
            <HoveredLink href="#portfolio">Portfolio</HoveredLink>
            <HoveredLink href="#case-studies">Case Studies</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#contact">Get in Touch</HoveredLink>
            <HoveredLink href="#hire">Hire Me</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
