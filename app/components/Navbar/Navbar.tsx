import React from "react";
import ModdleToogle from "@/components/ModeToogle";
// import { Label } from "@/components/ui/label"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Navigator from "@/components/Navigation";

import "./Navbar.css";

import Logo from "../Logo/Logo";

// import LanguageDropdown from "@/components/LanguageDropdown";

// import Link from 'next/link'

/*
      NavigationMenuContent,
    NavigationMenuIndicator,
       NavigationMenuTrigger,
    NavigationMenuViewport,
   */

    
function Navbar() {
  return (
    <header className="header">
      <nav className="p-6">
      <div className="flex justify-center">
      <Logo></Logo>
      </div>
        <div className="flex ">
          {/* link Component */}
          <div className="Navigator margin-top-32">
            <Navigator />
          </div>{" "}
          {/* link Component  Close tag*/}
  
          {/* Profile Account Manager*/}
          <div className="profile">
            <Avatar>
              <AvatarImage src="https://images.pexels.com/photos/1602842/pexels-photo-1602842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>{" "}
          {/* Profile Account Close Tag */}
          {/* Prafence */}
          <div className="prafence">
            <ModdleToogle />
          </div>

          {/* <div className="language_button">
            <LanguageDropdown/>
          </div> */}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
