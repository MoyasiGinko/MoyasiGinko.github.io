type ProjectCardProps = {
  image: string;
  title: string;
  liveLink: string;
  description: string;
  stacks: string[];
  sourceLink: string;
};

const ProjectCard = ({ image, title, liveLink, description, stacks, sourceLink }: ProjectCardProps) => (
  <article className="project-card">
    {sourceLink && sourceLink !== 'N/A' ? (
      <a
        className="project-source"
        href={sourceLink}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open source code for ${title}`}
      >
        ↗
      </a>
    ) : null}
    <img src={image} alt={title} />
    <div className="card-description">
      <h3>{title}</h3>
      <a className="live-prv" href={liveLink} target="_blank" rel="noreferrer">
        Live Preview
      </a>
      <p>{description}</p>
      <div className="stacks">
        {stacks.map((stack) => (
          <span className="tech-stack" key={`${title}-${stack}`}>
            {stack}
          </span>
        ))}
      </div>
    </div>
  </article>
);

export default ProjectCard;