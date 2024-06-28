import { RiBook2Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { IoMoonOutline } from "react-icons/io5";
import { useState } from "react";

interface HeaderProps {
  selectedFont: string;
  onFontChange: (font: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({
  selectedFont,
  onFontChange,
  isDarkMode,
  onToggleDarkMode,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="mt-6 md:mt-14">
      <div className="flex justify-between items-center">
        <RiBook2Line className="w-7 h-8 md:w-8 md:h-9 dark:text-gray" />
        <div className="flex items-center relative">
          <div
            className="flex justify-center items-center border-r-2 border-r-solid border-r-lightGray pr-3 md:pr-5 cursor-pointer"
            onClick={toggleDropdown}
          >
            <p className="font-sans text-body-s md:text-body-m dark:text-lighter">
              {selectedFont}
            </p>
            {dropdownOpen ? (
              <RiArrowUpSLine className="w-6 h-6 text-purple ml-3 md:ml-5" />
            ) : (
              <RiArrowDownSLine className="w-6 h-6 text-purple ml-3 md:ml-5" />
            )}
          </div>
          {dropdownOpen && (
            <div className="absolute md:w-[183px] md:pl-6 md:py-6 md:right-32 top-full mt-2 bg-white shadow-lg rounded-md dark:bg-dark dark:drop-shadow-2xl dark:shadow-purple">
              <p
                className="font-sans text-body-s md:text-body-m dark:text-lighter cursor-pointer p-2 hover:text-purple dark:hover:text-purple"
                onClick={() => onFontChange("Sans Serif")}
              >
                Sans Serif
              </p>
              <p
                className="font-sans text-body-s md:text-body-m dark:text-lighter cursor-pointer p-2 hover:text-purple dark:hover:text-purple"
                onClick={() => onFontChange("Serif")}
              >
                Serif
              </p>
              <p
                className="font-sans text-body-s md:text-body-m dark:text-lighter cursor-pointer p-2 hover:text-purple dark:hover:text-purple"
                onClick={() => onFontChange("Mono")}
              >
                Mono
              </p>
            </div>
          )}
          <div className="ml-2 md:ml-5" onClick={onToggleDarkMode}>
            <div
              className={`w-10 h-5 rounded-xl ml-2 flex flex-col justify-center ${
                isDarkMode ? "bg-purple items-end pr-1" : "bg-gray pl-1"
              }`}
            >
              <div className="w-[14px] h-[14px] bg-lighter rounded-full cursor-pointer"></div>
            </div>
          </div>
          <IoMoonOutline className="w-5 h-5 ml-3 md:ml-5 dark:text-purple" />
        </div>
      </div>
    </div>
  );
};

export default Header;
