import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyAYyj0ytoLumRZ2MJMNgNjDNyIY3Dfbb8U";

// creat a new component.
// This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's generated HTML and and put it on the page
//(in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
