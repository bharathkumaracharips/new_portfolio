import { Carousel } from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CinematicThemeSwitcher from "@/components/ui/cinematic-theme-switcher";

export default function ClassesPage() {
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
              Private & Public Classes
            </h1>
            <p className="text-xl text-muted-foreground transition-colors duration-300">
              Computer Science, Blockchain, and Web Development Training
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
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
                    alt="Online Classes"
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
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                    alt="Group Training"
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
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
                    alt="One-on-One Mentoring"
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
