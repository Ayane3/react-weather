import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Toronto" />
        <footer>
          <a
            href="https://github.com/Ayane3/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Ayane Manuel
        </footer>
      </div>
    </div>
  );
}

export default App;
