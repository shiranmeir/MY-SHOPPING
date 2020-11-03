import React from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import Received from "./components/Received/Received.jsx";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/received" component={Received} />
          <Route path="/" component={Home} />
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
