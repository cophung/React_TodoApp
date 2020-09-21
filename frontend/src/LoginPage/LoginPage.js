import React, { useState } from "react";
import { connect } from "react-redux";

import { userActions } from "../_actions/user.actions";

function LoginPage({ loggingIn, login }) {
  const [valueForm, setValueForm] = useState({
    username: "",
    password: "",
    submitted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValueForm({ ...valueForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValueForm({ ...valueForm, submitted: true });
    const { username, password } = valueForm;
    if (username && password) {
      login(username, password);
    }
  };

  const { username, password } = valueForm;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

const mapStateToProps = (state) => {
  const { loggingIn } = state.authentication;
  return { loggingIn };
};

const actionCreators = {
  login: userActions.login,
};

const connectedLoginPage = connect(mapStateToProps, actionCreators)(LoginPage);

export { connectedLoginPage as LoginPage };
