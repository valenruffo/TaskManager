import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import CreateTask from "./pages/Create/CreateTask";
//import LoginButton from "./components/LoginButton";
//import LogoutButton from "./components/LogoutButton";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar path="/" element={<Navbar />} />

        <Routes>
          <Route path="/tasks" element={<LandingPage />} />
          <Route path="/create" element={<CreateTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
