import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'; 

import "./componentStyles.css"

export default function Header() {
  return (
    <div className='header'>
      <a href="https://x.com/fatboy_dsgn_dev" className='twitter'>
        <FontAwesomeIcon icon={faTwitter} /> {/* Use the icon object */}
        @fatboy_dsgn_dev
      </a>

      <div className="navigation">
        <a href="https://github.com/FHAT-Techie">Github</a>
        <a href="https://www.behance.net/chuksomeifeukwu">Behance</a>
        <a href="https://dribbble.com/Fhatboy">Dribble</a>
      </div>
    </div>
  );
}
