import React, { useState } from 'react';

const App = () => {
  const [activeSkillTab, setActiveSkillTab] = useState('all');

  const skillsData = [
    { name: 'Data Cleaning', category: 'ai', icon: '🧹' },
    { name: 'Feature Scaling', category: 'ai', icon: '⚖️' },
    { name: 'Data Pipeline Eng.', category: 'ai', icon: '⚙️' },
    { name: 'Machine Learning', category: 'ai', icon: '🤖' },
    { name: 'Python', category: 'code', icon: '🐍' },
    { name: 'Java', category: 'code', icon: '☕' },
    { name: 'SQL & PL/SQL', category: 'code', icon: '🗄️' },
    { name: 'React & JavaScript', category: 'code', icon: '⚛️' },
    { name: 'HTML5 & CSS3', category: 'code', icon: '🎨' },
    { name: 'Scrapy & BeautifulSoup', category: 'scraping', icon: '🕷️' },
    { name: 'Selenium Automation', category: 'scraping', icon: '🌐' },
    { name: 'Git & GitHub', category: 'tools', icon: '🐙' },
    { name: 'pgAdmin & PostgreSQL', category: 'tools', icon: '🐘' },
    { name: 'Jupyter & Kaggle', category: 'tools', icon: '📊' },
    { name: 'Firebase', category: 'tools', icon: '🔥' },
  ];

  const filteredSkills = activeSkillTab === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeSkillTab);

  return (
    <div className="portfolio-app-root">
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          background-color: #050811;
          color: #f3f4f6;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          overflow-x: hidden;
          line-height: 1.6;
        }
        .portfolio-app-root {
          min-height: 100vh;
          background: 
            radial-gradient(circle at 15% 15%, rgba(16, 185, 129, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 85% 35%, rgba(6, 182, 212, 0.12) 0%, transparent 45%),
            radial-gradient(circle at 50% 85%, rgba(59, 130, 246, 0.08) 0%, transparent 50%);
          padding: 20px 16px 60px;
          position: relative;
        }
        .container {
          max-width: 1040px;
          margin: 0 auto;
        }

        /* Navigation Bar */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 28px;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
          margin-bottom: 36px;
          position: sticky;
          top: 16px;
          z-index: 100;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .nav-brand {
          font-size: 1.25rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 10px;
          letter-spacing: -0.5px;
        }
        .brand-dot {
          width: 9px;
          height: 9px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 12px #10b981;
        }
        .nav-links {
          display: flex;
          gap: 20px;
        }
        .nav-link {
          color: #9ca3af;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: color 0.25s ease;
        }
        .nav-link:hover {
          color: #34d399;
        }

        /* Bento Grid System */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 20px;
          margin-bottom: 36px;
        }
        .bento-card {
          background: rgba(15, 23, 42, 0.55);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 28px;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .bento-card:hover {
          border-color: rgba(52, 211, 153, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
        }

        /* Hero Card */
        .card-hero {
          grid-column: span 8;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34d399;
          border-radius: 30px;
          font-size: 0.82rem;
          font-weight: 700;
          margin-bottom: 16px;
          width: fit-content;
        }
        .badge-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 10px #34d399;
        }
        .hero-title {
          font-size: 2.1rem;
          font-weight: 800;
          line-height: 1.25;
          margin-bottom: 14px;
          letter-spacing: -0.5px;
        }
        .text-gradient {
          background: linear-gradient(135deg, #34d399 0%, #22d3ee 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-sub {
          color: #9ca3af;
          font-size: 1rem;
          line-height: 1.6;
        }

        /* Stats Card */
        .card-profile {
          grid-column: span 4;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .profile-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
        }
        .avatar-box {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: linear-gradient(135deg, #10b981, #06b6d4);
          color: #030712;
          font-weight: 900;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .stat-box {
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 12px;
          border-radius: 14px;
        }
        .stat-num {
          font-size: 1.35rem;
          font-weight: 800;
          color: #34d399;
        }
        .stat-lbl {
          font-size: 0.75rem;
          color: #9ca3af;
          font-weight: 500;
        }

        /* Action Buttons Bar */
        .card-cta-bar {
          grid-column: span 12;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding: 20px 28px;
        }
        .cta-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .btn-action {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 12px;
          font-size: 0.88rem;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-primary {
          background: linear-gradient(90deg, #059669, #0891b2);
          color: #ffffff;
          box-shadow: 0 4px 18px rgba(5, 150, 105, 0.3);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(5, 150, 105, 0.45);
        }
        .btn-glass {
          background: rgba(255, 255, 255, 0.04);
          color: #f3f4f6;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .btn-glass:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(52, 211, 153, 0.4);
          transform: translateY(-2px);
        }
        .btn-svg {
          width: 18px;
          height: 18px;
          fill: currentColor;
        }

        /* About & Skills */
        .card-about {
          grid-column: span 12;
        }
        .card-skills {
          grid-column: span 12;
        }
        .card-title-group {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .card-title-icon {
          color: #34d399;
          font-size: 1.1rem;
        }
        .card-title-text {
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.3px;
        }
        .about-text {
          color: #9ca3af;
          font-size: 0.95rem;
          line-height: 1.7;
        }

        /* Filter Tabs */
        .skills-tab-group {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .tab-btn {
          padding: 5px 14px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          color: #9ca3af;
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .tab-btn.active {
          background: rgba(16, 185, 129, 0.18);
          color: #34d399;
          border-color: rgba(16, 185, 129, 0.5);
        }
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .skill-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 10px;
          font-size: 0.85rem;
          color: #e5e7eb;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .skill-chip:hover {
          transform: translateY(-2px);
          border-color: rgba(6, 182, 212, 0.4);
        }

        /* Projects Section */
        .card-project {
          grid-column: span 6;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .project-tag {
          display: inline-block;
          padding: 4px 10px;
          background: rgba(6, 182, 212, 0.12);
          color: #22d3ee;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
        }
        .project-name {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .project-desc {
          color: #9ca3af;
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 18px;
        }
        .project-techs {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .tech-pill {
          font-size: 0.75rem;
          padding: 3px 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          color: #cbd5e1;
        }
        .project-link {
          color: #34d399;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        /* Certifications */
        .card-certs {
          grid-column: span 12;
        }
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
          margin-top: 12px;
        }
        .cert-card {
          background: rgba(30, 41, 59, 0.4);
          padding: 16px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .cert-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(16, 185, 129, 0.12);
          color: #34d399;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 800;
          flex-shrink: 0;
        }
        .cert-info h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: #f3f4f6;
        }
        .cert-info p {
          font-size: 0.8rem;
          color: #9ca3af;
        }

        /* Footer */
        .footer-section {
          text-align: center;
          padding-top: 30px;
          color: #6b7280;
          font-size: 0.85rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          margin-top: 20px;
        }

        /* Media Queries */
        @media (max-width: 900px) {
          .card-hero, .card-profile, .card-about, .card-skills, .card-project {
            grid-column: span 12;
          }
          .hero-title {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <div className="container">
        <nav className="navbar">
          <div className="nav-brand">
            <span className="brand-dot"></span>
            Ahmed Alaa Eldin
          </div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#certs" className="nav-link">Certifications</a>
          </div>
        </nav>

        <div className="bento-grid">
          <div className="bento-card card-hero">
            <div className="hero-badge">
              <span className="badge-pulse"></span> Data Scientist & AI Specialist
            </div>
            <h1 className="hero-title">
              Empowering Business Decisions Through <br />
              <span className="text-gradient">Strategic Data & Artificial Intelligence</span>
            </h1>
            <p className="hero-sub">
              Senior CS & Math student at Cairo University crafting machine learning models, data pipelines, and scalable web automation.
            </p>
          </div>

          <div className="bento-card card-profile">
            <div>
              <div className="profile-header">
                <div className="avatar-box">AA</div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Ahmed Alaa</h3>
                  <p style={{ color: '#9ca3af', fontSize: '0.82rem' }}>Data Scientist</p>
                </div>
              </div>
            </div>
            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-num">1+</div>
                <div className="stat-lbl">Years Data science</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">100%</div>
                <div className="stat-lbl">Accuracy Focus</div>
              </div>
            </div>
          </div>

          <div className="bento-card card-cta-bar">
            <div>
              <h4 style={{ fontWeight: 700, fontSize: '0.95rem' }}>Let's Build Something Great Together</h4>
            </div>
            <div className="cta-buttons">
              <a href="https://github.com/ahmedalaa-jpg" target="_blank" rel="noreferrer" className="btn-action btn-primary">
                <svg className="btn-svg" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/ahmed-alaaـ" target="_blank" rel="noreferrer" className="btn-action btn-glass">
                <svg className="btn-svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn ↗
              </a>
              <a href="mailto:ahmedalaakabo@gmail.com" className="btn-action btn-glass">
                <svg className="btn-svg" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-12 1.287v10h24v-10l-12 9.725-12-9.725z"/></svg>
                Gmail ↗
              </a>
            </div>
          </div>

          {/* Expanded About Me Bento Card */}
          <div className="bento-card card-about" id="about">
            <div className="card-title-group">
              <span className="card-title-icon">👤</span>
              <h3 className="card-title-text" style={{ fontSize: '1.4rem' }}>About Me</h3>
            </div>
            
            <p className="about-text" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#e2e8f0', marginBottom: '20px' }}>
              Senior Computer Science & Mathematics student at Cairo University (Faculty of Science), specializing in Data Science, Artificial Intelligence, and Big Data Processing. Experienced in engineering scalable data pipelines, feature scaling, automated web scraping (Scrapy, Selenium, BeautifulSoup), and database management (SQL, PL/SQL, pgAdmin). Participant in the Digital Egypt Pioneers Initiative (DEPI) - IBM Data Science & AI track. Passionate about driving business value by transforming complex datasets into actionable insights.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '14px',
              marginTop: '20px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <span style={{ color: '#34d399', fontWeight: '700', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>🎓 Education</span>
                <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>B.Sc. CS & Math — Cairo University</p>
              </div>
              
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <span style={{ color: '#34d399', fontWeight: '700', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>🚀 Track</span>
                <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>IBM Data Science & AI — DEPI</p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <span style={{ color: '#34d399', fontWeight: '700', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>💡 Specialization</span>
                <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>Data Pipelines & Web Scraping</p>
              </div>
            </div>
          </div>

          <div className="bento-card card-skills" id="skills">
            <div className="card-title-group">
              <span className="card-title-icon">⚡</span>
              <h3 className="card-title-text">Technical Expertise</h3>
            </div>

            <div className="skills-tab-group">
              {['all', 'ai', 'code', 'scraping', 'tools'].map(tab => (
                <button
                  key={tab}
                  className={`tab-btn ${activeSkillTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveSkillTab(tab)}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="skills-grid">
              {filteredSkills.map((skill, index) => (
                <div className="skill-chip" key={index}>
                  <span>{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-card card-project" id="projects">
            <div>
              <span className="project-tag">Data Engineering</span>
              <h3 className="project-name">Near-Earth Objects Data Pipeline</h3>
              <p className="project-desc">
                Engineered an end-to-end telemetry data pipeline for cleaning, logging, and feature scaling astronomical datasets into analytical CSV formats.
              </p>
              <div className="project-techs">
                <span className="tech-pill">Python</span>
                <span className="tech-pill">Pandas</span>
                <span className="tech-pill">Feature Scaling</span>
              </div>
            </div>
            <a href="https://github.com/ahmedalaa-jpg" target="_blank" rel="noreferrer" className="project-link">
              View Repository ↗
            </a>
          </div>

          <div className="bento-card card-project">
            <div>
              <span className="project-tag">Web & Database</span>
              <h3 className="project-name">Yalla Class Academic Portal</h3>
              <p className="project-desc">
                Designed an academic tracking portal for monitoring student performance and attendance with real-time Firebase databases and responsive UI.
              </p>
              <div className="project-techs">
                <span className="tech-pill">React</span>
                <span className="tech-pill">Firebase</span>
                <span className="tech-pill">JavaScript</span>
              </div>
            </div>
            <a href="https://github.com/ahmedalaa-jpg" target="_blank" rel="noreferrer" className="project-link">
              View Repository ↗
            </a>
          </div>

          <div className="bento-card card-certs" id="certs">
            <div className="card-title-group">
              <span className="card-title-icon">🏆</span>
              <h3 className="card-title-text">Certifications & Achievements</h3>
            </div>
            <div className="certs-grid">
              <div className="cert-card">
                <div className="cert-icon">O</div>
                <div className="cert-info">
                  <h4>Oracle AI Certification</h4>
                  <p>Oracle Fundamentals</p>
                </div>
              </div>
              <div className="cert-card">
                <div className="cert-icon">S</div>
                <div className="cert-info">
                  <h4>Python Developer Certificate</h4>
                  <p>Sololearn</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer-section">
          <p>© {new Date().getFullYear()} Ahmed Alaa Eldin — All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;