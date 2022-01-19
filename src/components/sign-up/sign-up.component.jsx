import React from "react";
import "./sign-up.styles.css";

import FormInput from "../forminput/forminput.component";
import CustomButton from "../custombutton/custombutton.component";
class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmation: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "", confirmation: "", name: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            name="confirmation"
            type="password"
            value={this.state.confirmation}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit" value="Submit Form">
            SIGN UP
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
