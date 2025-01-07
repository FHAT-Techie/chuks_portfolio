import { FaBehance, FaDribbble, FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{
        padding:"16px",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        gap:"16px",
        color:"#fff",

        background:"#3080ed"
      }}>
      <div >
        <p
        style={{
            textAlign:"center"
        }}>

         Let's create something remarkable together.
        </p>
      </div>
      <div>
        <ul style={{ listStyle: "none", display: "flex", gap: "15px", padding: 0, justifyContent:"center", alignItems:"center" }}>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaBehance />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaDribbble />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p 
        style={{
            textAlign:"center",
            display: "flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column"
          }}>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
