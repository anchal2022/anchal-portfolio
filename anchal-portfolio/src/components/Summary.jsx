function Summary() {
  const highlights = [
    "20+ Projects Built",
    "5+ Analytics Dashboards",
    "5 Hackathons",
    "2 International Conference Presentations",
    "1 Published Research Paper",
    "NPTEL Certified",
  ];

  return (
    <section id="summary" className="section">
      <h2 className="section-title">Who I Am</h2>

      <p className="section-subtitle">
        I am a 3rd-year B.E. Industrial Engineering and Management student at RV College of Engineering, Bengaluru, focused on building data-driven and AI-powered solutions across analytics, product insights, machine learning, and decision support.
      </p>

      <div className="summary-box">
        <p>
        My work focuses on converting raw data into actionable business insights using SQL, Python, Power BI, Excel, and machine learning. I enjoy building analytics dashboards, AI systems, digital twin prototypes, and research-oriented solutions for real-world problems.
        </p>
      </div>

      <div className="stats-grid">
        {highlights.map((item) => (
          <div className="stat-card" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Summary;