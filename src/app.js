global.jQuery = require("jquery");
require("bootstrap");
import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom";
import "./app.scss";

const App = () => (
    <div>
        <h1>{"Hello world"}</h1>
    </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
