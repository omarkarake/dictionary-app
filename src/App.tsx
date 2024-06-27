import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-screen flex items-center justify-center">
      <div className="w-[90vw] md:w-[88vw] lg:w-[60vw] py-2 md:py-4 lg:py-8 ">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
