import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/";
import { Home, Cart, PageNotFound } from "./pages/";

import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <section className="App-wrapper">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart/:id?" exact component={Cart} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </section>
    </div>
  );
}

export default App;
