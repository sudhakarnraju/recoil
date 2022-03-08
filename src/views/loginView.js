import React, { useState } from "react";
//import { connect } from "react-redux";
import { Link } from "react-router-dom";

//material-ui
import { Button, Paper, TextField } from "@material-ui/core";

//app modules
//import { authenticate } from "../controllers/loginController";
//import ServiceStatusView from "./serviceStatusView";
//import { clearError } from "../controllers/serviceStatusController";

/**
 * Login View. Does username , password authentication
 */
function LoginView() {
  const [loginState, setLoginState] = useState({
    userName: null,
    password: null,
    userNameError: false,
    passwordError: false,
  });

  const onFieldChange = ({ target }, field) => {
    setLoginState({
      ...loginState,
      [field]: target.value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault(); //stop reloading of page
    const { userName, password } = loginState;

    let userNameError = false,
      passwordError = false;
    if (!userName) userNameError = true;
    if (!password) passwordError = true;
    setLoginState({ ...loginState, userNameError, passwordError });
    if (userNameError || passwordError) return;
    //authenticate(userName, password);
  };
  const { userNameError, passwordError } = loginState;
  const classes = {};
  console.log({ loginState });
  return (
    <div className="loginView">
      <Paper className="paperWrapper">
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <div>
            <TextField
              required
              id="userName"
              fullWidth={true}
              error={userNameError}
              label="User Name"
              onChange={(e) => onFieldChange(e, "userName")}
            />
          </div>
          <div>
            <TextField
              id="password"
              required
              error={passwordError}
              label="Password"
              type="password"
              fullWidth={true}
              onChange={(e) => onFieldChange(e, "password")}
            />
          </div>
          <div className="actionPanel">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="loginButton"
            >
              Login
            </Button>
            <Link to="/registration">New User? Click here to register</Link>
          </div>
        </form>
      </Paper>
    </div>
  );
}

export default LoginView;
