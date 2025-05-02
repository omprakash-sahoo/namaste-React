import React from "react";
import ReactDOM from "react-dom/client"; // Updated import

/*
*<div id= 'parent'>
    <div d='child'> 
        h1
        h2
    </div>
    <div d='child2'> 
        h1
        h2
    </div>
</div>

*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a React Element and a js Object"),
    React.createElement("h2", {}, "I am a React Element and a js Object"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a React Element and a js Object"),
    React.createElement("h2", {}, "I am a React Element and a js Object"),
  ]),
]);

// let headings = React.createElement(
//   "h1",
//   { className: "headings" },
//   "Hello Omm"
// );
// console.log(parent);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
