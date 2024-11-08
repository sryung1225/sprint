"use client";
import { useState } from "react";

type SearchOptionType = "username" | "URL";

export default function Home() {
  const [searchOption, setSearchOption] =
    useState<SearchOptionType>("username");
  const [showSearchOption, setShowSearchOption] = useState<boolean>(false);
  const onChangeOption = (option: SearchOptionType) => {
    setSearchOption(option);
    setShowSearchOption(false);
  };
  return (
    <div className="flex flex-col items-center h-[100dvh]">
      <header className="flex justify-between items-center w-full max-w-[1000px] h-20 px-10">
        <div className="flex gap-4">
          <span className="inline-block w-6 h-6 bg-gradient-to-tr from-[#096BDE] via-[#096BDE] via-30% to-[#DDF1FF] rounded-full"></span>
          {/* <span className="inline-block w-6 h-6 bg-[linear-gradient(45deg,_#096BDE,_#096BDE_30%,_#DDF1FF)] rounded-full"></span> */}
          <h1 className="font-semibold">Devmarizer</h1>
        </div>
        <button
          className="inline-block w-4 h-4 bg-black"
          type="button"
          aria-label="테마토글버튼"
        ></button>
      </header>
      <main className="w-full max-w-[560px]">
        <div className="text-4xl font-extrabold bg-gradient-to-r from-[#15C064]/10 to-[#00D1FF]/10 text-black">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#15C064] to-[#00D1FF]">
            GitHub Developer Summarizer
          </h2>
        </div>
        <form className="w-full my-4">
          <label className="block">GitHub Profile</label>
          <div className="relative flex border-solid border-[1px] border-gray-200 rounded-lg">
            <button
              className="w-24 h-10 p-2 border-r-[1px]"
              type="button"
              onClick={() => setShowSearchOption(!showSearchOption)}
            >
              {searchOption}
            </button>
            {showSearchOption && (
              <ul className="absolute top-10 left-0 inline-block w-24 bg-white border-[1px] border-gray-200 rounded-lg">
                <li>
                  <button
                    className="w-full p-2 text-center"
                    onClick={() => onChangeOption("username")}
                    type="button"
                  >
                    username
                  </button>
                </li>
                <li>
                  <button
                    className="w-full p-2 text-center"
                    onClick={() => onChangeOption("URL")}
                    type="button"
                  >
                    URL
                  </button>
                </li>
              </ul>
            )}
            <input
              className="flex-1 p-2"
              type="text"
              placeholder={
                searchOption === "username"
                  ? "E.g. amylase or jechol"
                  : "https://github.com/usename-to-summarize"
              }
            />
          </div>
        </form>
        <button
          className="w-full h-12 bg-blue-600 text-white font-bold rounded-lg"
          type="button"
        >
          Summarize
        </button>
      </main>
    </div>
  );
}
