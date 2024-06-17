"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import config from "@/config";
import { Zap } from "lucide-react";

const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <header>
      <nav className="flex items-center justify-between mx-auto" aria-label="Global">
        <Link href="/" title={`${config.appName}`} className="flex items-center gap-2 shrink-0">
          <Zap className="w-6 h-6 text-primary" fill="currentColor" />
          <span className="font-extrabold text-lg text-foreground">{config.appName}</span>
        </Link>
        <div className="hidden md:flex md:justify-center md:gap-12 md:items-center">
          {config.links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="link link-hover text-foreground hover:text-primary"
              title={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground hover:text-accent-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-popover opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="absolute top-0 right-0 w-64 h-full bg-card shadow-lg p-4">
            <button
              type="button"
              className="absolute top-2 right-2 text-muted-foreground hover:text-accent-foreground"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="space-y-4">
              {config.links.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className="link link-hover block text-base font-medium text-foreground hover:text-primary"
                  title={link.label}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;