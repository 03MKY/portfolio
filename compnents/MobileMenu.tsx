import Link from "next/link";

export default function MobileMenu({
  links,
  menuOpen,
}: {
  links: { href: string; label: string }[];
  menuOpen: boolean;
}) {
  return (
    menuOpen && (
      <div className="fixed left-0 right-0 w-screen z-40 bg-background">
        <ul className="flex flex-col text-sm w-full">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="link w-full p-2 border-b border-secondary-foreground block"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
