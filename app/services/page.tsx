"use client";

import { useEffect, useState } from "react";

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://jcelectromechanical.com/jc/api/services.php?t=${Date.now()}`;

    fetch(url, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    })
      .then(res => res.json())
      .then(json => {
        setServices(json.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p style={{ padding: 40 }}>Loading services…</p>;
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            Complete insulation and ducting solutions for industry & commercial projects.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid-enhanced">
            {services.map(service => (
              <div className="service-card-enhanced" key={service.id}>
                <div className="service-img">
                  <img src={service.image_url} alt={service.name} />
                  <span className="service-icon-overlay">
                    {service.icon}
                  </span>
                </div>
                <div className="service-flap">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <a href="/contact" className="btn-primary">
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
