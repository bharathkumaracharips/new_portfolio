"use client";

import React, { useState, useEffect } from "react";
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";

interface NavbarProps {
  onBackToHero: () => void;
  isHeroLocked: boolean;
}

export function Navbar({ onBackToHero, isHeroLocked }: NavbarProps) {
  const [active, setActive] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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

  // Don't show navbar when hero is locked
  if (!isVisible || isHeroLocked) return null;

  return (
    <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-[100] animate-in fade-in slide-in-from-top-5 duration-300">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <button onClick={onBackToHero} className="text-left text-muted-foreground hover:text-foreground transition-colors duration-300">
              Back to Hero
            </button>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services/blockchain">Blockchain Development</HoveredLink>
            <HoveredLink href="/services/backend">Backend Systems</HoveredLink>
            <HoveredLink href="/services/classes">Private & Public Classes</HoveredLink>
            <HoveredLink href="/services/freelance">Freelance Projects</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/opensource">Open Source Projects</HoveredLink>
            <HoveredLink href="/research">Research Papers</HoveredLink>
            <HoveredLink href="/blog">Tech Blog</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Reviews">
          <div className="flex flex-col space-y-4 text-sm">
            <button 
              onClick={() => {
                const reviewsSection = document.getElementById('reviews');
                if (reviewsSection) {
                  reviewsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-left text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Client Reviews
            </button>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <button 
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-left text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              View Pricing
            </button>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-left text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Request Quote
            </button>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-left text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Get in Touch
            </button>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-left text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Hire Me
            </button>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
