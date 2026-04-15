import projects from '../store/portfolio.json';
import ProjectCard from './ProjectCard';

type Project = {
  project_name: string;
  image_url: string;
  description: string;
  source_link: string;
  live_link: string;
  tech_stack: string[];
};

const projectList = projects as Project[];

const Projects = () => (
  <section className="projects" id="projects">
    <p className="eyebrow reveal-up">PROJECTS</p>
    <h1 className="title projects-title">featured PROJECTS</h1>
    <p className="projects-para reveal-up">
      Deployed 50+ scalable websites and cross-platform mobile applications.
      Collaborated in 100+ projects with 30+ clients all around the world. Looking for next project/role.
    </p>
    <div className="projects-container">
      {projectList.map((project) => (
        <ProjectCard
          key={project.project_name}
          image={project.image_url}
          title={project.project_name}
          liveLink={project.live_link}
          description={project.description}
          stacks={project.tech_stack}
          sourceLink={project.source_link}
        />
      ))}
    </div>
  </section>
);

export default Projects;