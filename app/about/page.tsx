import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about JC Insulation & Engineers - 22+ years of industrial insulation excellence.",
};

export default function AboutPage() {
  const prestigiousProjects = [
    {
      client: "BAYER VAPI PVT. LTD.",
      detail:
        "Working since 1995 (formerly Bilag Industries). Plant area ~70 acres; approximate work value around ₹1 Cr annually.",
    },
    {
      client: "SRF Ltd.",
      detail:
        "Specialized chemical operations; hot insulation with calcium silicate and mineral wool, cold insulation with nitrile rubber and PUF. Approx. ₹350 Lacs, 210 days.",
    },
    {
      client: "Daramic Batteries Separator India Pvt. Ltd.",
      detail:
        "Completed in 2016–17. Hot insulation using mineral wool and aluminum sheet; cold insulation using FM-approved nitrile rubber. Approx. ₹80 Lacs, 120 days.",
    },
    {
      client: "NETMATRIX LTD.",
      detail:
        "Hot & cold insulation at Vapi and Vizag units. Mineral wool for hot, PUF for cold. Approx. ₹105 Lacs, 260 days.",
    },
    {
      client: "RELIANCE INDUSTRIES LTD.",
      detail:
        "Hot insulation at J3 Project, Jamnagar with a manpower strength of 400+.",
    },
    {
      client: "KONKAN LNG PVT. LTD.",
      detail:
        "Cryogenic piping and equipment insulation for LNG facilities.",
    },
    {
      client: "GAIL INDIA LTD.",
      detail:
        "Industrial insulation services for critical pipelines and equipment.",
    },
    {
      client: "SNF FLOPAM INDIA PVT. LTD.",
      detail:
        "Process plant insulation support for thermal efficiency and safety.",
    },
    {
      client: "NEOGEN Chemicals Limited",
      detail:
        "Specialty chemical plant insulation for hot and cold services.",
    },
  ];

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>About JC Insulation & Engineers</h1>
          <p>India's Leading Insulation Giant | 50+ Cr Turnover | 22+ Years Excellence</p>
        </div>
      </section>

      <section className="section about-legacy">
        <div className="container">
          <div className="legacy-grid">
            <div className="legacy-text">
              <span className="badge">Our Journey</span>
              <h2>India's Industrial Insulation Giant</h2>
              <p>
                JC Insulation & Engineers Pvt. Ltd. is a market leader in industrial insulation services with an annual turnover exceeding ₹50 Crores and a consistent 25% year-on-year growth trajectory.
              </p>
              <p>
                With ISO 9001:2015 certification, 500+ successfully delivered projects, and a skilled workforce of 450+ professionals, we are the preferred insulation partner for Fortune 500 companies across 12+ states in India.
              </p>
              <div className="stats-bento">
                <div className="bento-item"><strong>2001</strong><span>Founded</span></div>
                <div className="bento-item"><strong>50+ Cr</strong><span>Turnover</span></div>
                <div className="bento-item"><strong>500+</strong><span>Projects</span></div>
                <div className="bento-item"><strong>25%</strong><span>Growth</span></div>
              </div>
            </div>
            <div className="legacy-visual">
              <div className="image-card shadow-effect">
                <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=900&auto=format&fit=crop&q=80" alt="Industrial insulation facility" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section leadership-section">
        <div className="container">
          <h2 className="section-title">Leadership</h2>
          <div className="leadership-grid">
            <div className="leader-card">
              <div className="leader-icon">👤</div>
              <h3>Late Mr. Sabbirali Kasamali Jasani</h3>
              <p className="leader-role">Founder</p>
              <p>
                Founded JC Insulation in 2001 with decades of experience from L&T and Lloyds Insulation. His vision was to deliver cost-effective and environmentally responsible insulation solutions.
              </p>
            </div>
            <div className="leader-card">
              <div className="leader-icon">👤</div>
              <h3>Mr. Meraj Jasani</h3>
              <p className="leader-role">Managing Director</p>
              <p>
                Leading the company's operations and expansion across India, bringing innovative solutions and maintaining the highest standards of safety and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section work-section">
        <div className="container">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            Some of our prestigious projects delivered across Gujarat and India.
          </p>
          <div className="work-grid">
            {prestigiousProjects.map((project) => (
              <article className="work-card" key={project.client}>
                <div className="work-card-header">
                  <span className="work-badge">Project</span>
                  <h3>{project.client}</h3>
                </div>
                <p>{project.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-large">
            <div className="stat-large">
              <strong>2001</strong>
              <span>Year Founded</span>
            </div>
            <div className="stat-large">
              <strong>22+</strong>
              <span>Years Experience</span>
            </div>
            <div className="stat-large">
              <strong>500+</strong>
              <span>Projects Delivered</span>
            </div>
            <div className="stat-large">
              <strong>450+</strong>
              <span>Expert Team</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
