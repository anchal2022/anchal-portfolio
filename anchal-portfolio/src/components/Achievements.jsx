function Achievements() {
  const achievements = [
    {
      title: "BMSCE Ideathon — 2nd Prize",
      description:
        "Secured 2nd Prize in the Ideathon organized at BMS College of Engineering by presenting an innovative solution idea.",
    },
    {
      title: "Ctrl + Alt + Compete Hackathon",
      description:
        "Built and presented a Smart JEE College Predictor and Exam Recommendation System to help students make better college and exam preparation decisions.",
    },
    {
      title: "Researchathon",
      description:
        "Built and presented the Quality Transaction System at RVCE Bengaluru Coding Club in a research-focused competition setting.",
    },
    {
      title: "Hackathons",
      description:
        "Participated in AI Verse Hackathon 2025, a 72-hour national-level online hackathon organized by Augment.AI Club, BMS College of Engineering, and CraftNCode organized by IIIT Bhubaneswar.",
    },
    {
      title: "NPTEL Certification",
      description:
        "Completed NPTEL certification in Business Analytics & Decision Modeling using Python, strengthening analytics, decision-making, and Python-based business problem-solving skills.",
    },
    {
      title: "Coursera Certifications",
      description:
        "Completed Coursera certifications including Generative AI Primer by Vanderbilt University and Machine Learning with Python by IBM.",
    },
    {
      title: "Data Analytics Certification",
      description:
        "Completed Jyesta Data Analytics certification with hands-on exposure to Excel, Python, Power BI dashboards, KPI reporting, and business insights.",
    },
  ];

  return (
    <section className="section dark-section">
      <h2 className="section-title">Achievements & Certifications</h2>

      <p className="section-subtitle">
        Highlights across ideathons, hackathons, research-focused competitions,
        certifications, and technical participation.
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