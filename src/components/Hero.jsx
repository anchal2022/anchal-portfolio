function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-tag">Data Analytics • AIML • Research • Product Analytics</p>

        <h1>
          Hi, I’m <span>Anchal Karanani</span>
        </h1>

        <h2>Data Analyst | Business Analytics | AIML Enthusiast</h2>

        <p className="hero-description">
          I build data-driven and AI-powered solutions for business, product,
          and engineering problems using Python, SQL, Power BI, Machine Learning,
          and modern web technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

         

          <a
            href="https://github.com/anchal2022"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/anchal-karanani-4037a81ba"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-card">
        <h3>Professional Focus</h3>
        <ul>
          <li>Data Analytics & Business Intelligence</li>
          <li>Product Analytics & KPI Dashboards</li>
          <li>Machine Learning & AI Systems</li>
          <li>Digital Twin & Research Projects</li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;