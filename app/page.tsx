import type { Metadata } from "next";
import IndustrialCalculators from "./HeatLossCalculator";

export const metadata: Metadata = {
  title:
    "JC Insulation & Engineers | India's Leading Insulation Giant | 50+ Cr Turnover | ISO Certified",
  description:
    "Leading industrial insulation company in India with 50+ Cr turnover, 500+ projects, ISO 9001:2015 certified. Expert in hot, cold, duct, acoustic insulation, fire proofing & cladding since 2001. Serving Gujarat & Pan-India.",
  keywords:
    "industrial insulation India, thermal insulation Gujarat, hot insulation, cold insulation, fire proofing, acoustic insulation, industrial cladding, pipe insulation, boiler insulation, HVAC insulation, JC Insulation Vapi",
  alternates: {
    canonical: "https://www.jcinsulation.in/",
  },
};

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-split">
        <div className="container hero-split-grid">
          <div className="hero-main">
            <span className="badge">An ISO 9001:2015 Certified Company</span>

            {/* 🔴 UPDATED LINE */}
            <h1>India's Industrial Insulation Giant Since 2001 🚀</h1>

            <p className="hero-subtitle">
              Delivering Excellence across 500+ Projects with an Annual Turnover
              of ₹50 Cr+
            </p>

            <div className="hero-features">
              <span>✓ 22+ Years of Expertise</span>
              <span>✓ PAN India Service</span>
              <span>✓ Premium Metal Cladding</span>
            </div>

            <div className="btn-row">
              <a className="btn-primary" href="/contact">
                Get Expert Consultation
              </a>
              <a className="btn-outline" href="/services">
                Explore Services
              </a>
            </div>
          </div>

          <div className="hero-updates">
            <div className="updates-header">
              <h3>⚡ Live Project Updates</h3>
            </div>

            <div className="updates-slider">
              <div className="update-slide">
                <img
                  src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=800&q=80"
                  alt="Hot insulation"
                />
                <div className="update-content">
                  <span className="flash-badge">🔴 ONGOING</span>
                  <h4>Bayer Vapi Plant Phase II</h4>
                  <p className="update-loc">📍 Vapi, Gujarat</p>
                  <p>
                    Process equipment hot insulation with mineral wool &
                    Al-cladding.
                  </p>
                  <div className="progress-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <span>85% Complete</span>
                </div>
              </div>

              <div className="update-slide">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                  alt="Metal cladding"
                />
                <div className="update-content">
                  <span className="flash-badge upcoming">📅 UPCOMING</span>
                  <h4>L&T Manufacturing Hub</h4>
                  <p className="update-loc">📍 Hazira, Gujarat</p>
                  <p>
                    Turnkey fireproofing & acoustic insulation for machinery
                    units.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about-legacy">
        <div className="container">
          <div className="legacy-grid">
            <div className="legacy-text">
              <span className="badge secondary">India's Giant</span>
              <h2>22+ Years of Market Leadership</h2>
              <p>
                Founded in 2001 by Late Mr. Sabbirali Kasamali Jasani (Ex L&T,
                Lloyds Insulation), JC Insulation & Engineers has grown into an
                industrial force with an annual turnover exceeding ₹50 Crores.
              </p>

              <div className="stats-bento">
                <div className="bento-item">
                  <strong>2001</strong>
                  <span>Founded</span>
                </div>
                <div className="bento-item">
                  <strong>₹50+ Cr</strong>
                  <span>Turnover</span>
                </div>
                <div className="bento-item">
                  <strong>500+</strong>
                  <span>Projects</span>
                </div>
                <div className="bento-item">
                  <strong>25%</strong>
                  <span>YoY Growth</span>
                </div>
              </div>
            </div>

            <div className="legacy-visual">
              <div className="image-stack-premium">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                  alt="Industrial insulation"
                />
                <div className="experience-badge">
                  <strong>22+</strong>
                  <span>Years of Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATORS */}
      <section className="section calculators-advanced">
        <div className="container">
          <div className="section-intro text-center">
            <h2>Engineering Utility Suite</h2>
            <p>
              Professional calculators for material, heat loss, and ROI
              estimation
            </p>
          </div>
          <IndustrialCalculators />
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-premium">
        <div className="container cta-flex">
          <div className="cta-text">
            <h2>Optimize Your Industrial Efficiency</h2>
            <p>Join 500+ global clients trusting JC Insulation since 2001.</p>
          </div>
          <div className="cta-btns">
            <a href="/contact" className="btn-primary large">
              Request Site Audit
            </a>
            <a href="tel:+919227417886" className="btn-outline large">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
