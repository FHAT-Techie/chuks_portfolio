import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";
import { FaPen } from "react-icons/fa";
import { AiOutlineLaptop } from "react-icons/ai";

export default function AboutMeSection() {
  return (
    <div className="aboutMeSection">
      <h1>
        Opened to create smooth connections between design and development for
        your business.
      </h1>

      <div className="aboutMeCards">
        <div className="aboutDiv">
          <AboutMeCard
            icon={<FontAwesomeIcon icon={faSearchengin} />}
            header="Research"
            description="I Conduct studies to understand user needs and improve products."
          />
          <AboutMeCard
            icon={<FontAwesomeIcon icon={faRecycle} />}
            header="Design System"
            description="I Bridge the gap between design and development with reusable components."
          />
        </div>
        <div className="aboutDiv">
          <AboutMeCard
            icon={<FaPen />}
            header="Design Creativity"
            description="I design captivating interfaces that deeply resonate with your users."
          />
          <AboutMeCard
            icon={<AiOutlineLaptop />}
            header="Technology"
            description="I bring your vision to life using cutting-edge technology trends."
          />
        </div>
      </div>
    </div>
  );
}

function AboutMeCard({
  icon,
  header = "UI and UX",
  description = "Enter Description",
}) {
  return (
    <div className="aboutCard">
      <p className="icon">{icon}</p>
      <h2>{header}</h2>
      <p> {description}</p>
    </div>
  );
}
