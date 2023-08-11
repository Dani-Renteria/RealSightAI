import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Solution from "./pages/Solution";
import Team from "./pages/OurTeam";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          {console.log(Product)}
          <Route path="/product" exact element={<Product />} />
          <Route path="/solution" exact element={<Solution />} />
          <Route path="/ourteam" exact element={<Team />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/legalnotice" exact element={<Legal />} />
          <Route path="/privacy" exact element={<Privacy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
