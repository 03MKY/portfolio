"use client";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#project", label: "Project" },
  { href: "#contact", label: "Contact" },
];

export default function NavWrapper() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Navbar links={LINKS} handleToggle={toggleMenu} />
      <MobileMenu links={LINKS} menuOpen={isMenuOpen} onLinkClick={toggleMenu} />
    </>
  );
}
