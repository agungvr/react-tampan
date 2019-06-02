import React from "react";
import ReactDOM from "react-dom";
import AppKernel from "./app";
import Root from "./containers/root";
import * as serviceWorker from "./config/serviceWorker";
import "./assets/styles/index.scss";
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://1bbe3e1a9e07400e811eced810fbf092@sentry.io/1455047"
});

const App = AppKernel(Root);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register({
  onUpdate: registration => {
    const waitingServiceWorker = registration.waiting;

    if (waitingServiceWorker) {
      waitingServiceWorker.addEventListener("statechange", event => {
        if (event.target.state === "activated") {
          window.location.reload();
        }
      });
      waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
    }
  }
});
