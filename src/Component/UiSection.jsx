import React, { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard";
import dribbleProject from "../dribbleList.js";
import { Button } from "./FormElements.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";

export default function UiSection() {
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
                backgroundColor:"#f0f3ff"
      }}
    >
      <h1
     className="sectionHeader"
      >
        UI: Crafting visually stunning and intuitive interfaces.
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
        {dribbleProject.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.projectName}
            projectDescription={project.projectDescription}
            projectImage={project.projectImage}
            projectLink={project.projectLink}
            style={{
              flex: "1 1 calc(33% - 20px)", // Three cards per row with gap
              minWidth: "280px", // Ensures cards don’t get too small
              boxSizing: "border-box", // Ensures padding and border are included in the width
            }}
          />
        ))}
      </div>

      <Button
        buttonLabel="UI Projects"
        buttonLink="https://dribbble.com/Fhatboy"
        icon={faDribbble}
      />
    </div>
  );
}
