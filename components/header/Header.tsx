// File: components/header/header.tsx
"use client";
import { Flame, Bell, Github, Menu, X } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { Badge } from "../ui/badge";
import { useState, useEffect } from "react";

const linkClass =
  "text-sm font-semibold text-zinc-600 hover:text-green-600 dark:text-zinc-400 dark:hover:text-green-400 relative pb-2 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-green-500 after:to-green-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-left dark:after:from-green-400 dark:after:to-green-300";

const NavLinks = [
  { href: "/docs/components/background-paths", label: "Components" },
  { href: "/templates", label: "Templates", badge: true },
  { href: "/changelog", label: "Changelog" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50">
        <div className="w-full">
          <div className="flex items-center justify-center w-full flex-col">
            <div
              className={`
                flex items-center justify-between
                bg-white/80 dark:bg-zinc-900/80
                shadow-lg shadow-zinc-800/5
                backdrop-blur-md
                border-x border-b 
                border-zinc-200 dark:border-zinc-800
                w-full sm:min-w-200 sm:max-w-300
                rounded-b-[28px]
                px-4 py-2.5
                relative
                transition-all duration-300 ease-in-out
              `}
            >
              <div className="relative z-10 flex items-center justify-between w-full gap-2">
                {/* Logo Section */}
                <div className="flex items-center gap-6">
                  <Link
                    href="/"
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  >
                    <Flame className="w-6 h-6 text-green-500 dark:text-green-400" />
                    <span className="font-semibold text-zinc-900 dark:text-white">
                      BilalUi
                    </span>
                  </Link>
                  <span className="text-zinc-300 dark:text-zinc-700 hidden sm:block">
                    |
                  </span>

                  {/* Desktop Navigation Links */}
                  <div className="hidden sm:flex items-center gap-4">
                    {NavLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        target={
                          link.label === "Templates" ? "_blank" : undefined
                        }
                        className={linkClass}
                      >
                        <span className="flex items-center gap-2">
                          {link.label}
                          {link.badge && (
                            <Badge
                              variant="soon"
                              size="xs"
                              appearance={"light"}
                            >
                              Soon
                            </Badge>
                          )}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right side items */}
                <div className="hidden sm:flex items-center gap-3">
                  <span className="text-zinc-300 dark:text-zinc-700">|</span>

                  <IconButton href="#" icon={Bell} title="Notifications" />
                  <IconButton
                    href="https://github.com"
                    icon={Github}
                    title="GitHub"
                    external
                  />
                  <ModeToggle />
                </div>

                {/* Mobile Navigation */}
                <div className="flex sm:hidden items-center gap-2">
                  <IconButton href="#" icon={Bell} title="Notifications" />
                  <IconButton
                    href="https://github.com"
                    icon={Github}
                    title="GitHub"
                    external
                  />
                  <ModeToggle />
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2 rounded hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
                    aria-label="Toggle menu"
                  >
                    {mobileMenuOpen ? (
                      <X className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                    ) : (
                      <Menu className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile Menu Dropdown */}
              {mounted && mobileMenuOpen && (
                <div className="absolute top-full left-4 right-4 mt-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-lg sm:hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex flex-col gap-2 p-3">
                    {NavLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        target={
                          link.label === "Templates" ? "_blank" : undefined
                        }
                        className={`${linkClass} px-2 py-1.5`}
                        onClick={closeMobileMenu}
                      >
                        <span className="flex items-center gap-2">
                          {link.label}
                          {link.badge && (
                            <Badge
                              variant="soon"
                              size="xs"
                              appearance={"light"}
                            >
                              Soon
                            </Badge>
                          )}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Icon Button Component
interface IconButtonProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  external?: boolean;
}

function IconButton({ href, icon: Icon, title, external }: IconButtonProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="p-2 rounded hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
      title={title}
      aria-label={title}
    >
      <Icon className="w-5 h-5 text-zinc-600 dark:text-zinc-400 transition-colors" />
    </Link>
  );
}
