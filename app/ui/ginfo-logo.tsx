"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import {Button} from '@/app/ui/button';
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { open_sans } from "./fonts";

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

  return (
    <>
      <Link href="/" style={{ display: showButton ? "none" : "flex", alignItems:'center',justifyContent:"space-between" }}>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={width < 1024 ? "51" : "58"}
          height={width < 1024 ? "45" : "55"}
          className="relative"
        />
       <span className={`${open_sans.className} text-white md:text-2xl`}> GINFO</span>
      </Link>
      <div
        style={{
          display: showButton ? "block" : "none",
        }}
      >
         <Button className="mt-4 w-full">
                Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
          </Button>
      </div>
    </>
  );
};

export default Logo;
