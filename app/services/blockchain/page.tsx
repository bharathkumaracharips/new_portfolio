import { Carousel } from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CinematicThemeSwitcher from "@/components/ui/cinematic-theme-switcher";

export default function BlockchainPage() {
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
              Blockchain Development
            </h1>
            <p className="text-xl text-muted-foreground transition-colors duration-300">
              Smart Contracts, DApps, and Web3 Solutions
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
                    src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop"
                    alt="Smart Contract Development"
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
                    src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop"
                    alt="DApp Development"
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
                    src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=800&h=600&fit=crop"
                    alt="Web3 Integration"
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
