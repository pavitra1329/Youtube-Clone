import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Routes>
          {/* Route for search */}
          <Route
            path="/search/:searchTerm"
            element={<h1>Search page</h1>}
          />

          {/* Route for home */}
          <Route
            path="/"
            element={
              <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

