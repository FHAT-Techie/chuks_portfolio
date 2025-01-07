import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faComment } from '@fortawesome/free-solid-svg-icons';


import myImage from "./Image/myImage.png";
import { Button } from "./FormElements.jsx";

export default function Hero() {
  return (
    <div className="hero">
      <div className="profile">
        <img src={myImage} alt="Chuks's Picture" />
        <p>Hi, I’m Chuks Omeifeukwu</p>
      </div>

      <h1
       className="sectionHeader"
      >
        Building and designing impactful digital products, brands, and user experiences
      </h1>

      <Button
        buttonLabel="Let's Talk"
        icon={faComment}
        buttonLink="mailto:chuksomeifeukwu@gmail.com?subject=Let's Work Together&body=Hi Chuks,"
      />
    </div>
  );
}
