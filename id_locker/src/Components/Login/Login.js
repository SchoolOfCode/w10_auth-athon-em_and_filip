import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './Login.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="signup-button" onClick={() => loginWithRedirect()}>Sign up/Log In</button>;
};

export default LoginButton;