import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext"
import Background from "./components/Background"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Background />
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}
