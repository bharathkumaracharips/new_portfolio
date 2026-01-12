'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowDown } from 'lucide-react';
import { Testimonial } from '@/components/ui/design-testimonial';

interface PortfolioHeroProps {
  name?: string;
  role?: string;
  profileImage?: string;
  skills?: string[];
  description?: string;
}

const PortfolioHero: React.FC<PortfolioHeroProps> = ({
  name = 'Alex Morgan',
  role = 'Blockchain & Backend Engineer',
  profileImage = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  skills = [
    'Solidity',
    'Smart Contracts',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'Web3',
    'Rust',
    'Go',
  ],
  description = 'I build secure, scalable blockchain solutions and robust backend systems. I offer private and public classes on CS and blockchain topics, take on freelance and contract projects, and am open to full-time blockchain roles. Let\'s create something exceptional together.',
}) => {
  const handleExploreClick = () => {
    const nextSection = document.querySelector('#work-section, #projects, #portfolio, section:not(:first-child)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4 py-8">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <Avatar className="relative h-28 w-28 border-4 border-background shadow-2xl">
              <AvatarImage src={profileImage} alt={name} className="object-cover" />
              <AvatarFallback className="text-3xl font-bold bg-primary text-primary-foreground">
                {name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Name */}
          <div className="space-y-1">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {name}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              {role}
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-3 py-1 text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>

          {/* What I Offer - Testimonials */}
          <div className="w-full max-w-5xl space-y-3">
            <h2 className="text-base font-semibold text-foreground text-center">What I Offer</h2>
            <Testimonial />
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <Button
              size="lg"
              onClick={handleExploreClick}
              className="group px-6 py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
