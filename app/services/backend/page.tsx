import { Carousel } from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CinematicThemeSwitcher from "@/components/ui/cinematic-theme-switcher";

export default function BackendPage() {
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
              Backend Systems
            </h1>
            <p className="text-xl text-muted-foreground transition-colors duration-300">
              Scalable APIs, Microservices, and Database Architecture
            </p>
          </div>

          <Carousel
            slides={[
              <div
                key={"1"}
                className="border h-96 w-full relative overflow-hidden rounded-md bg-card text-card-foreground transition-colors duration-300"
              >
                <div className="w-full h-full overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
                    alt="API Development"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>,
              <div
                key={"2"}
                className="border h-96 w-full relative overflow-hidden rounded-md bg-card text-card-foreground transition-colors duration-300"
              >
                <div className="w-full h-full overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop"
                    alt="Microservices"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>,
              <div
                key={"3"}
                className="border h-96 w-full relative overflow-hidden rounded-md bg-card text-card-foreground transition-colors duration-300"
              >
                <div className="w-full h-full overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                    alt="Database Design"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>,
            ]}
          />
        </div>
      </div>
    </div>
  );
}
