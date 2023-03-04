// index.js file is the first file to be executed

// package.json -dependencies
import ReactDOM from "react-dom/client";

import "./index.css";

//  ./ means it's in the same folder
// ./App = ./App.js
// App is components
// 2. import the file
import App from "./App";

// the root of application, the main pace where the react application get rendered too
// the root of react application
const root = ReactDOM.createRoot(document.getElementById("root"));

// tell react what it should render
root.render(<App />);
