import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance } from '@fortawesome/free-brands-svg-icons';

export function Button({ buttonLabel = "Button", icon, buttonLink }) {
  return (
    <div className="buttondiv" style={{ display: "inline-block" }}>
      <a
        href={buttonLink} 

        style={{
          textDecoration: "none",
        }}
        target="_Blank" // Ensures the link opens in the same window
      >
        <button>
         
          {buttonLabel}
          {icon && <FontAwesomeIcon icon={icon} />}
        </button>
      </a>
    </div>
  );
}

export function Input({ placeholder = "search" }) {
  return <input placeholder={placeholder}></input>;
}

export function SelectInput({ options = [], name, id }) {
  return (
    <select name={name} id={id}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
