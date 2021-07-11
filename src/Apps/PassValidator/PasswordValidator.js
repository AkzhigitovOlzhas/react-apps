import React from "react";
import "./PasswordValidator.css";
class PasswordValidator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value, count: event.target.value });
  }

  handleClick(event) {
    this.getRandPass();
    event.preventDefault();
  }

  getRandPass(len = 8) {
    let length = len ? len : 10;
    let string = "abcdefghijklmnopqrstuvwxyz";
    let numeric = "0123456789";
    let punctuation = "!@#$%^&*";
    let password = "";
    let character = "";
    while (password.length < length) {
      let entity1 = Math.ceil(string.length * Math.random() * Math.random());
      let entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
      let entity3 = Math.ceil(
        punctuation.length * Math.random() * Math.random()
      );
      let hold = string.charAt(entity1);
      hold = password.length % 2 === 0 ? hold.toUpperCase() : hold;
      character += hold;
      character += numeric.charAt(entity2);
      character += punctuation.charAt(entity3);
      password = character;
    }
    password = password
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .join("");
    this.setState({ value: password.substr(0, len) });
    return password.substr(0, len);
  }
  passwordValidator(password) {
    password = password.trim();
    let result = [];
    if (!/[A-Z]/g.test(password)) {
      result.push(
        "The string must contain at least 1 uppercase alphabetical character"
      );
    }
    if (!/[a-z]/g.test(password)) {
      result.push(
        "The string must contain at least 1 lowercase alphabetical character"
      );
    }
    if (!/[0-9]/g.test(password)) {
      result.push("The string must contain at least 1 numeric character");
    }
    if (!/[!@#$%^&*]/g.test(password)) {
      result.push("The string must contain at least one special character");
    }
    if (password.length < 8) {
      result.push("The string must be eight characters or longer");
    }
    return result;
  }
  render() {
    return (
      <div className="form">
        <div>
          <p>Password:</p>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}> Generate</button>
        </div>
        <h3>
          {this.passwordValidator(this.state.value).length === 0
            ? "Password is perfect!"
            : null}
        </h3>
        <ul>
          {this.passwordValidator(this.state.value).map((elem, i) => {
            return <li key={i}>{elem}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default PasswordValidator;
