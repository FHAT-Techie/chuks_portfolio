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
        <a href="https://github.com/FHAT-Techie" target='_Blank'>Github</a>
        <a href="https://www.behance.net/chuksomeifeukwu"  target='_Blank'>Behance</a>
        <a href="https://dribbble.com/Fhatboy" target='_Blank' >Dribble</a>
      </div>
    </div>
  );
}
