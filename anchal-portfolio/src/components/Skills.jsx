import { skills } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="section dark-section">
      <h2 className="section-title">Skills</h2>

      <p className="section-subtitle">
        A structured skill set across data analytics, data science, machine
        learning, AI, business intelligence, databases, and deployment.
      </p>

      <div className="grid-3">
        {skills.map((skill) => (
          <div className="card" key={skill.title}>
            <h3 className="card-title">{skill.title}</h3>

            <div className="badge-container">
              {skill.items.map((item) => (
                <span className="badge" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;