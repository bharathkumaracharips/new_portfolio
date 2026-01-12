import { notFound } from 'next/navigation';
import ScrollExpandMedia from '@/components/ui/scroll-expand-media';
import { getProjectById, getAllProjects } from '@/lib/projects-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link href={`/services/${project.category}`}>
          <Button variant="secondary" className="rounded-full px-6">
            ← Back
          </Button>
        </Link>
      </div>

      <ScrollExpandMedia
        mediaType={project.mediaType}
        mediaSrc={project.mediaSrc}
        posterSrc={project.posterSrc}
        bgImageSrc={project.bgImageSrc}
        title={project.title}
        date={project.date}
        scrollToExpand="Scroll to expand"
        textBlend={true}
      >
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Project Description */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-foreground transition-colors duration-300">
              About the Project
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed transition-colors duration-300">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-foreground transition-colors duration-300">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-foreground transition-colors duration-300">
              Key Features
            </h3>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground transition-colors duration-300"
                >
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="pt-8 text-center">
            <Link href={`/services/${project.category}`}>
              <Button size="lg" className="rounded-full px-8">
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
