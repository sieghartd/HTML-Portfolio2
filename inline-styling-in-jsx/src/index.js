import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

customStyle.color = "blue";

ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));
