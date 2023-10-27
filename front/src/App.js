import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import CreateTask from "./components/Create/CreateTask";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/tasks" element={<LandingPage />} />
          <Route path="/create" element={<CreateTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
