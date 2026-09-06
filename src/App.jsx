import React from 'react';

const App = () => {
  return (
    <div style={styles.container}>
      {/* Background Glows */}
      <div style={styles.bgGlow1}></div>
      <div style={styles.bgGlow2}></div>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.logo}>Ahmed Alaa<span style={{ color: '#10b981' }}>.AI</span></div>
        <div style={styles.navLinks}>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#skills" style={styles.navLink}>Skills</a>
          <a href="#projects" style={styles.navLink}>Projects</a>
          <a href="#certs" style={styles.navLink}>Certifications</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.badge}>Data Scientist | AI Analyst</div>
        <h1 style={styles.heroTitle}>
          Empowering Business Decisions Through <br />
          <span style={styles.gradientText}>Strategic Data & Artificial Intelligence</span>
        </h1>
        <p style={styles.heroSub}>
          Building machine learning models, automating data extraction pipelines, and processing complex datasets into actionable insights.
        </p>
        <div style={styles.btnGroup}>
          <a href="https://github.com/ahmedalaa-jpg" target="_blank" rel="noreferrer" style={styles.primaryBtn}>
            GitHub Profile ↗
          </a>
          <a href="https://www.linkedin.com/in/ahmed-alaaـ" target="_blank" rel="noreferrer" style={styles.secondaryBtn}>
            LinkedIn ↗
          </a>
          <a href="mailto:ahmedalaakabo@gmail.com" style={styles.secondaryBtn}>
            Gmail ✉️
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <div style={styles.card}>
          <p style={styles.cardText}>
            Senior Computer Science & Mathematics student at Cairo University, specializing in data processing and artificial intelligence solutions. Experienced in data cleaning and analytics, engineering scalable data pipelines, and web scraping automation. Passionate about driving real business value by turning complex data into impactful, data-driven decisions.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.section}>
        <h2 style={styles.sectionTitle}>Technical Expertise</h2>
        <div style={styles.grid}>
          <div style={styles.skillCard}>
            <h3 style={styles.skillTitle}>Data Scientist & AI</h3>
            <p style={styles.skillDesc}>Data Cleaning, Feature Scaling, Data Pipeline Engineering, Machine Learning Fundamentals.</p>
          </div>
          <div style={styles.skillCard}>
            <h3 style={styles.skillTitle}>Programming & DB</h3>
            <p style={styles.skillDesc}>Python, SQL , PostgreSQL, java, HTML/CSS, React.</p>
          </div>
          <div style={styles.skillCard}>
            <h3 style={styles.skillTitle}>Automation & Scraping</h3>
            <p style={styles.skillDesc}>Scrapy, BeautifulSoup, Selenium.</p>
          </div>
          <div style={styles.skillCard}>
            <h3 style={styles.skillTitle}>Tools & Platforms</h3>
            <p style={styles.skillDesc}>Git/GitHub, VS Code, pgAdmin, Jupyter Notebooks, Kaggle, Firebase.</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>Featured Projects</h2>
        <div style={styles.projectsGrid}>
          <div style={styles.projectCard}>
            <div style={styles.projectTag}>Data Engineering</div>
            <h3 style={styles.projectTitle}>Near-Earth Objects Data Pipeline</h3>
            <p style={styles.projectDesc}>
              Engineered a complete data processing pipeline to clean, log, and scale massive datasets (Feature Scaling), transforming raw inputs into analytical CSV formats.
            </p>
            <a href="https://github.com/ahmedalaa-jpg" target="_blank" rel="noreferrer" style={styles.projectLink}>View Project ↗</a>
          </div>

          <div style={styles.projectCard}>
            <div style={styles.projectTag}>Web & Database</div>
            <h3 style={styles.projectTitle}>Yalla Class Academic System</h3>
            <p style={styles.projectDesc}>
              Designed and developed an academic tracking system to monitor student performance and attendance with real-time Firebase databases and interactive web interfaces.
            </p>
            <a href="https://github.com/ahmedalaa-jpg" target="_blank" rel="noreferrer" style={styles.projectLink}>View Project ↗</a>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certs" style={styles.section}>
        <h2 style={styles.sectionTitle}>Certifications & Milestones</h2>
        <div style={styles.card}>
          <ul style={styles.certList}>
            <li>🏆 <strong>Oracle AI Certification</strong> — Oracle</li>
            <li>📜 <strong>Sololearn Python Developer Certificate</strong> — Sololearn (Aug 2026)</li>
          </ul>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer style={styles.footer}>
        <p style={{ color: '#94a3b8', margin: '0 0 10px 0' }}>Have a project or job opportunity? Let's connect!</p>
        <h3 style={{ color: '#f8fafc', margin: '0 0 15px 0' }}>Ahmed Alaa Eldin</h3>
        <a href="mailto:ahmedalaakabo@gmail.com" style={styles.primaryBtn}>
          Get In Touch ✉️
        </a>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#090d16',
    color: '#f8fafc',
    minHeight: '100vh',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    padding: '0 20px',
    position: 'relative',
    overflow: 'hidden',
    direction: 'ltr',
  },
  bgGlow1: {
    position: 'absolute',
    top: '-120px',
    left: '-100px',
    width: '400px',
    height: '400px',
    background: 'rgba(16, 185, 129, 0.12)',
    filter: 'blur(140px)',
    borderRadius: '50%',
  },
  bgGlow2: {
    position: 'absolute',
    top: '350px',
    right: '-100px',
    width: '450px',
    height: '450px',
    background: 'rgba(6, 182, 212, 0.12)',
    filter: 'blur(160px)',
    borderRadius: '50%',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 0',
    maxWidth: '900px',
    margin: '0 auto',
    borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
  },
  logo: {
    fontSize: '1.3rem',
    fontWeight: '700',
    letterSpacing: '0.5px',
  },
  navLinks: {
    display: 'flex',
    gap: '24px',
  },
  navLink: {
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
  },
  hero: {
    textAlign: 'center',
    padding: '90px 20px 60px',
    maxWidth: '850px',
    margin: '0 auto',
  },
  badge: {
    display: 'inline-block',
    padding: '6px 16px',
    borderRadius: '20px',
    background: 'rgba(16, 185, 129, 0.1)',
    color: '#34d399',
    border: '1px solid rgba(16, 185, 129, 0.25)',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginBottom: '20px',
  },
  heroTitle: {
    fontSize: '2.4rem',
    lineHeight: '1.35',
    fontWeight: '800',
    marginBottom: '20px',
  },
  gradientText: {
    background: 'linear-gradient(90deg, #34d399, #22d3ee)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSub: {
    fontSize: '1.1rem',
    color: '#94a3b8',
    lineHeight: '1.7',
    marginBottom: '35px',
  },
  btnGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    padding: '12px 28px',
    background: 'linear-gradient(90deg, #059669, #0891b2)',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    boxShadow: '0 4px 20px rgba(5, 150, 105, 0.3)',
    display: 'inline-block',
  },
  secondaryBtn: {
    padding: '12px 24px',
    background: 'rgba(255, 255, 255, 0.03)',
    color: '#f8fafc',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  section: {
    maxWidth: '900px',
    margin: '0 auto 70px',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    marginBottom: '25px',
    fontWeight: '700',
    borderBottom: '2px solid #10b981',
    paddingBottom: '6px',
    display: 'inline-block',
  },
  card: {
    background: 'rgba(15, 23, 42, 0.6)',
    backdropFilter: 'blur(12px)',
    padding: '30px',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
  },
  cardText: {
    lineHeight: '1.8',
    color: '#cbd5e1',
    fontSize: '1rem',
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  skillCard: {
    background: 'rgba(15, 23, 42, 0.5)',
    padding: '24px',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.06)',
  },
  skillTitle: {
    color: '#34d399',
    marginTop: 0,
    marginBottom: '10px',
    fontSize: '1.05rem',
    fontWeight: '600',
  },
  skillDesc: {
    color: '#94a3b8',
    fontSize: '0.9rem',
    lineHeight: '1.6',
    margin: 0,
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '20px',
  },
  projectCard: {
    background: 'rgba(15, 23, 42, 0.6)',
    padding: '28px',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  projectTag: {
    fontSize: '0.75rem',
    color: '#22d3ee',
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: '0.5px',
    marginBottom: '10px',
  },
  projectTitle: {
    fontSize: '1.25rem',
    color: '#f8fafc',
    margin: '0 0 12px 0',
    fontWeight: '700',
  },
  projectDesc: {
    color: '#94a3b8',
    fontSize: '0.95rem',
    lineHeight: '1.65',
    margin: '0 0 20px 0',
  },
  projectLink: {
    color: '#34d399',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.9rem',
  },
  certList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    lineHeight: '2.5',
    color: '#cbd5e1',
    fontSize: '1rem',
  },
  footer: {
    textAlign: 'center',
    padding: '50px 0',
    borderTop: '1px solid rgba(255, 255, 255, 0.07)',
    maxWidth: '900px',
    margin: '0 auto',
  },
};

export default App;