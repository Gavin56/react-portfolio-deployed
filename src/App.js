import "./App.css";
import React from "react";
import Particle from "./components/Particles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DocumentTitle from "react-document-title"

function App() {
  return (
    <div>
      <DocumentTitle title="Gavin O'Brien - Full Stack Developer">
      <Router basename={process.env.PUBLIC_URL}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Particle />

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            {/* You can render <Route> and <NavTabs /> here */}
              <Header></Header>
              <Footer></Footer>
          </div>
        </div>
      </Router>
      </DocumentTitle>
    </div>
  );
}

export default App;
