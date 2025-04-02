import React from "react";
import NavBar from "./NavBar";
import Image from "next/image";
import MobileNav from "./MobileNav";
import PhoneTab from "./PhoneTab";

function Header() {
  return (
    <header className="bg-dark text-white p-4 sticky top-0 left-0 right-0 z-50 h-16 lg:h-20">
      <div className="lg:hidden flex items-center justify-between">
        <MobileNav />

        <Image
          src="/assets/images/legalecho.png"
          width={120}
          height={120}
          alt="logo"
          className="object-cover mr-4"
        />

        <PhoneTab />
      </div>
      <div className="lg:flex items-center justify-between hidden ">
        <div className="flex items-center">
          <Image
            src="/assets/images/legalecho.png"
            width={160}
            height={160}
            alt="logo"
            className="object-cover mr-8"
          />

          <div className="hidden lg:flex">
            <NavBar />
          </div>
        </div>

        <div className="bg-gold hidden lg:flex p-2 mr-4 cursor-pointer font-trajanPro text-xs">
          CALL FOR CONSULTATION
        </div>
      </div>
    </header>
  );
}

export default Header;
