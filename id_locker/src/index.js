import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-ch4vultf2jcs0mw7.uk.auth0.com"
    clientId="MkmmWmgzMVkQujdEzMdHzM9TvS3eHujU"
    redirectUri={window.location.origin}
    audience="https://dev-ch4vultf2jcs0mw7.uk.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  > 
  <BrowserRouter>
    <App /> {/* The various pages will be displayed by the `Main` component. */}
  </BrowserRouter>
  </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();