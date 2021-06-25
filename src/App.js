import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Coworker from "./Coworker";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/coworker" component={Coworker} />
      </Switch>
    </Router>
  );
}

export default App;
