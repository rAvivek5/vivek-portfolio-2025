import { Link } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"

export default function Navbar() {
  const { toggleTheme, theme } = useTheme()

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-10 py-6 flex justify-between items-center
      ${theme === "dark"
        ? "bg-black/60 backdrop-blur text-white"
        : "bg-white text-black border-b border-gray-200"
      }`}
    >
      <span className="font-semibold tracking-wide">VP</span>

      <div className="flex gap-8 text-sm items-center">
        <Link to="/" className="hover:opacity-70">HOME</Link>
        <Link to="/about" className="hover:opacity-70">ABOUT</Link>
        <Link to="/experience" className="hover:opacity-70">EXPERIENCE</Link>
        {/* <Link to="/work" className="hover:opacity-70">Work</Link> */}
        <Link to="/projects">PROJECTS</Link>
        <Link to="/contact" className="hover:opacity-70">CONTACT</Link>

        <button
          onClick={toggleTheme}
          className="ml-6 px-3 py-1 text-xs border rounded hover:opacity-70"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  )
}
