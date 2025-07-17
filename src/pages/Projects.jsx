import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Our Projects</h2>
      <p>
        At Fine Roofing, we take pride in every project we complete. From residential homes to commercial buildings, our portfolio showcases our commitment to quality, durability, and design.
      </p>
      <div className="project-gallery">
        <div className="project-item">
          <img src="/assets/project1.jpg" alt="Project 1" />
          <p>Modern residential roof replacement</p>
        </div>
        <div className="project-item">
          <img src="/assets/project2.jpg" alt="Project 2" />
          <p>Large commercial flat roof installation</p>
        </div>
        <div className="project-item">
          <img src="/assets/project3.jpg" alt="Project 3" />
          <p>Skylight integration project</p>
        </div>
        {/* Add more project items as needed */}
      </div>
    </section>
  );
};

export default Projects;
