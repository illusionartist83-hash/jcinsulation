"use client";

import { useMemo, useState } from "react";

const projects = [
  {
    title: "Ducting Project at BAYER VAPI PVT. LTD.",
    type: "Ducting",
    location: "Vapi, Gujarat",
    desc: "BAYER VAPI PVT. LTD. (Formerly Known As Bilag Industries Pvt. Ltd.) We are working on complete ducting insulation and HVAC systems.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=80",
  },
  {
    title: "Hot Insulation Project at SRF Ltd.",
    type: "Hot",
    location: "Dahej, Gujarat",
    desc: "SRF is a DCM Group company involved in specialty chemicals. We delivered high-temperature insulation solutions for process lines.",
    img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=900&auto=format&fit=crop&q=80",
  },
  {
    title: "Hot Insulation Project at Huber Group.",
    type: "Hot",
    location: "Vapi, Gujarat",
    desc: "Turnkey hot insulation services for industrial equipment and piping to reduce energy loss and improve safety.",
    img: "https://images.unsplash.com/photo-1504307651254-35682f94a81b?w=900&auto=format&fit=crop&q=80",
  },
  {
    title: "Ducting Project at Konkan LNG",
    type: "Ducting",
    location: "LNG Terminal",
    desc: "Insulation work at Konkan LNG Pvt Ltd for cryogenic piping and equipment.",
    img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=900&auto=format&fit=crop&q=80",
  },
  {
    title: "Cold Insulation for Chilled Water Lines",
    type: "Cold",
    location: "Silvassa, DNH",
    desc: "PUF/PIR insulation with vapor barrier for chilled water piping to prevent condensation and energy loss.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&auto=format&fit=crop&q=80",
  },
  {
    title: "Cold Insulation for Storage Facility",
    type: "Cold",
    location: "Vapi, Gujarat",
    desc: "Thermal insulation for cold storage panels and utility lines to maintain stable low temperatures.",
    img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=900&auto=format&fit=crop&q=80",
  },
];

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }
    return projects.filter((project) => project.type === activeFilter);
  }, [activeFilter]);

  return (
    <section className="section">
      <div className="container">
        <div className="section-intro text-center">
          <h2>Latest Projects</h2>
          <p>
            A snapshot of recent hot insulation, cold insulation, and ducting
            projects delivered across industrial sites.
          </p>
        </div>

        <div className="project-filters">
          {["All", "Hot", "Cold", "Ducting"].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
              <span className="filter-count">
                {filter === "All"
                  ? projects.length
                  : projects.filter((project) => project.type === filter).length}
              </span>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.img} alt={project.title} />
                <span className="project-tag">{project.type}</span>
              </div>
              <div className="project-content">
                <div className="project-meta">📍 {project.location}</div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a href="/contact" className="btn-outline">
                  View Services
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
