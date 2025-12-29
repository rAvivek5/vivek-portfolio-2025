import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const html = document.documentElement
    html.classList.remove("light", "dark")
    html.classList.add(theme)
  }, [theme])

  function toggleTheme() {
    setTheme(prev => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
