import { useState } from "react";
import { Link } from "react-router-dom";
import type { NavItem } from "@/types";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const NAV_ITEMS: NavItem[] = [
    { label: "('hello, lawrence')", href: "/" },
    { label: "('projects')", href: "/" },
    { label: "('about me')", href: "/" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full shadow-foreground shadow-lg/5 border-b">
      <div className="container mx-auto flex h-14 items-center px-6 md:px-4">
        <div className="flex flex-1 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex justify-start">
              <span className="text-lg md:text-xl font-semibold font-google-sans-code">
                Romory
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center lg:space-x-6 space-x-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link to="/" className="hidden md:flex items-center space-x-2">
            <span className="text-sm font-medium text-muted-foreground hover:text-foreground">
              {"('contact me')"}
            </span>
          </Link>
        </div>

        <div className="md:hidden flex space-x-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8 px-6 py-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="font-medium text-muted-foreground hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <Link to="/" className="flex items-center space-x-2">
                  <span className="font-medium text-muted-foreground hover:text-foreground">
                    {"('contact me')"}
                  </span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
