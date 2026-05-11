function Achievements() {
  const achievements = [
    {
      title: "Researchathon",
      description:
        "Built and presented Quality Transaction System at RVCE Bengaluru Coding Club.",
    },
    {
      title: "Hackathons",
      description:
        "Participated in Ctrl + Alt + Compete Hackathon at RVCE, AI Verse Hackathon 2025, and CraftNCode organized by IIIT Bhubaneswar.",
    },
    {
      title: "Certifications",
      description:
        "NPTEL Business Analytics & Decision Modeling using Python, Coursera Generative AI Primer, Coursera IBM Machine Learning with Python, and Jyesta Data Analytics.",
    },
  ];

  return (
    <section className="section dark-section">
      <h2 className="section-title">Achievements & Certifications</h2>

      <p className="section-subtitle">
        Highlights across competitions, hackathons, certifications, and
        research-oriented technical participation.
      </p>

      <div className="grid-3">
        {achievements.map((item) => (
          <div className="card" key={item.title}>
            <h3 className="card-title">{item.title}</h3>
            <p className="project-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;