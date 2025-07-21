import React from "react";
import "./Projects.css";
import img1 from '../assets/Fine Roofing Team.jpg';
import img2 from '../assets/FineRoofing (9).jpg';
import img3 from '../assets/FineRoofing (6).jpg';
import img4 from '../assets/FineRoofing (17).jpg';
import img5 from '../assets/FineRoofing (13).jpg';
import img6 from '../assets/FineRoofing (3).jpg';
import img7 from '../assets/FineRoofing (15).jpg';
import img8 from '../assets/FineRoofing (16).jpg';
import img9 from '../assets/Fine Roofing Home img.jpg';
import img10 from '../assets/FineRoofing (15).jpg';
import img11 from '../assets/FineRoofing (7).jpg';
import img12 from '../assets/FineRoofing (11).jpg';
import img13 from '../assets/FineRoofing (10).jpg';
import img14 from '../assets/FineRoofing (5).jpg';
import img15 from '../assets/FineRoofing (2).jpg';


const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Our Projects</h2>
      <p>
        At Fine Roofing, we take pride in every project we complete. From residential homes to commercial buildings, our portfolio showcases our commitment to quality, durability, and design.
      </p>
      <div className="project-gallery">
        <div className="project-item">
          <img src={img1} alt="Project 1" />
          <p>Modern residential roof replacement</p>
        </div>
        <div className="project-item">
          <img src={img2} alt="Project 2" />
          <p>Large commercial flat roof installation</p>
        </div>
        <div className="project-item">
          <img src={img3} alt="Project 3" />
          <p>Skylight integration project</p>
        </div>
        <div className="project-item">
          <img src={img4} alt="Project 3" />
          <p>Skylight integration project</p>
        </div>
        <div className="project-item">
          <img src={img5} alt="Project 3" />
          <p>Skylight integration project</p>
        </div>
        <div className="project-item">
          <img src={img6} alt="Project 3" />
          <p>Skylight integration project</p>
        </div>
        <div className="project-item">
          <img src={img7} alt="Project 3" />
          <p>Skylight integration project</p>
        </div>
        <div className="project-item">
          <img src={img8} alt="Project 3" />
          <p>Skylight integration project</p>
        </div>
        <div className="project-item">
          <img src={img9} alt="Project 3" />
          <p>Skylight integration project</p>
        </div>
        <div className="project-item">
          <img src={img10} alt="Project 3" />
          <p>Skylight integration project</p>
        </div>
        <div className="project-item">
          <img src={img11} alt="Project 3" />
          <p>Skylight integration project</p>
        </div>
        <div className="project-item">
          <img src={img12} alt="Project 3" />
          <p>Skylight integration project</p>
        </div>
        <div className="project-item">
          <img src={img13} alt="Project 3" />
          <p>Skylight integration project</p>
        </div>
        <div className="project-item">
          <img src={img14} alt="Project 3" />
          <p>Skylight integration project</p>
        </div>
        <div className="project-item">
          <img src={img15} alt="Project 3" />
          <p>Skylight integration project</p>
        </div>
        {/* Add more project items as needed */}
      </div>
    </section>
  );
};

export default Projects;
