import React from "react";

import "./forminput.styles.css";
const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="form-input-group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length > 0 ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
export default FormInput;
