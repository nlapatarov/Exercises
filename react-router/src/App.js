import React from "react"
import './App.css';
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <h1>Home page</h1>
)

export default App;
