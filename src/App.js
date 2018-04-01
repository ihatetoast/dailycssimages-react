import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Css from "./components/Css";
import Svgs from "./components/Svgs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/css" component={Css} />
      <Route exact path="/svgs" component={Svgs} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </div>
  </Router>
);

export default App;
