"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar/page";
import NavbarMobile from "./navbarmobile/page";


export default function ContentWrapper() {
  const pathname = usePathname();

  // List of paths where Navbar should not be displayed
  const noNavbarPaths = ["/login", "/login/connect", "/login/persona", "/login/communitytypeselector", "/successfullogin"];
  const noNavbarMobilePaths = ["/login" , "/login/connect", "/login/persona", "/login/communitytypeselector", "/successfullogin"] 
  const noFooterPaths = ["/login", "/connect" , "/persona"]

  if (noNavbarPaths.includes(pathname)) {
    return null;
  }
  if (noNavbarMobilePaths.includes(pathname)) {
    return null;
  }

  return (
    <>
      <Navbar />
      <NavbarMobile />
    </>
  );
}
