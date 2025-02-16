"use client";
import { useState } from "react";
import { FiSearch, FiList, FiGrid } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";

export default function Home() {
  const [view, setView] = useState<"list" | "board">("board");

  return (
    <div className="min-h-screen w-full bg-[#2e2f35] text-white p-6">
      {/* Header */}
      <div className="bg-[#2e2f35] rounded-t-2xl p-4 flex flex-col md:flex-row justify-between items-center ">
        <h1 className="text-xl font-semibold mb-3 md:mb-0 md:text-4xl">Tender Tasks</h1>

        {/* Search Bar */}
        <div className="flex items-center w-full md:w-96 relative">
          <input
            type="text"
            placeholder="Search for Tenders"
            className="w-full bg-[#000000] text-white px-4 py-2 rounded-full focus:outline-none"
          />
          <FiSearch className="absolute right-12 top-3 text-gray-400" size={18} />
          <FaRegBell className="ml-4 hidden md:block cursor-pointer" size={20} />
        </div>
      </div>

      <hr className="my-4" />

      {/* Menu Bar */}
      <div className="flex flex-col md:flex-row justify-between bg-[#1E1E1E] p-4 rounded-full items-center">
        <div className="flex w-full md:w-auto justify-center md:justify-start space-x-4">
          <button
            className={`flex items-center px-4 py-2 rounded-lg ${
              view === "list" ? "bg-yellow-500 text-black" : "bg-[#222]"
            }`}
            onClick={() => setView("list")}
          >
            <FiList className="mr-2" size={18} /> List View
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-lg ${
              view === "board" ? "bg-yellow-500 text-black" : "bg-[#222]"
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
    </div>
  );
}
