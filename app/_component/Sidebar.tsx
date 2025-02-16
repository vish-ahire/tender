'use client';
import { JSX, useState } from 'react';
import { FiMenu, FiSettings } from 'react-icons/fi';
import { SlGraph } from "react-icons/sl";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { FaTasks } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
        <NavItem href="/" icon={< PiMagnifyingGlassBold />} label="Dashboard" isOpen={isOpen} active={pathname === '/'} />
        <NavItem href="/tasks" icon={<FaTasks />} label="Tasks" isOpen={isOpen} active={pathname === '/tasks'} />
        <NavItem href="/tenders" icon={<SlGraph />} label="Tenders" isOpen={isOpen} active={pathname === '/tenders'}/>
        <NavItem href="/settings" icon={<FiSettings />} label="Settings" isOpen={isOpen} active={pathname === '/settings'} />
      </nav>
    </div>
  );
};

interface NavItemProps {
  icon: JSX.Element;
  label: string;
  isOpen: boolean;
  href:string;
  active: boolean;
}

const NavItem = ({ icon, label, href, isOpen, active }: NavItemProps) => {
  return (
    <Link href={href}>
      <div className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-all ${active ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
        {icon}
        {isOpen && <span className="whitespace-nowrap">{label}</span>}
      </div>
    </Link>
  );
};

export default Sidebar;
