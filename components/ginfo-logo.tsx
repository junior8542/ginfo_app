"use client";
import Image from "next/image";
import { open_sans } from "./fonts";
import Link from "next/link";

const Logo = () => {

  return (
    <>
      <Link href="/" style={{display  : "flex", alignItems:'center',justifyContent:"space-between" }}>
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width= "45"
          height="35"
          className="relative"
        />
       <span className={`${open_sans.className} text-white md:text-2xl`}> GINFO</span>
      </Link>

    </>
  );
};

export default Logo;
