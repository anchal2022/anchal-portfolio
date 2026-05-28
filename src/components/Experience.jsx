function Experience() {
  const experiences = [
    {
      role: "Data Analytics Trainee Intern",
      company: "Jyesta",
      points: [
        "Performed data cleaning, analysis, and reporting using Excel and Python to generate KPI-based business insights.",
        "Developed and updated Power BI dashboards to support business reporting, performance tracking, and decision-making.",
      ],
    },
    {
      role: "Manufacturing Internship",
      company: "Operations & Process Reporting",
      points: [
        "Supported operations and process reporting through Excel-based tracking and KPI summaries.",
        "Worked on quality, output, downtime, and production-related performance indicators.",
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>

      <p className="section-subtitle">
        Practical exposure in analytics, dashboarding, business reporting,
        process tracking, and KPI-based decision support.
      </p>

      <div className="grid-2">
        {experiences.map((exp) => (
          <div className="card" key={exp.role}>
            <p className="small-label">{exp.company}</p>
            <h3 className="card-title">{exp.role}</h3>

            <ul className="point-list">
              {exp.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;