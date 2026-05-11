import { moreProjects } from "../data/projects";

function MoreProjects() {
  return (
    <section className="section">
      <h2 className="section-title">More Projects</h2>

      <p className="section-subtitle">
        Additional projects across AI, analytics, forecasting, optimization,
        recommendation systems, computer vision, and research-based problem
        solving.
      </p>

      <div className="grid-3">
        {moreProjects.map((project) => (
          <div className="card mini-project-card" key={project.title}>
            <p className="small-label">{project.category}</p>

            <h3 className="mini-title">{project.title}</h3>

            <div className="badge-container">
              {project.tech.map((tech) => (
                <span className="badge" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MoreProjects;