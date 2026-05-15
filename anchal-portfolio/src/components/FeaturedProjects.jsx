import { featuredProjects } from "../data/projects";

function FeaturedProjects() {
  return (
    <section id="projects" className="section dark-section">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        Selected projects focused on data analytics, AIML, digital twin systems,
        product analytics, optimization, and real-world decision support.
      </p>

      <div className="grid-2">
        {featuredProjects.map((project) => (
          <div className="card project-card" key={project.title}>
            <p className="small-label">{project.category}</p>
            <h3 className="card-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            {project.caseStudy && (
              <div className="case-study">
                <strong>Problem:</strong> {project.caseStudy.problem}<br/>
                <strong>Solution:</strong> {project.caseStudy.solution}<br/>
                <strong>Result:</strong> {project.caseStudy.result}
              </div>
            )}

            <div className="badge-container">
              {project.tech.map((tech) => (
                <span className="badge" key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>}
              {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;