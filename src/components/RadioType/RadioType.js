import React, { useState } from "react";
import "./style.css";

export const RadioField = ({ label, options }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="field">
      <div className="maxWidth">
        <div className="form-label">{label}</div>
      </div>
      <div className="radio-options">
        {options.map((option, index) => (
          <label key={index} className="radio-label">
            <input
              type="radio"
              name="filed"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <span className="small-text">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
