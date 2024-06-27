// src/App.tsx
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="w-screen flex items-center justify-center dark:bg-dark">
        <div className="w-[90vw] md:w-[88vw] lg:w-[60vw] py-2 md:py-4 lg:py-8 bg-lighter dark:bg-dark">
          <Header />
          <Body />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
