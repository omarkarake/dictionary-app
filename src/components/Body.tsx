import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { IoMdPlay } from "react-icons/io";

const Body = () => {
  const [inputValue, setInputValue] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [borderColorRed, setBorderColorRed] = useState("");
  console.log(borderColorRed);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setBorderColor(value !== "" ? "border-purple" : ""); // Reset border purple color on typing
    setBorderColorRed(value !== "" ? "" : ""); // Reset border red color on typing
  };

  const handleSearchClick = () => {
    setBorderColorRed(inputValue === "" ? "border-red" : "");
    if (!inputValue) {
      setBorderColor("border-red");
    }
  };

  return (
    <>
      <div>
        <div className="mt-6 md:mt-[51px]">
          <div
            className={`w-[100%] h-12 py-4 px-6 md:p-6 flex justify-between items-center bg-light dark:bg-darker rounded-2xl ${
              borderColor ? `border-[1px] ${borderColor}` : ""
            }`}
          >
            <input
              type="text"
              className="w-[250px] md:w-[400px] font-bold text-[20px] dark:text-lighter outline-none border-none bg-transparent text-dark placeholder:opacity-25"
              placeholder="Search for any word…"
              onChange={handleInputChange}
              value={inputValue}
            />
            <RiSearchLine
              className="w-4 h-4 text-purple cursor-pointer"
              onClick={handleSearchClick}
            />
          </div>
          {borderColorRed ? (
            <p className="text-body-s md:text-heading-s text-red mt-2">
              Whoops, can’t be empty…
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="w-[100%] h-auto flex justify-between items-center mt-7">
          <div className="h-[100%] flex flex-col justify-between ">
            <p className="font-bold text-[32px] md:text-[64px] dark:text-lighter lg:text-heading-l">
              keyboard
            </p>
            <p className="text-body-m text-purple md:text-heading-m">
              /ˈkiːbɔːd/
            </p>
          </div>
          <div
            className="h-12 w-12 md:h-[75px] md:w-[75px] flex justify-center items-center cursor-pointer rounded-full"
            style={{ backgroundColor: "rgba(164, 69, 237, 0.25)" }}
          >
            <IoMdPlay className="w-[13px] h-[13px] md:w-[21px] md:h-[21px] text-purple " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
