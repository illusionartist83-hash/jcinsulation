import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with JC Insulation & Engineers for free estimates and project queries.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get a free estimate for your insulation project</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <span className="contact-icon">📍</span>
              <h3>Visit Us</h3>
              <p>
                609, 6th Floor<br/>
                Skylon Co. Op. Housing Society<br/>
                Near DCB Bank, Char Rasta<br/>
                Vapi, Gujarat - 396195
              </p>
            </div>
            <div className="contact-info-card">
              <span className="contact-icon">📞</span>
              <h3>Call Us</h3>
              <p>
                <a href="tel:+919227417886">+91 92274 17886</a><br/>
                <a href="tel:+917043757507">+91 70437 57507</a>
              </p>
            </div>
            <div className="contact-info-card">
              <span className="contact-icon">📧</span>
              <h3>Email Us</h3>
              <p>
                <a href="mailto:jciepl@gmail.com">jciepl@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-form-section">
        <div className="container">
          <div className="contact-grid">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps?q=Skylon+Building+Vapi&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="JC Insulation location"
              ></iframe>
            </div>
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <p className="form-subtitle">Fill out the form and we'll get back to you within 24 hours</p>
              <form className="modern-form">
                <input className="form-input" type="text" name="name" placeholder="Your Name" required />
                <input className="form-input" type="email" name="email" placeholder="Your Email" required />
                <input className="form-input" type="tel" name="phone" placeholder="Phone Number" required />
                <input className="form-input" type="text" name="company" placeholder="Company Name" />
                <textarea className="form-input" name="message" rows={5} placeholder="Project Details / Requirements" required></textarea>
                <button className="btn-primary btn-full" type="submit">Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
