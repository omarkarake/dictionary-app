import { RiBook2Line, RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Sans Serif");

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleFontChange = (font: string) => {
    setSelectedFont(font);
    setDropdownOpen(false);
  };

  return (
    <>
      <div className="mt-6 md:mt-14">
        <div className="flex justify-between items-center">
          <RiBook2Line className="w-7 h-8 md:w-8 md:h-9 dark:text-gray" />
          <div className="flex items-center relative">
            <div
              className="flex justify-center items-center border-r-2 border-r-solid border-r-lightGray pr-3 md:pr-5 cursor-pointer"
              onClick={toggleDropdown}
            >
              <p className="text-body-s md:text-body-m dark:text-lighter">
                {selectedFont}
              </p>
              {dropdownOpen ? (
                <RiArrowUpSLine className="w-6 h-6 text-purple ml-3 md:ml-5" />
              ) : (
                <RiArrowDownSLine className="w-6 h-6 text-purple ml-3 md:ml-5" />
              )}
            </div>
            {dropdownOpen && (
              <div className="absolute top-full mt-2  bg-white dark:bg-darkGray shadow-md rounded-md">
                <p
                  className="text-body-s md:text-body-m dark:text-lighter cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => handleFontChange("Sans Serif")}
                >
                  Sans Serif
                </p>
                <p
                  className="text-body-s md:text-body-m dark:text-lighter cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => handleFontChange("Serif")}
                >
                  Serif
                </p>
                <p
                  className="text-body-s md:text-body-m dark:text-lighter cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => handleFontChange("Mono")}
                >
                  Mono
                </p>
              </div>
            )}
            <div className="ml-2 md:ml-5" onClick={toggleTheme}>
              <div
                className={`w-10 h-5 rounded-xl ml-2 flex flex-col justify-center ${
                  theme === "dark" ? "bg-purple items-end pr-1" : "bg-gray pl-1"
                }`}
              >
                <div className="w-[14px] h-[14px] bg-lighter rounded-full cursor-pointer"></div>
              </div>
            </div>
            <IoMoonOutline className="w-5 h-5 ml-3 md:ml-5 dark:text-purple" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
