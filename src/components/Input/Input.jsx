import React from "react";
import "./Input.css";

export const Input = ({
  id,
  type,
  title,
  error,
  value,
  placeholder,
  updateValue,
  handleOnFocus,
}) => {
  return (
    <div className="flex-column mb-3">
      <label htmlFor={id}>{title}</label>
      <input
        required
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onFocus={handleOnFocus}
        onChange={(event) => updateValue(event, id)}
        className="mt-1 py-1 px-2 text-base border rounded-sm"
      />

      {error && (
        <div className="error validation-msg flex-row items-center mt-1">
          <span className="material-icons-outlined mr-1">error_outline</span>{" "}
          {error}
        </div>
      )}
    </div>
  );
};

Input.defaultProps = {
  id: "",
  type: "",
  title: "",
  error: "",
  value: "",
  placeholder: "",
  updateValue: () => {},
  handleOnFocus: () => {},
};
