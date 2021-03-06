import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import {BrowserRouter} from "react-router-dom";
import config from "./auth_config.json";
import history from "./utils/history";
import 'bootstrap/dist/css/bootstrap.min.css';

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo
      ? appState.returnTo
      : window.location.pathname
  );
};

ReactDom.render(
  <BrowserRouter>
    <Auth0Provider
      domain={config.domain}
      clientId={config.clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={config.audience}
      scope={config.scope}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>,
    document.getElementById("root"));
