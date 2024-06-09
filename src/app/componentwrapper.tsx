"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar/page";
import NavbarMobile from "./navbarmobile/page";

export default function ContentWrapper() {
  const pathname = usePathname();

  // List of paths where Navbar should not be displayed
  const noNavbarPaths = ["/login", "/connect"];
  const noNavbarMobilePaths = ["/login" , "/connect"] 

  if (noNavbarPaths.includes(pathname)) {
    return null;
  }

  return (
    <>
      <Navbar />
      <NavbarMobile />
    </>
  );
}
