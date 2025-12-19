import { useState } from 'react';

// Default project images
import projectConsultation from '@/assets/project-consultation.jpg';
import projectDesign from '@/assets/project-design.jpg';
import projectMarketing from '@/assets/project-marketing.jpg';
import projectSold from '@/assets/project-sold.jpg';
import projectHandover from '@/assets/project-handover.jpg';

interface Project {
  _id: string;
  name: string;
  description: string;
  image?: string;
}

const defaultProjects = [
  { _id: '1', name: 'Consultation', description: 'Project Name | Location', image: projectConsultation },
  { _id: '2', name: 'Design', description: 'Project Name | Location', image: projectDesign },
  { _id: '3', name: 'Marketing & Design', description: 'Project Name | Location', image: projectMarketing },
  { _id: '4', name: 'Consultation & Marketing', description: 'Project Name | Location', image: projectSold },
  { _id: '5', name: 'Consultation', description: 'Project Name | Location', image: projectHandover },
];

const ProjectsSection = () => {
  const [projects] = useState<Project[]>(defaultProjects);

  const getProjectImage = (project: Project, index: number) => {
    if (project.image && project.image.startsWith('http')) {
      return project.image;
    }
    const defaultImages = [projectConsultation, projectDesign, projectMarketing, projectSold, projectHandover];
    return project.image || defaultImages[index % defaultImages.length];
  };

  return (
    <section id="projects" className="py-20 bg-background relative">
      {/* Decorative line */}
      <div className="absolute left-1/2 bottom-0 w-0.5 h-20 bg-gradient-to-b from-primary/50 to-transparent" />
      <div className="absolute left-1/2 bottom-16 w-4 h-4 rounded-full bg-accent" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle">
            We know what buyers are looking for and suggest projects that will bring 
            clients top dollar for the sale of their homes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {projects.slice(0, 5).map((project, index) => (
            <div 
              key={project._id}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={getProjectImage(project, index)}
                  alt={project.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-primary font-semibold text-sm md:text-base mb-1">
                {project.name}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm mb-3">
                {project.description}
              </p>
              <button className="bg-accent text-accent-foreground px-4 py-2 rounded text-xs font-medium hover:bg-accent/90 transition-colors">
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
