import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from './components/';
import { Home, Cart } from './pages/';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart/:id?" exact component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
