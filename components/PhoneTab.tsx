"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;



function PhoneTab() {
  const [isOpen, setIsOpen] = useState(false);


  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center" asChild>
        <button
          className="flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
            <FontAwesomeIcon icon={faPhone} className="text-2xl font-bold text-gold" />
          
        </button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="flex flex-col  border-none shadow-none w-screen h-36"
      >
        <SheetTitle className="sr-only">
          
        </SheetTitle>

        <div className="flex flex-col justify-center items-center mt-15 gap-8 " onClick={handleLinkClick}>
        <a href="tel:+233504375771">+233 504 375 771</a>
        <a href="tel:+233504375771">+233 504 375 771</a>
        </div>

    
      </SheetContent>
    </Sheet>
  );
}

export default PhoneTab;
