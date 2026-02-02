import type { Metadata } from "next";
import ProjectsClient from "./projects-client";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Latest insulation projects including hot insulation, cold insulation, and ducting work.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Latest projects in hot insulation, cold insulation, and ducting.</p>
        </div>
      </section>

      <ProjectsClient />

      <section className="section cta-premium">
        <div className="container cta-flex">
          <div className="cta-text">
            <h2>Have a Project in Mind?</h2>
            <p>Our engineers are ready to provide technical estimates.</p>
          </div>
          <div className="cta-btns">
            <a href="/contact" className="btn-primary large">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
