import React, { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard";
import behanceProject from "../behanceList.js";
import { Button } from "./FormElements.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance } from '@fortawesome/free-brands-svg-icons';


export default function UxSection() {
  const [padding, setPadding] = useState("64px");

  useEffect(() => {
    const updatePadding = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setPadding("64px"); // Large screens
      } else if (width >= 768) {
        setPadding("32px"); // Medium screens
      } else {
        setPadding("16px"); // Small screens
      }
    };

    updatePadding();
    window.addEventListener("resize", updatePadding);

    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        padding,
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        alignSelf: "stretch",

      }}
    >
      <h1
  className="sectionHeader"
      >
        UX: User-focused solutions through creative and strategic design case studies.
      </h1>

      <div
        className="cardContainer"
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap", // Allows cards to wrap to the next row
          gap: "20px",
          justifyContent: "center", // Centers cards horizontally
        }}
      >
        {behanceProject.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.projectName}
            projectDescription={project.projectDescription}
            projectImage={project.projectImage}
            projectLink={project.projectLink}
          />
        ))}
      </div>
      <Button buttonLabel="UX Projects" 
      buttonLink="https://www.behance.net/chuksomeifeukwu"
      icon={faBehance}
      />
    </div>
  );
}
