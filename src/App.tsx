import { useState, useEffect } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  // Check system preference for dark mode
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [selectedFont, setSelectedFont] = useState("Sans Serif");
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  const handleFontChange = (font: string) => {
    setSelectedFont(font);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleColorSchemeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleColorSchemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleColorSchemeChange);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--font-family",
      selectedFont === "Sans Serif"
        ? "sans-serif, Inter"
        : selectedFont === "Serif"
        ? "serif, Lora"
        : "monospace, Inconsolata"
    );
  }, [selectedFont]);

  return (
    <div className={`w-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="w-[100%] flex items-center justify-center dark:bg-darkest">
        <div className={`w-[90vw] md:w-[88vw] lg:w-[60vw] py-2 md:py-4 lg:py-8 bg-lighter dark:bg-darkest`}>
          <Header
            selectedFont={selectedFont}
            onFontChange={handleFontChange}
            isDarkMode={isDarkMode}
            onToggleDarkMode={toggleDarkMode}
          />
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
