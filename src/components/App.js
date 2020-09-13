import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About } from "pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/about" />
      </Switch>
    </div>
  );
}

export default App;
