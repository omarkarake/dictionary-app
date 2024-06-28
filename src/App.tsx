import { useState, useEffect } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  const [selectedFont, setSelectedFont] = useState("Sans Serif");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleFontChange = (font: string) => {
    setSelectedFont(font);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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
    <div
      className={`w-screen flex items-center justify-center ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div
        className={`w-[90vw] md:w-[88vw] lg:w-[60vw] py-2 md:py-4 lg:py-8 bg-lighter dark:bg-dark`}
      >
        <Header
          selectedFont={selectedFont}
          onFontChange={handleFontChange}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />
        <Body />
      </div>
    </div>
  );
}

export default App;
