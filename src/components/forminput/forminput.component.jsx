import React from "react";

import "./forminput.styles.css";
class FormInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordViewable: false,
    };
  }

  Clicked = (event) => {
    this.setState({ passwordViewable: !this.state.passwordViewable });
  };

  render() {
    const { handleChange, label, type, ...otherProps } = this.props;
    return (
      <div className="form-input-group">
        <input
          className={`${type === "password" ? "password" : null} form-input`}
          onChange={handleChange}
          type={this.state.passwordViewable ? "text" : type}
          {...otherProps}
        />
        {type === "password" ? (
          <input
            type="checkbox"
            name="passwordViewable"
            onChange={this.Clicked}
          />
        ) : null}
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
  }
}
export default FormInput;
