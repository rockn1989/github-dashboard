import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Header, ErrorBoundary } from "./components/";
import { Home, Cart, PageNotFound } from "./pages/";

import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <section className="App-wrapper">
        <ErrorBoundary>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart/:name" render={({match, location, history}) => {
              /* console.log(match, location, history) */
              const {pathname} = location;
              return <Cart itemName={pathname} />
            }} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
        </ErrorBoundary>
      </section>
    </div>
  );
}

export default App;
