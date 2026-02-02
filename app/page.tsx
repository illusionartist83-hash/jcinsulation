import type { Metadata } from "next";
import IndustrialCalculators from "./HeatLossCalculator";

export const metadata: Metadata = {
  title: "JC Insulation & Engineers | India's Leading Insulation Giant | 50+ Cr Turnover | ISO Certified",
  description:
    "Leading industrial insulation company in India with 50+ Cr turnover, 500+ projects, ISO 9001:2015 certified. Expert in hot, cold, duct, acoustic insulation, fire proofing & cladding since 2001. Serving Gujarat & Pan-India.",
  keywords: "industrial insulation India, thermal insulation Gujarat, hot insulation, cold insulation, fire proofing, acoustic insulation, industrial cladding, pipe insulation, boiler insulation, HVAC insulation, JC Insulation Vapi",
  alternates: {
    canonical: "https://www.jcinsulation.in/",
  },
};

export default function HomePage() {
  return (
    <main>
      <section className="hero-split">
        <div className="container hero-split-grid">
          <div className="hero-main">
            <span className="badge">An ISO 9001:2015 Certified Company</span>
            <h1>India's Industrial Insulation Giant Since 2001 🚀</h1>
            <p className="hero-subtitle">
              Delivering Excellence across 500+ Projects with an Annual Turnover of ₹50 Cr+
            </p>
            <div className="hero-features">
              <span>✓ 22+ Years of Expertise</span>
              <span>✓ PAN India Service</span>
              <span>✓ Premium Metal Cladding</span>
            </div>
            <div className="btn-row">
              <a className="btn-primary" href="/contact">Get Expert Consultation</a>
              <a className="btn-outline" href="/services">Explore Services</a>
            </div>
          </div>
          <div className="hero-updates">
            <div className="updates-header">
              <h3>⚡ Live Project Updates</h3>
            </div>
            <div className="updates-slider">
              <div className="update-slide">
                <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=800&q=80" alt="Hot insulation" />
                <div className="update-content">
                  <span className="flash-badge">🔴 ONGOING</span>
                  <h4>Bayer Vapi Plant Phase II</h4>
                  <p className="update-loc">📍 Vapi, Gujarat</p>
                  <p>Process equipment hot insulation with mineral wool & Al-cladding.</p>
                  <div className="progress-wrap">
                    <div className="progress-bar" style={{width: '85%'}}></div>
                  </div>
                  <span>85% Complete</span>
                </div>
              </div>
              <div className="update-slide">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" alt="Metal cladding" />
                <div className="update-content">
                  <span className="flash-badge upcoming">📅 UPCOMING</span>
                  <h4>L&T Manufacturing Hub</h4>
                  <p className="update-loc">📍 Hazira, Gujarat</p>
                  <p>Turnkey fireproofing & acoustic insulation for machinery units.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-legacy">
        <div className="container">
          <div className="legacy-grid">
            <div className="legacy-text">
              <span className="badge secondary">India's Giant</span>
              <h2>22+ Years of Market Leadership</h2>
              <p>
                Founded in 2001 by Late Mr. Sabbirali Kasamali Jasani (Ex L&T, Lloyds Insulation), JC Insulation & Engineers has grown into an industrial force with an annual turnover exceeding ₹50 Crores.
              </p>
              <div className="stats-bento">
                <div className="bento-item"><strong>2001</strong><span>Founded</span></div>
                <div className="bento-item"><strong>₹50+ Cr</strong><span>Turnover</span></div>
                <div className="bento-item"><strong>500+</strong><span>Projects</span></div>
                <div className="bento-item"><strong>25%</strong><span>YoY Growth</span></div>
              </div>
            </div>
            <div className="legacy-visual">
              <div className="image-stack-premium">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80" alt="Industrial insulation" />
                <div className="experience-badge">
                  <strong>22+</strong>
                  <span>Years of Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section stats-viz-section">
        <div className="container">
          <h2 className="section-title">Growth & Performance</h2>
          <div className="stats-viz-grid">
            <div className="chart-container-premium">
              <div className="chart-header-premium">
                <h3>Revenue Growth (₹ Crores)</h3>
                <span className="growth-indicator">+125% over 5 years</span>
              </div>
              <div className="horizontal-bars-premium">
                {[
                  { year: "2021", value: 32, color: "#3b82f6" },
                  { year: "2022", value: 40, color: "#2563eb" },
                  { year: "2023", value: 48, color: "#1d4ed8" },
                  { year: "2024", value: 58, color: "#1e40af" },
                  { year: "2025", value: 72, color: "#1e3a8a" },
                ].map((data) => (
                  <div className="h-bar-item" key={data.year}>
                    <span className="h-bar-year">{data.year}</span>
                    <div className="h-bar-track">
                      <div className="h-bar-fill" style={{ width: `${(data.value / 72) * 100}%`, background: data.color }}>
                        <span className="h-bar-value">₹{data.value} Cr</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="stat-cards-vertical">
              <div className="mini-stat-card">
                <span className="m-stat-icon">💰</span>
                <div>
                  <strong>₹72 Cr+</strong>
                  <p>Projected 2025 Revenue</p>
                </div>
              </div>
              <div className="mini-stat-card">
                <span className="m-stat-icon">🏗️</span>
                <div>
                  <strong>500+</strong>
                  <p>Projects Delivered</p>
                </div>
              </div>
              <div className="mini-stat-card">
                <span className="m-stat-icon">👥</span>
                <div>
                  <strong>450+</strong>
                  <p>Skilled Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section certifications-premium">
        <div className="container">
          <h2 className="section-title">Quality & Certifications</h2>
          <div className="cert-grid-premium">
            {[
              { title: "ISO 9001:2015", icon: "🏆", desc: "Quality Management Certified" },
              { title: "ISI Certified", icon: "✅", desc: "Indian Standards Compliance" },
              { title: "Safety Award", icon: "🛡️", desc: "Zero Accident Record 2024" },
              { title: "#1 Contractor", icon: "⭐", desc: "Top Rated in Gujarat" },
            ].map((c) => (
              <div className="cert-card-new" key={c.title}>
                <span className="cert-icon-large">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section services-grid-wrap">
        <div className="container">
          <h2 className="section-title">Specialized Solutions</h2>
          <div className="services-bento">
            {[
              { name: "Hot Insulation", icon: "🔥", img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=600&q=80", desc: "Boilers, steam lines & vessels." },
              { name: "Cold Insulation", icon: "❄️", img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80", desc: "Cryogenic & refrigeration lines." },
              { name: "Duct Insulation", icon: "🌬️", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80", desc: "HVAC duct lagging solutions." },
              { name: "Fire Proofing", icon: "🛡️", img: "https://images.unsplash.com/photo-1589939705384-5185138a7c0d?w=600&q=80", desc: "Passive fire protection for steel." },
              { name: "Acoustic", icon: "🔇", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", desc: "Noise control for DG rooms." },
              { name: "Cladding", icon: "🏗️", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80", desc: "GI/Al/SS metal jacketing." },
            ].map((s) => (
              <div className="service-bento-item" key={s.name}>
                <div className="bento-img"><img src={s.img} alt={s.name} /></div>
                <div className="bento-content">
                  <span className="bento-icon">{s.icon}</span>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section calculators-advanced">
        <div className="container">
          <div className="section-intro text-center">
            <h2>Engineering Utility Suite</h2>
            <p>Professional calculators for material, heat loss, and ROI estimation</p>
          </div>
          <IndustrialCalculators />
        </div>
      </section>

      <section className="section project-highlights">
        <div className="container">
          <h2 className="section-title text-center">Project Portfolio</h2>
          <div className="gallery-masonry">
            {[
              { title: "Hot Insulation", client: "Bayer Vapi", img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=700&q=80" },
              { title: "Cold Room", client: "SRF Ltd", img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=700&q=80" },
              { title: "Duct Lagging", client: "Huber Group", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&q=80" },
              { title: "Fire Proofing", client: "Meril Life", img: "https://images.unsplash.com/photo-1589939705384-5185138a7c0d?w=700&q=80" },
              { title: "Acoustic", client: "Manufacturing Unit", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80" },
              { title: "Metal Cladding", client: "Industrial Facility", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80" },
            ].map((p) => (
              <div className="masonry-item" key={p.title}>
                <img src={p.img} alt={p.title} />
                <div className="masonry-overlay">
                  <h3>{p.title}</h3>
                  <p>{p.client}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <a href="/projects" className="btn-outline-dark">View All 500+ Projects</a>
          </div>
        </div>
      </section>

      <section className="section cta-premium">
        <div className="container cta-flex">
          <div className="cta-text">
            <h2>Optimize Your Industrial Efficiency</h2>
            <p>Join 500+ global clients trusting JC Insulation since 2001.</p>
          </div>
          <div className="cta-btns">
            <a href="/contact" className="btn-primary large">Request Site Audit</a>
            <a href="tel:+919227417886" className="btn-outline large">Call Now</a>
          </div>
        </div>
      </section>
    </main>
  );
}
