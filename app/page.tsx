import PortfolioHero from '@/components/portfolio-hero';
import { Navbar } from '@/components/navbar';

export default function Home() {
  return (
    <div className="w-full">
     
      <PortfolioHero />
       <Navbar />
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
