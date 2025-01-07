import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Button({ buttonLabel = "Button", icon, buttonLink }) {
  return (
    <div className="buttondiv" style={{ display: "inline-block" }}>
      <a
        href={buttonLink}  // The link is the `mailto:` link provided
        style={{
          textDecoration: "none",
        }}
        target="_blank"  // Ensures the link opens in a new tab if needed
        rel="noopener noreferrer" // Security measure for external links
      >
        <button style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {icon && <FontAwesomeIcon icon={icon} />} {/* Render the icon if provided */}
          {buttonLabel} {/* Display the button label */}
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
