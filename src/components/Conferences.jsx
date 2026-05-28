function Conferences() {
  const conferences = [
    {
      title: "AI Surface Defect Detection",
      event: "Presented at ANQ 2025 Conference",
      category: "Computer Vision + Quality Analytics",
    },
    {
      title: "Fuel Cost Minimization in Multi-Delivery System",
      event: "Presented at ICB-AI 2025 Conference",
      category: "Optimization + Analytics",
    },
  ];

  return (
    <section className="section">
      <h2 className="section-title">International Conferences</h2>

      <p className="section-subtitle">
        Presented research-oriented technical work in international conference
        settings.
      </p>

      <div className="grid-2">
        {conferences.map((conf) => (
          <div className="card" key={conf.title}>
            <p className="small-label">{conf.category}</p>
            <h3 className="card-title">{conf.title}</h3>
            <p className="project-description">{conf.event}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Conferences;