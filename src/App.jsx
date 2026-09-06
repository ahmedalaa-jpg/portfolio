import React from 'react';

const App = () => {
  return (
    <div style={styles.container}>
      {/* Background Glows */}
      <div style={styles.bgGlow1}></div>
      <div style={styles.bgGlow2}></div>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.logo}>Ahmed<span style={{ color: '#10b981' }}>.AI</span></div>
        <div style={styles.navLinks}>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#skills" style={styles.navLink}>Skills</a>
          <a href="#projects" style={styles.navLink}>Projects</a>
          <a href="#certs" style={styles.navLink}>Certifications</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.badge}>
          <span style={styles.badgeDot}></span> Data Scientist & AI Specialist
        </div>
        <h1 style={styles.heroTitle}>
          Empowering Business Decisions Through <br />
          <span style={styles.gradientText}>Strategic Data & Artificial Intelligence</span>
        </h1>
        <p style={styles.heroSub}>
          Building machine learning models, automating data extraction pipelines, and processing complex datasets into actionable insights.
        </p>
        <div style={styles.btnGroup}>
          <a href="https://github.com/ahmedalaa-jpg" target="_blank" rel="noreferrer" style={styles.primaryBtn}>
            <svg style={styles.btnIcon} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub Profile
          </a>
          <a href="https://www.linkedin.com/in/ahmed-alaaـ" target="_blank" rel="noreferrer" style={styles.secondaryBtn}>
            <svg style={styles.btnIcon} viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LinkedIn
          </a>
          <a href="mailto:ahmedalaakabo@gmail.com" style={styles.secondaryBtn}>
            <svg style={styles.btnIcon} viewBox="0 0 24 24" fill="currentColor"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-12 1.287v10h24v-10l-12 9.725-12-9.725z"/></svg>
            Gmail
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
            <h3 style={styles.skillTitle}>Data Science & AI</h3>
            <p style={styles.skillDesc}>Data Cleaning, Feature Scaling, Data Pipeline Engineering, Machine Learning Fundamentals.</p>
          </div>
          <div style={styles.skillCard}>
            <h3 style={styles.skillTitle}>Programming & DB</h3>
            <p style={styles.skillDesc}>Python, SQL, PL/SQL, HTML/CSS, React.</p>
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
            <div>
              <div style={styles.projectTag}>Data Engineering</div>
              <h3 style={styles.projectTitle}>Near-Earth Objects Data Pipeline</h3>
              <p style={styles.projectDesc}>
                Engineered a complete data processing pipeline to clean, log, and scale massive datasets (Feature Scaling), transforming raw inputs into analytical CSV formats.
              </p>
            </div>
            <a href="https://github.com/ahmedalaa-jpg" target="_blank" rel="noreferrer" style={styles.projectLink}>View Repository ↗</a>
          </div>

          <div style={styles.projectCard}>
            <div>
              <div style={styles.projectTag}>Web & Database</div>
              <h3 style={styles.projectTitle}>Yalla Class Academic System</h3>
              <p style={styles.projectDesc}>
                Designed and developed an academic tracking system to monitor student performance and attendance with real-time Firebase databases and interactive web interfaces.
              </p>
            </div>
            <a href="https://github.com/ahmedalaa-jpg" target="_blank" rel="noreferrer" style={styles.projectLink}>View Repository ↗</a>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certs" style={styles.section}>
        <h2 style={styles.sectionTitle}>Certifications & Milestones</h2>
        <div style={styles.card}>
          <ul style={styles.certList}>
            <li style={styles.certItem}>
              <span style={styles.certBadge}>Oracle</span>
              <strong>Oracle AI Certification</strong>
            </li>
            <li style={styles.certItem}>
              <span style={styles.certBadge}>Sololearn</span>
              <strong>Python Developer Certificate</strong> (Aug 2026)
            </li>
          </ul>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer style={styles.footer}>
        <p style={{ color: '#94a3b8', margin: '0 0 10px 0', fontSize: '1rem' }}>Have a project or job opportunity? Let's connect!</p>
        <h3 style={{ color: '#f8fafc', margin: '0 0 20px 0', fontSize: '1.4rem' }}>Ahmed Alaa Eldin</h3>
        <a href="mailto:ahmedalaakabo@gmail.com" style={styles.primaryBtn}>
          <svg style={styles.btnIcon} viewBox="0 0 24 24" fill="currentColor"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-12 1.287v10h24v-10l-12 9.725-12-9.725z"/></svg>
          Get In Touch
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
    top: '-150px',
    left: '-100px',
    width: '450px',
    height: '450px',
    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(0,0,0,0) 70%)',
    filter: 'blur(80px)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  bgGlow2: {
    position: 'absolute',
    top: '400px',
    right: '-100px',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(0,0,0,0) 70%)',
    filter: 'blur(90px)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 0',
    maxWidth: '900px',
    margin: '0 auto',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
  },
  logo: {
    fontSize: '1.4rem',
    fontWeight: '800',
    letterSpacing: '-0.5px',
  },
  navLinks: {
    display: 'flex',
    gap: '24px',
  },
  navLink: {
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'color 0.2s',
  },
  hero: {
    textAlign: 'center',
    padding: '100px 20px 70px',
    maxWidth: '850px',
    margin: '0 auto',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 16px',
    borderRadius: '30px',
    background: 'rgba(16, 185, 129, 0.08)',
    color: '#34d399',
    border: '1px solid rgba(16, 185, 129, 0.25)',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginBottom: '25px',
  },
  badgeDot: {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: '#34d399',
    boxShadow: '0 0 8px #34d399',
  },
  heroTitle: {
    fontSize: '2.6rem',
    lineHeight: '1.3',
    fontWeight: '800',
    marginBottom: '22px',
    letterSpacing: '-0.5px',
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
    marginBottom: '38px',
  },
  btnGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },
  btnIcon: {
    width: '18px',
    height: '18px',
  },
  primaryBtn: {
    padding: '12px 24px',
    background: 'linear-gradient(90deg, #059669, #0891b2)',
    color: '#fff',
    borderRadius: '10px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.95rem',
    boxShadow: '0 4px 20px rgba(5, 150, 105, 0.25)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  secondaryBtn: {
    padding: '12px 24px',
    background: 'rgba(255, 255, 255, 0.03)',
    color: '#f8fafc',
    borderRadius: '10px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.95rem',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backdropFilter: 'blur(10px)',
    transition: 'border-color 0.2s, background-color 0.2s',
  },
  section: {
    maxWidth: '900px',
    margin: '0 auto 80px',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    marginBottom: '28px',
    fontWeight: '700',
    borderBottom: '2px solid #10b981',
    paddingBottom: '8px',
    display: 'inline-block',
    letterSpacing: '-0.3px',
  },
  card: {
    background: 'rgba(15, 23, 42, 0.5)',
    backdropFilter: 'blur(12px)',
    padding: '32px',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
  },
  cardText: {
    lineHeight: '1.85',
    color: '#cbd5e1',
    fontSize: '1.02rem',
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  skillCard: {
    background: 'rgba(15, 23, 42, 0.4)',
    padding: '26px',
    borderRadius: '14px',
    border: '1px solid rgba(255, 255, 255, 0.06)',
  },
  skillTitle: {
    color: '#34d399',
    marginTop: 0,
    marginBottom: '12px',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '24px',
  },
  projectCard: {
    background: 'rgba(15, 23, 42, 0.5)',
    padding: '30px',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 4px 30px rgba(0,0,0,0.2)',
  },
  projectTag: {
    fontSize: '0.75rem',
    color: '#22d3ee',
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: '0.8px',
    marginBottom: '12px',
  },
  projectTitle: {
    fontSize: '1.3rem',
    color: '#f8fafc',
    margin: '0 0 12px 0',
    fontWeight: '700',
  },
  projectDesc: {
    color: '#94a3b8',
    fontSize: '0.95rem',
    lineHeight: '1.65',
    margin: '0 0 24px 0',
  },
  projectLink: {
    color: '#34d399',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.92rem',
    display: 'inline-flex',
    alignItems: 'center',
  },
  certList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  certItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#cbd5e1',
    fontSize: '1.02rem',
  },
  certBadge: {
    padding: '4px 10px',
    background: 'rgba(52, 211, 153, 0.1)',
    color: '#34d399',
    borderRadius: '6px',
    fontSize: '0.78rem',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  footer: {
    textAlign: 'center',
    padding: '60px 0',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    maxWidth: '900px',
    margin: '0 auto',
  },
};

export default App;