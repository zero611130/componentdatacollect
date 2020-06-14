import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import HomePage from "./view/home"



function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={HomePage} />
      </Router>
    </div>
  )
}

export default App;
