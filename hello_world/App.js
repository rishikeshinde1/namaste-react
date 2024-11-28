//const header = React.createElement("h1", {id:"header", xyz: "abc"}, "Hello World From ReactJS!");

const parent = React.createElement("div", {id:"parent"},
[ 
    React.createElement("div", {id:"child"}, 
    [React.createElement("h1", {}, "I am an h1 Tag"), React.createElement("h2", {}, "I am an h2 Tag")]),  
    React.createElement("div", {id:"child1"}, 
    [React.createElement("h1", {}, "I am an h1 Tag"), React.createElement("h2", {}, "I am an h2 Tag")])]
);
    
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);

root.render(parent);
