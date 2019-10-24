import React from "react";
import Header from "./components/Header";
//import logo from './logo.svg';
import resumeData from './resumeData';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData} />
    </div>
  );
}

export default App;
