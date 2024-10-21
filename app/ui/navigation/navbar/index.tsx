import React from "react";
import Link from "next/link";
import Logo from '@/app/ui/ginfo-logo';
import {Button} from '@/app/ui/button';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 bg-black sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex justify-center items-baseline gap-x-6 text-white ">
              <li>
                <Link href="#">
                  <p>Projets</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Service Requête</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Actualité</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Communauté</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Assistance</p>
                </Link>
              </li>
              <li>
                <Button className="mt-4 w-full">
                  Se connecter <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
                </Button>
              </li>
            </ul>
             
            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;