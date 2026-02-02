import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Hot insulation, Cold insulation, Dual insulation, Ducting, False ceiling, and Acoustic insulation services in Vapi.",
};

export default function ServicesPage() {
  const services = [
    {
      name: "Hot insulation",
      icon: "🔥",
      desc: "Hot insulation shall generally be applied to equipment and piping operating at elevated temperatures to reduce heat loss and protect personnel.",
      img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=900&auto=format&fit=crop&q=80",
    },
    {
      name: "Cold Insulation",
      icon: "❄️",
      desc: "Cold insulation is applied to equipment and piping operating below ambient temperature to control heat gain and prevent condensation.",
      img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=900&auto=format&fit=crop&q=80",
    },
    {
      name: "Dual Insulation",
      icon: "🧊",
      desc: "The term dual insulation is used where equipment or piping requires both hot and cold performance characteristics within the same system.",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&auto=format&fit=crop&q=80",
    },
    {
      name: "Ducting",
      icon: "🌬️",
      desc: "Ducting is passages or conduits that are used in ventilation and air conditioning. We deliver efficient duct insulation and lagging.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=80",
    },
    {
      name: "False ceiling",
      icon: "🏠",
      desc: "A commercial building is incomplete without a proper false ceiling. We provide clean, durable installations for acoustic and thermal performance.",
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&auto=format&fit=crop&q=80",
    },
    {
      name: "Acoustic insulation",
      icon: "🔇",
      desc: "Noise affects health and wellbeing in many ways. Our acoustic insulation helps reduce sound transmission and improve comfort.",
      img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=900&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Complete insulation and ducting solutions for industry & commercial projects.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid-enhanced">
            {services.map((service) => (
              <div className="service-card-enhanced" key={service.name}>
                <div className="service-img">
                  <img src={service.img} alt={service.name} />
                  <span className="service-icon-overlay">{service.icon}</span>
                </div>
                <div className="service-flap">
                  <h3>{service.name}</h3>
                  <p>{service.desc}</p>
                  <a href="/contact" className="btn-primary" style={{marginTop: '1.5rem'}}>Get Quote</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-premium">
        <div className="container cta-flex">
          <div className="cta-text">
            <h2>Need a Site Assessment?</h2>
            <p>Our engineers are ready to evaluate your thermal efficiency gaps.</p>
          </div>
          <div className="cta-btns">
            <a className="btn-primary large" href="/contact">Book Site Visit</a>
          </div>
        </div>
      </section>
    </main>
  );
}
