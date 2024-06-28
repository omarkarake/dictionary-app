import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { IoMdPlay } from "react-icons/io";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const Body = () => {
  const [inputValue, setInputValue] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [borderColorRed, setBorderColorRed] = useState("");
  const [playHoverEffect, setPlayHoverEffect] = useState(false);
  // console.log(playHoverEffect);

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

  const handleMouseEnterPlay = () => {
    setPlayHoverEffect(true);
  };

  const handleMouseLeavePlay = () => {
    setPlayHoverEffect(false);
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
          {/* what to be rendered after fetching--------------------------------------- */}
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
            style={{
              backgroundColor: `rgba(164, 69, 237, ${
                playHoverEffect ? 1 : 0.25
              })`,
            }}
            onMouseEnter={handleMouseEnterPlay}
            onMouseLeave={handleMouseLeavePlay}
          >
            {playHoverEffect ? (
              <IoMdPlay className="w-[13px] h-[13px] md:w-[21px] md:h-[21px] text-lighter " />
            ) : (
              <IoMdPlay className="w-[13px] h-[13px] md:w-[21px] md:h-[21px] text-purple " />
            )}
          </div>
        </div>
        <div className="mt-[34px]">
          <div className="flex justify-between items-center">
            <p className="font-bold text-[18px] md:text-heading-m lg:font-bold lg:italic dark:text-lighter">
              noun
            </p>
            <div className="w-[100%] h-[1px] bg-lightGray ml-[26px] dark:bg-darkGray"></div>
          </div>
          <p className="mt-[35px] text-gray font-normal md:text-heading-s">
            Meaning
          </p>
          <ul className="mt-[17px] md:mt-[27px]">
            <li className="flex">
              <div className="h-[100%] mt-2">
                <div className="w-[5px] h-[5px] bg-purple rounded-full"></div>
              </div>
              <div>
                <p className="ml-[25px] text-dark text-[15px] leading-6 md:text-body-m dark:text-lighter">
                  (etc.) A set of keys used to operate a typewriter, computer
                  etc.
                </p>
              </div>
            </li>
            <li className="flex mt-4">
              <div className="h-[100%] mt-2">
                <div className="w-[5px] h-[5px] bg-purple rounded-full"></div>
              </div>
              <div>
                <p className="ml-[25px] text-dark text-[15px] leading-6 md:text-body-m dark:text-lighter">
                  A component of many instruments including the piano, organ,
                  and harpsichord consisting of usually black and white keys
                  that cause different tones to be produced when struck.
                </p>
              </div>
            </li>
            <li className="flex mt-4">
              <div className="h-[100%] mt-2">
                <div className="w-[5px] h-[5px] bg-purple rounded-full"></div>
              </div>
              <div>
                <p className="ml-[25px] text-dark text-[15px] leading-6 md:text-body-m dark:text-lighter">
                  A device with keys of a musical keyboard, used to control
                  electronic sound-producing devices which may be built into or
                  separate from the keyboard device.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-6 flex gap-10">
          <p className="text-base text-gray md:text-heading-s md:text-[20px]">
            Synonyms
          </p>
          <p className="font-bold text-purple">electronic keyboard</p>
        </div>
        <div className="mt-[35px] md:mt-[43px]">
          <div className="flex justify-between items-center">
            <p className="font-bold text-[18px] md:text-heading-m lg:font-bold lg:italic dark:text-lighter">
              verb
            </p>
            <div className="w-[100%] h-[1px] bg-lightGray ml-[26px] dark:bg-darkGray"></div>
          </div>
        </div>
        <div>
          <p className="mt-[35px] text-gray font-normal md:text-heading-s">
            Meaning
          </p>
          <ul className="mt-[17px] md:mt-[27px]">
            <li className="flex">
              <div className="h-[100%] mt-2">
                <div className="w-[5px] h-[5px] bg-purple rounded-full"></div>
              </div>
              <div>
                <p className="ml-[25px] text-dark text-[15px] leading-6 md:text-body-m dark:text-lighter">
                  To type on a computer keyboard.
                </p>
                <p className="ml-[25px] mt-[14px] text-gray text-[15px] leading-6  md:text-body-m">
                  “Keyboarding is the part of this job I hate the most.”
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-[100%] h-[1px] bg-lightGray mt-8 md:mt-[39px] dark:bg-darkGray"></div>
        <div className="mt-[24px] md:mt-[22px] md:flex md:gap-6">
          <p className="text-gray underline text-body-s cursor-pointer">
            Source
          </p>
          <div className="flex items-end cursor-pointer">
            <p className="text-dark text-body-s underline mt-2 md:mt-0 dark:text-lighter">
              https://en.wiktionary.org/wiki/keyboard
            </p>
            <LiaExternalLinkAltSolid className="ml-2 dark:text-gray" />
          </div>
        </div>
        {/* what to be rendered when there is no word---------------------------------------------------- */}
        {/* <div>
            <div className="flex flex-col items-center">
              <span
                className="mt-[132px]"
                role="img"
                aria-label="rocket"
                style={{
                  fontSize: "64px",
                  width: "64px",
                  height: "64px",
                  display: "inline-block",
                  textAlign: "center",
                  lineHeight: "64px",
                }}
              >
                😕
              </span>
              <p className="font-bold text-[20px] mt-11 dark:text-lighter">
                No Definitions Found
              </p>
              <p className="text-gray text-body-m mt-6 text-center mb-[250px]">
                Sorry pal, we couldn't find definitions for the word you were
                looking for. You can try the search again at later time or head
                to the web instead.
              </p>
            </div>
          </div> */}
      </div>
    </>
  );
};

export default Body;
