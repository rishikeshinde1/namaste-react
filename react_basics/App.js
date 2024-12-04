import React from "react";
import ReactDOM from "react-dom/client";


//const header = React.createElement("h1", {id:"head"}, "Namaste ReactJS");


//JSX Element
//const JSXheader = <h1 id="header">Namaste React from JSX 🚀</h1>

const Jsxheader = () => <h1 id="header">Namaste React from JSX 🚀</h1>;

//console.log('header', header);
//console.log('jsxHeader', Jsxheader);


const Headercomponent = () => (
<div className="container">
{Jsxheader()}
<Jsxheader />
<Jsxheader></Jsxheader>
<h2 className="header">Namaste React from React Functional Component</h2>
</div>
); 




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headercomponent />);

