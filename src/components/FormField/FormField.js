import React from "react";
import "./inputform.css";

const FormField = ({ label, id, name, placeholder, size }) => {
  return (
    <div className={"flex"}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        className="form-input"
        placeholder={placeholder}
        size={size}
        style={{ width: size ? `${size}px` : "auto" }}
      />
    </div>
  );
};

export default FormField;
