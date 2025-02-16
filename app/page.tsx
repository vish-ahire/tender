"use client";
import { useState } from "react";
import { FiSearch, FiList, FiGrid } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import BoardView from "./_component/Board";
import ListView from "./_component/ListView";

export default function Home() {
  const [view, setView] =  useState<"list" | "board">("board");

  return (
    <div className="min-h-screen w-full bg-[#2e2f35] text-white p-6 overflow-x-hidden">
      {/* Header */}
      <div className="bg-[#2e2f35] rounded-t-2xl p-2 flex flex-col md:flex-row justify-between items-center ">
        <h1 className="text-xl font-semibold mb-3 md:mb-0 md:text-3xl">Tender Tasks</h1>

        {/* Search Bar */}
        <div className="flex items-center w-full md:w-96 relative">
          <input
            type="text"
            placeholder="Search for Tenders"
            className="w-full bg-[#000000] text-white px-4 py-1 rounded-full focus:outline-none"
          />
          <FiSearch className="absolute right-12 top-2 text-gray-400" size={18} />
          <FaRegBell className="ml-4 hidden md:block cursor-pointer" size={20} />
        </div>
      </div>

      <hr className="my-3 " />

      {/* Menu Bar */}
      <div className="flex flex-col md:flex-row justify-between bg-[#1E1E1E] p-4 rounded-full items-center gap-4
                      md:rounded-full  ">
        <div className="flex w-full md:w-auto justify-center md:justify-start space-x-4
                        mb-3 md:mb-0">
          <button
            className={`flex items-center px-4 py-2 rounded-lg transition-all  ${
              view === "list" ? "bg-yellow-500 text-black" : "bg-[#222] hover:bg-[#333]"
            }`}
            onClick={() => setView("list")}
          >
            <FiList className="mr-2" size={18} /> List View
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-lg transition-all  ${
              view === "board" ? "bg-yellow-500 text-black" : "bg-[#222] hover:bg-[#333]"
            }`}
            onClick={() => setView("board")}
          >
            <FiGrid className="mr-2" size={18} /> Board View
          </button>
        </div>
        
        <div className="flex space-x-3 mt-3 md:mt-0">
          <button className="bg-[#222] px-4 py-2 rounded-lg hover:bg-[#333] text-sm">
            View Tender Details
          </button>
          <button className="bg-[#222] px-4 py-2 rounded-lg hover:bg-[#333] text-sm">
            Columns
          </button>
        </div>
      </div>
      <div className="mt-6">{view === "board" ? <BoardView /> : <ListView />}</div>
    </div>
  );
}
