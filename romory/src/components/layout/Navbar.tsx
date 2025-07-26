import { Link } from "react-router-dom";
import type { NavItem } from "@/types";

export default function Navbar() {
  const NAV_ITEMS: NavItem[] = [
    { label: "('hello, lawrence')", href: "/" },
    { label: "('projects')", href: "/" },
    { label: "('about me')", href: "/" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full shadow-foreground shadow-lg/5 border-b">
      <div className="container mx-auto flex h-14 items-center px-4">
        <div className="flex flex-1 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex justify-start">
              <span className="text-lg md:text-xl font-medium font-google-sans-code">
                Romory
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center lg:space-x-6 space-x-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link to="/" className="hidden md:flex items-center space-x-2">
            <div className="">
              <span className="text-sm text-muted-foreground hover:text-foreground">
                {"('contact me')"}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
