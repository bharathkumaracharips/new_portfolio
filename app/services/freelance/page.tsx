import { Carousel } from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CinematicThemeSwitcher from "@/components/ui/cinematic-theme-switcher";
import { freelanceProjects } from "@/lib/projects-data";

export default function FreelancePage() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Theme Switcher - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <CinematicThemeSwitcher />
      </div>

      {/* Navbar */}
      <nav className="fixed top-10 left-1/2 -translate-x-1/2 z-40">
        <Link href="/#work-section">
          <Button variant="secondary" className="rounded-full px-6">
            ← Back to Portfolio
          </Button>
        </Link>
      </nav>

      <div className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4 transition-colors duration-300">
              Freelance Projects
            </h1>
            <p className="text-xl text-muted-foreground transition-colors duration-300">
              Custom Solutions, Contract Work, and Project-Based Development
            </p>
          </div>

          <Carousel
            slides={freelanceProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="block h-96 w-full relative overflow-hidden rounded-md bg-card text-card-foreground transition-colors duration-300 group cursor-pointer"
              >
                <div className="w-full h-full overflow-hidden relative">
                  <Image
                    src={project.mediaSrc}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300">{project.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          />
        </div>
      </div>
    </div>
  );
}
