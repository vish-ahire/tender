'use client';
import { JSX, useState } from 'react';
import { FiMenu, FiSettings } from 'react-icons/fi';
import { SlGraph } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { FaTasks } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={
        `h-screen bg-black text-white flex flex-col p-4 transition-all ${isOpen ? 'w-64' : 'w-20'}
        `
      }
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className={`text-xl font-bold ${!isOpen ? 'hidden' : ''}`}></h1>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white focus:outline-none ">
          <FiMenu size={24} />
        </button>
      </div>

      <nav className="flex flex-col gap-6">
        <NavItem icon={< PiMagnifyingGlassBold />} label="Dashboard" isOpen={isOpen} />
        <NavItem icon={<FaTasks />} label="Tasks" isOpen={isOpen} />
        <NavItem icon={<SlGraph />} label="Tenders" isOpen={isOpen} />
        <NavItem icon={<IoCallOutline />} label="Tenders" isOpen={isOpen} />
        <NavItem icon={<FiSettings />} label="Settings" isOpen={isOpen} />
      </nav>
    </div>
  );
};

interface NavItemProps {
  icon: JSX.Element;
  label: string;
  isOpen: boolean;
}

const NavItem = ({ icon, label, isOpen }: NavItemProps) => {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition-all">
      {icon}
      {isOpen && <span className="whitespace-nowrap">{label}</span>}
    </div>
  );
};

export default Sidebar;
