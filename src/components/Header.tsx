"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import config from "@/config";
import { Zap } from "lucide-react";


// A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Get Started or Login) on the right.
// The header is responsive, and on mobile, the links are hidden behind a burger button.
const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <header>
      <nav
        className="flex items-center justify-between mx-auto"
        aria-label="Global"
      >
        {/* Your logo/name on large screens */}
        <div className="flex lg:flex-1">
          <Link
            className="flex items-center gap-2 shrink-0 "
            href="/"
            title={`${config.appName}`}
          >
            <Zap className="w-6 h-6 text-primary" fill="currentColor" />
            <span className="font-extrabold text-lg">{config.appName}</span>
          </Link>
        </div>
        {/* Burger button to open menu on mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-base-content"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Your links on large screens */}
        <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
          {config.links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="link link-hover"
              title={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div
          className={`fixed inset-y-0 right-0 z-10 w-full px-8 py-4 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}
        >
          {/* Your logo/name on small screens */}
          <div className="flex items-center justify-between">
            <Link
              className="flex items-center gap-2 shrink-0 "
              title={`${config.appName} homepage`}
              href="/"
            >
              <svg className="svg-icon" style={{ width: '1em', height: '1em', verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M706.349486 674.145864a22.805678 22.805678 0 0 0-22.805678 22.805678 171.669114 171.669114 0 0 1-171.669114 171.669114 22.805678 22.805678 0 1 0 0 45.611356 217.531082 217.531082 0 0 0 217.28047-217.28047 22.805678 22.805678 0 0 0-22.805678-22.805678z"  /><path d="M511.874694 1024A324.041116 324.041116 0 0 1 188.334802 699.958884C188.334802 514.004895 399.851199 170.917279 490.823299 31.827704L511.874694 0l21.051395 31.827704c70.923152 108.013705 302.739109 476.162506 302.739109 668.13118a324.291728 324.291728 0 0 1-323.790504 324.041116z m0-932.276065C426.917279 225.550661 238.457171 537.81302 238.457171 699.958884a273.668135 273.668135 0 1 0 547.085658 0c0-134.829173-137.585903-396.467939-273.668135-608.234949z"  /></svg>
              <span className="font-extrabold text-lg">{config.appName}</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
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
          </div>

          {/* Your links on small screens */}
          <div className="flow-root mt-6">
            <div className="py-4">
              <div className="flex flex-col gap-y-4 items-start">
                {config.links.map((link, index) => (
                  <Link
                    href={link.href}
                    key={index}
                    className="link link-hover"
                    title={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="divider"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
