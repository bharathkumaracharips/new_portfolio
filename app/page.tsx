'use client';

import { useEffect, useState, useRef } from 'react';
import PortfolioHero from '@/components/portfolio-hero';
import { Navbar } from '@/components/navbar';

export default function Home() {
  const [isHeroLocked, setIsHeroLocked] = useState(true);
  const [hasLeftHero, setHasLeftHero] = useState(false);
  const isScrollingProgrammatically = useRef(false);

  useEffect(() => {
    const handleScroll = (e: WheelEvent | Event) => {
      // Allow programmatic scrolling
      if (isScrollingProgrammatically.current) {
        return;
      }

      // If hero is locked, prevent all scrolling
      if (isHeroLocked) {
        e.preventDefault();
        return;
      }

      // If user has left hero and tries to scroll up past the work section
      if (hasLeftHero && !isHeroLocked) {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        
        // Prevent scrolling back to hero (within 50px of hero section)
        if (scrollPosition < viewportHeight + 50) {
          // If trying to scroll up (negative deltaY for wheel event)
          if (e instanceof WheelEvent && e.deltaY < 0) {
            e.preventDefault();
            isScrollingProgrammatically.current = true;
            window.scrollTo({ top: viewportHeight, behavior: 'smooth' });
            setTimeout(() => {
              isScrollingProgrammatically.current = false;
            }, 500);
          }
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent keyboard scrolling when hero is locked
      if (isHeroLocked && ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' ', 'Home'].includes(e.key)) {
        e.preventDefault();
      }
      
      // Prevent scrolling back to hero with keyboard
      if (hasLeftHero && !isHeroLocked && ['ArrowUp', 'PageUp', 'Home'].includes(e.key)) {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        
        if (scrollPosition < viewportHeight + 100) {
          e.preventDefault();
          isScrollingProgrammatically.current = true;
          window.scrollTo({ top: viewportHeight, behavior: 'smooth' });
          setTimeout(() => {
            isScrollingProgrammatically.current = false;
          }, 500);
        }
      }
    };

    const preventScrollToTop = () => {
      if (isScrollingProgrammatically.current) {
        return;
      }

      if (hasLeftHero && !isHeroLocked) {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        
        // Keep user from scrolling above work section
        if (scrollPosition < viewportHeight - 10) {
          isScrollingProgrammatically.current = true;
          window.scrollTo({ top: viewportHeight, behavior: 'smooth' });
          setTimeout(() => {
            isScrollingProgrammatically.current = false;
          }, 500);
        }
      }
    };

    if (isHeroLocked) {
      window.addEventListener('wheel', handleScroll, { passive: false });
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      
      if (hasLeftHero) {
        // Add listeners to prevent scrolling back to hero
        window.addEventListener('wheel', handleScroll, { passive: false });
        window.addEventListener('scroll', preventScrollToTop);
        window.addEventListener('keydown', handleKeyDown);
      }
    }

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', preventScrollToTop);
      document.body.style.overflow = 'auto';
    };
  }, [isHeroLocked, hasLeftHero]);

  const handleExploreClick = () => {
    setIsHeroLocked(false);
    setHasLeftHero(true);
    isScrollingProgrammatically.current = true;
    setTimeout(() => {
      const viewportHeight = window.innerHeight;
      window.scrollTo({ top: viewportHeight, behavior: 'smooth' });
      setTimeout(() => {
        isScrollingProgrammatically.current = false;
      }, 1000);
    }, 100);
  };

  const handleBackToHero = () => {
    setHasLeftHero(false);
    isScrollingProgrammatically.current = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsHeroLocked(true);
      isScrollingProgrammatically.current = false;
    }, 1000);
  };

  return (
    <div className="w-full scroll-smooth">
      <Navbar onBackToHero={handleBackToHero} isHeroLocked={isHeroLocked} />
      <div id="hero">
        <PortfolioHero onExploreClick={handleExploreClick} />
      </div>
      
      {/* Work section */}
      <section id="work-section" className="min-h-screen bg-muted/30 flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-4xl font-bold text-foreground">My Work</h2>
          <p className="text-muted-foreground mt-4">Projects and portfolio items would go here</p>
        </div>
      </section>
    </div>
  );
}
