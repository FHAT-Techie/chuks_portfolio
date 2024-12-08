import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import myImage from './Image/myImage.png';
import {Button} from './FormElements.jsx';

export default function Hero() {
  return (
    <div className="hero">
      <div className="profile">
        <img src={myImage} alt="Chuks's Picture" />
        <p>Hi, I’m Chuks Omeifeukwu</p>
      </div>

      <h1>
        Building and designing impactful digital products, brands, and user experiences
      </h1>

      <Button
        buttonLabel="Latest UI"
        icon={<FontAwesomeIcon icon={faLink} />}
      />
    </div>
  );
}