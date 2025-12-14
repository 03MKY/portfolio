"use client";
import Link from "next/link";

const newLocal = "max-h-[500px] opacity-100";
export default function MobileMenu({
  links,
  menuOpen,
  onLinkClick,
}: {
  links: { href: string; label: string }[];
  menuOpen: boolean;
  onLinkClick: () => void;
}) {
  return (
    <div
      className={`fixed top-8 left-0 right-0 w-screen z-40 overflow-hidden transition-all duration-300 ease-in-out ${
        menuOpen ? newLocal : "max-h-0 opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full bg-background shadow-lg">
        <ul className="flex flex-col text-sm w-full">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={onLinkClick}
                className="link w-full p-2 border-b border-secondary-foreground block"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
