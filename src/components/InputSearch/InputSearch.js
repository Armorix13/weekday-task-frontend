import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./Input.css";

const InputSearch = ({ height, width, placeholderText, onChange }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    onChange(e.target.value);
  };

  return (
    <TextField
      placeholder={placeholderText}
      value={search}
      onChange={handleChange}
      style={{
        height: height,
        width: width,
        borderRadius: "5px",
        color: "#E2E2E2",
      }}
    />
  );
};

export default InputSearch;
