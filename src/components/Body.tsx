import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { IoMdPlay } from "react-icons/io";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

interface Phonetic {
  text: string;
  audio: string;
}

interface Definition {
  definition: string;
  example?: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
}

interface DictionaryData {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  sourceUrls: string[];
}

interface ErrorData {
  message: string;
  resolution: string;
  title: string;
}

const Body: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [data, setData] = useState<DictionaryData | null>(null);
  const [dataWhenFetchIsWrong, setDataWhenFetchIsWrong] = useState<ErrorData | null>(null);
  const [borderColor, setBorderColor] = useState<string>("");
  const [borderColorRed, setBorderColorRed] = useState<string>("");
  const [playHoverEffect, setPlayHoverEffect] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setBorderColor(value !== "" ? "border-purple" : "");
    setBorderColorRed(value !== "" ? "" : "");
  };

  const handleSearchClick = async () => {
    setBorderColorRed(inputValue === "" ? "border-red" : "");
    if (!inputValue) {
      setBorderColor("border-red");
      return;
    }
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
      );
      const data = await response.json();
      if ("message" in data) {
        setDataWhenFetchIsWrong(data);
        setData(null);
      } else {
        setDataWhenFetchIsWrong(null);
        setData(data[0]);
      }
    } catch (error) {
      console.error("Error fetching the data:", error);
      setData(null);
    }
  };

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      await handleSearchClick();
    }
  };

  const handleMouseEnterPlay = () => {
    setPlayHoverEffect(true);
  };

  const handleMouseLeavePlay = () => {
    setPlayHoverEffect(false);
  };

  const handlePlayAudio = () => {
    if (data?.phonetics) {
      const audioUrl = data.phonetics.find(
        (phonetic: Phonetic) => phonetic.audio
      )?.audio;
      if (audioUrl) {
        const audio = new Audio(audioUrl);
        audio.play();
      }
    }
  };

  return (
    <>
      <div className={`${!dataWhenFetchIsWrong && !data ? "h-screen" : ""}`}>
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
              onKeyPress={handleKeyPress}
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
        {data && (
          <>
            <div className="w-[100%] h-auto flex justify-between items-center mt-7">
              <div className="h-[100%] flex flex-col justify-between ">
                <p className="font-bold text-[32px] md:text-[64px] dark:text-lighter lg:text-heading-l">
                  {data.word}
                </p>
                <p className="text-body-m text-purple md:text-heading-m">
                  {data.phonetic}
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
                onClick={handlePlayAudio}
              >
                {playHoverEffect ? (
                  <IoMdPlay className="w-[13px] h-[13px] md:w-[21px] md:h-[21px] text-lighter " />
                ) : (
                  <IoMdPlay className="w-[13px] h-[13px] md:w-[21px] md:h-[21px] text-purple " />
                )}
              </div>
            </div>
            {data.meanings.map((meaning: Meaning, index: number) => (
              <div key={index} className="mt-[34px]">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-[18px] md:text-heading-m lg:font-bold lg:italic dark:text-lighter">
                    {meaning.partOfSpeech}
                  </p>
                  <div className="w-[100%] h-[1px] bg-lightGray ml-[26px] dark:bg-darkGray"></div>
                </div>
                <p className="mt-[35px] text-gray font-normal md:text-heading-s">
                  Meaning
                </p>
                <ul className="mt-[17px] md:mt-[27px]">
                  {meaning.definitions.map(
                    (definition: Definition, defIndex: number) => (
                      <li key={defIndex} className="flex mt-4">
                        <div className="h-[100%] mt-2">
                          <div className="w-[5px] h-[5px] bg-purple rounded-full"></div>
                        </div>
                        <div>
                          <p className="ml-[25px] text-dark text-[15px] leading-6 md:text-body-m dark:text-lighter">
                            {definition.definition}
                          </p>
                          {definition.example && (
                            <p className="ml-[25px] mt-[14px] text-gray text-[15px] leading-6  md:text-body-m">
                              “{definition.example}”
                            </p>
                          )}
                        </div>
                      </li>
                    )
                  )}
                </ul>
                {meaning.synonyms.length > 0 && (
                  <div className="mt-6 flex gap-10">
                    <p className="text-base text-gray md:text-heading-s md:text-[20px]">
                      Synonyms
                    </p>
                    <p className="font-bold text-purple">
                      {meaning.synonyms.join(", ")}
                    </p>
                  </div>
                )}
              </div>
            ))}
            <div className="w-[100%] h-[1px] bg-lightGray mt-8 md:mt-[39px] dark:bg-darkGray"></div>
            <div className="mt-[24px] md:mt-[22px] md:flex md:gap-6">
              <p className="text-gray underline text-body-s cursor-pointer">
                Source
              </p>
              <div className="flex items-end cursor-pointer">
                <a
                  href={data.sourceUrls[0]}
                  className="text-dark text-body-s underline mt-2 md:mt-0 dark:text-lighter"
                >
                  {data.sourceUrls[0]}
                </a>
                <LiaExternalLinkAltSolid className="ml-2 dark:text-gray" />
              </div>
            </div>
          </>
        )}
        {dataWhenFetchIsWrong && (
          <div>
            <div className="flex flex-col items-center">
              <span
                className="mt-[132px]"
                role="img"
                aria-label="sad-face"
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
                {dataWhenFetchIsWrong.title}
              </p>
              <p className="text-gray text-body-m mt-6 text-center mb-[150px] lg:mb-[80px]">
                {dataWhenFetchIsWrong.message} {dataWhenFetchIsWrong.resolution}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Body;
