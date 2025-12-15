import Link from "next/link";
import { FaBars } from "react-icons/fa";

interface NavLink {
  href: string;
  label: string;
}

export default function Navbar({
  links,
  handleToggle,
}: {
  links: NavLink[];
  handleToggle: () => void;
}) {
  return (
    <nav className="flex justify-between items-center px-4 md:px-10 py-1 bg-secondary-background/70 sticky top-0 z-50">
      <h1 className="logo">Mohit 👋</h1>
      {/* Large Screen Navbar */}
      <ul className="hidden md:flex gap-4 text-md font-medium">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="link">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navbar Placeholder */}
      <FaBars
        className="block md:hidden text-xl cursor-pointer active:scale-90"
        onClick={handleToggle}
      />
    </nav>
  );
}
