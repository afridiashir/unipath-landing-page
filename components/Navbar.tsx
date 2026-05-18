"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ArrowRight, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navLinks: NavItem[] = [
  {
    label: "Resources",
    href: "/resources",
    // children: [
    //   {
    //     label: "Guides",
    //     href: "/resources/guides",
    //   },
    //   {
    //     label: "Scholarships",
    //     href: "/resources/scholarships",
    //   },
    //   {
    //     label: "Universities",
    //     href: "/resources/universities",
    //   },
    //   {
    //     label: "GPA Calculator",
    //     href: "/resources/gpa-calculator",
    //   },
    //   {
    //     label: "GPA Calculator",
    //     href: "/resources/gpa-calculator",
    //   },
    // ],
  },
  {
    label: "Enterprise",
    href: "/enterprise",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

const Navbar = () => {
  return (
    <>
      {/* Mobile Navbar */}
      <div className="absolute top-0 left-0 right-0 flex lg:hidden items-center justify-between px-4 h-[80px]">
        <div className="flex items-center gap-2">
          <MobileMenu />
          <Link href="/" className="text-2xl font-semibold text-primary">
            UniPath
          </Link>
        </div>
        <Button variant={"secondary"}>
          Get Started <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Desktop Navbar */}
      <div className="absolute top-0 left-0 right-0 hidden lg:flex items-center justify-between h-[80px] px-36 xl:px-56">
        <div className="flex items-center gap-16">
          <Link href="/" className="text-2xl font-semibold text-primary">
            UniPath
          </Link>

          <div className="flex items-center gap-2">
            {navLinks.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="#"
            className="font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Login
          </Link>

          <Link
            href="#"
            className="bg-secondary flex items-center gap-2 hover:bg-secondary/90 px-6 py-2 rounded-full text-white font-medium transition-colors"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

/* -------------------------------------------------------------------------- */
/*                               Desktop Item                                 */
/* -------------------------------------------------------------------------- */

const DesktopNavItem = ({
  item,
}: {
  item: {
    label: string;
    href: string;
    children?: {
      label: string;
      href: string;
    }[];
  };
}) => {
  return (
    <div className="relative group">
      <Link
        href={item.href}
        className="flex items-center gap-1 px-3 py-2 text-primary font-medium hover:text-secondary transition-colors"
      >
        {item.label}

        {item.children && <ChevronDown className="w-4 h-4" />}
      </Link>

      {/* Dropdown */}
      {item.children && (
        <div className="absolute top-full left-0 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 bg-white border border-gray-100 rounded-2xl shadow-lg min-w-[220px] p-2 z-50">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              className="block px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                Mobile Menu                                 */
/* -------------------------------------------------------------------------- */

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    if (openDropdown === label) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(label);
    }
  };

  return (
    <>
      <Menu
        className="w-5 h-5 cursor-pointer text-primary"
        onClick={() => setIsOpen(true)}
      />

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-[300px] bg-white transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 h-[60px] border-b border-gray-200">
          <p className="text-xl font-semibold text-primary">UniPath</p>

          <X
            className="w-6 h-6 cursor-pointer text-primary"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Links */}
        <div className="flex flex-col p-4 gap-1">
          {navLinks.map((item) => (
            <div key={item.label}>
              {/* Parent */}
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  className="flex-1 px-3 py-3 rounded-xl text-gray-800 font-medium hover:bg-gray-100 transition-colors"
                >
                  {item.label}
                </Link>

                {item.children && (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="p-2"
                  >
                    <ChevronRight
                      className={`w-5 h-5 transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Dropdown */}
              {item.children && openDropdown === item.label && (
                <div className="ml-4 mt-1 flex flex-col border-l border-gray-200 pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="px-3 py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="mt-auto p-4 flex flex-col gap-3 border-t border-gray-200">
          <Link
            href="#"
            className="w-full border border-primary text-primary py-3 rounded-full text-center font-medium"
          >
            Login
          </Link>

          <Link
            href="#"
            className="w-full bg-secondary text-white py-3 rounded-full text-center font-medium"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};
