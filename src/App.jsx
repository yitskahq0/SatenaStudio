import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Pages
import Home from "./Pages/Home";
import ProjectPage from "./Pages/ProjectPage";  
import ProjectDetail from "./Pages/ProjectDetail";
import About from "./Pages/About";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f8f9fa] flex flex-col">

        {/* Selalu tampil */}
        <Navbar />

        {/* Konten halaman */}
        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />

          </Routes>
        </div>

        {/* Selalu tampil */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
