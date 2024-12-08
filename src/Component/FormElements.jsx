

export function Button({buttonLabel = "Button", icon}){
return(
    <div className="buttondiv">
    <button>
        {buttonLabel}
        {icon}
    </button>
    </div>
)
}

export  function Input({placeholder = "search"}){
return(
    <input
    placeholder={placeholder}

    ></input>
)
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
  
