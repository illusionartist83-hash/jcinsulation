import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients | JC Insulation & Engineers Pvt. Ltd.",
  description: "Industrial clients and partners.",
};

export default function ClientsPage() {
  const clientLogos = [
    "https://i.ibb.co/QdrGgNN/image.png",
    "https://i.ibb.co/rQ3fTbN/image.png",
    "https://i.ibb.co/nkmm07J/image.png",
    "https://i.ibb.co/tpvrw3r/image.png",
    "https://i.ibb.co/TwJ8WkX/image.png",
    "https://i.ibb.co/VHMgHt9/image.png",
    "https://i.ibb.co/kXddJDq/image.png",
    "https://i.ibb.co/GPpw0pw/image.png",
    "https://i.ibb.co/K6hVWyx/image.png",
    "https://i.ibb.co/cw9VZ70/image.png",
    "https://i.ibb.co/w0bcJGM/image.png",
    "https://i.ibb.co/mBgFcvT/image.png",
    "https://i.ibb.co/hDrmKxf/image.png",
    "https://i.ibb.co/9w4Z4Bp/image.png",
    "https://i.ibb.co/QDxbMcp/image.png",
    "https://i.ibb.co/cC7J0Kb/image.png",
    "https://i.ibb.co/CnqhcTW/image.png",
    "https://i.ibb.co/pKQ3nS6/image.png",
    "https://i.ibb.co/hCDLKBq/image.png",
    "https://i.ibb.co/pJX0K6p/image.png",
    "https://i.ibb.co/d4cgBnm/image.png",
    "https://i.ibb.co/Q68V7YT/image.png",
    "https://i.ibb.co/0yBX2pS/image.png",
    "https://i.ibb.co/cTFTcyg/image.png",
    "https://i.ibb.co/4SK1D3w/image.png",
    "https://i.ibb.co/8sN7Qxy/image.png",
  ];

  return (
    <main>
      <section className="section clients-section">
        <div className="container">
          <h1 className="section-title">Our Clients</h1>
          <p className="section-subtitle">
            Some of our esteemed clients across industrial sectors.
          </p>
          <p className="section-subtitle" style={{ marginTop: "-2rem" }}>
            JC Insulation understands that clients seek practical, sustainable
            solutions. We continuously strengthen our expertise to meet these
            evolving needs.
          </p>
          <div className="clients-logos">
            {clientLogos.map((logo, index) => (
              <div className="client-logo" key={`${logo}-${index}`}>
                <img src={logo} alt="Client logo" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
