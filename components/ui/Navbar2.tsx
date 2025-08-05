"use client"
import { useState } from 'react';
import { close, logo, menu } from "@/public/assets";
import { navLinks } from "@/constants";
import Image from 'next/image';
import Logo from '@/components/ui/ginfo-logo'
import Link from "next/link";
import { usePathname } from "next/navigation";
import  NavMenu  from "./NavMenu";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full flex items-center py-6 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            GINFO &nbsp;
            <span className="sm:block hidden">| ENSET</span>
          </p>
        </Link>

        <NavMenu/>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              <li className={`${isActive('/') ? 'text-white' : 'text-dimWhite'} font-poppins font-medium cursor-pointer text-[16px]`}>
                <Link href="/">Accueil</Link>
              </li>
              <li className={`${isActive('/events') ? 'text-white' : 'text-dimWhite'} font-poppins font-medium cursor-pointer text-[16px]`}>
                <Link href="/events">Événements</Link>
              </li>
              <li className={`${isActive('/projects') ? 'text-white' : 'text-dimWhite'} font-poppins font-medium cursor-pointer text-[16px]`}>
                <Link href="/projects">Projets</Link>
              </li>
              <li className={`${isActive('/profile') ? 'text-white' : 'text-dimWhite'} font-poppins font-medium cursor-pointer text-[16px]`}>
                <Link href="/profile">Profil</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar