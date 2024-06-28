import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

const Body = () => {
  const [inputValue, setInputValue] = useState("");
  const [borderColor, setBorderColor] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setBorderColor(value !== "" ? "border-purple" : ""); // Reset border color on typing
  };

  const handleSearchClick = () => {
    if (!inputValue) {
      setBorderColor("border-red");
    }
  };

  return (
    <>
      <div className="mt-6 md:mt-[51px]">
        <div
          className={`w-[100%] h-12 py-4 px-6 md:p-6 flex justify-between items-center bg-light dark:bg-darker rounded-2xl ${
            borderColor ? `border-[1px] ${borderColor}` : ""
          }`}
        >
          <input
            type="text"
            className="w-[250px] md:w-[400px] font-bold text-[20px] outline-none border-none bg-transparent text-dark placeholder:opacity-25"
            placeholder="Search for any word…"
            onChange={handleInputChange}
            value={inputValue}
          />
          <RiSearchLine
            className="w-4 h-4 text-purple cursor-pointer"
            onClick={handleSearchClick}
          />
        </div>
      </div>
    </>
  );
};

export default Body;
