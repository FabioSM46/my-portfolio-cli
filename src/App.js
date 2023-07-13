import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./pages/HomePage/HomePage";
import { AboutPage } from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <div className="App font-ubuntu-mono">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
