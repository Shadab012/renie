import Header from "./components/Header";
import "./assets/css/style.css";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Reniebin from "./pages/RenieBin/Reniebin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RenieHub from "./pages/RenieHub/RenieHub";
import RenieApp from "./pages/RenieApp/RenieApp";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reniebin" element={<Reniebin />} />
          <Route path="/reniehub" element={<RenieHub />} />
          <Route path="/renieapp" element={<RenieApp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
