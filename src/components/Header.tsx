import { RiBook2Line } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="mt-6 md:mt-14">
        <div className="flex justify-between items-center">
          <RiBook2Line className="w-7 h-8 md:w-8 md:h-9 dark:text-gray" />
          <div className="flex items-center">
            <div className="flex justify-center items-center border-r-2 border-r-solid border-r-lightGray pr-3 md:pr-5">
              <p className="font-sans text-body-s md:text-body-m dark:text-lighter">Sans Serif</p>
              <RiArrowDownSLine className="w-6 h-6 text-purple ml-3 md:ml-5" />
            </div>
            <div className="ml-2 md:ml-5" onClick={toggleTheme}>
              <div
                className={`w-10 h-5 rounded-xl ml-2 flex flex-col justify-center ${
                  theme === "dark" ? "bg-purple items-end pr-1" : "bg-gray pl-1"
                }`}
              >
                <div className="w-[14px] h-[14px] bg-lighter rounded-full cursor-pointer "></div>
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
