"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-transparent">
      <div className="flex justify-center w-full py-6 px-4">
        <div className="flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-900 rounded-full shadow-lg w-full max-w-3xl relative z-10">

          {/* Logo + Text */}
          <div className="flex items-center space-x-0.5">
            <Image
              src="/logo.png"
              alt="Logo"
              width={70}
              height={70}
              className="object-contain"
            />
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-[700] font-geist-sans text-black">
              PiggyPal
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <Link
                  href={item.href}
                  className="text-sm text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors font-medium"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Section: Auth + Mobile Menu */}
          <div className="flex items-center space-x-2">

            {/* Auth / Get Started Button - Desktop */}
            <SignedOut>
              <SignInButton>
                <motion.a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-2 text-sm text-black bg-pink-300 rounded-full hover:bg-pink-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Get Started
                </motion.a>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8 hover:scale-110 transition-transform duration-200",
                    },
                  }}
                />
              </div>
            </SignedIn>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden flex items-center"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-900 dark:text-gray-100" />
              ) : (
                <Menu className="h-6 w-6 text-gray-900 dark:text-gray-100" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-gray-900 z-50 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close button */}
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6 text-gray-900 dark:text-gray-100" />
            </motion.button>

            {/* Mobile Links */}
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center"
                >
                  <Link
                    href={item.href}
                    className="text-base text-gray-900 dark:text-gray-100 font-medium"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Auth / Get Started */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6 flex flex-col items-center"
              >
                <SignedOut>
                  <SignInButton>
                    <motion.a
                      href="#"
                      className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-black bg-pink-300 rounded-full hover:bg-pink-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      onClick={closeMenu}
                    >
                      Get Started
                    </motion.a>
                  </SignInButton>
                </SignedOut>

                <SignedIn>
                  <div className="flex items-center justify-center mt-2">
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox: "w-10 h-10 hover:scale-110 transition-transform duration-200",
                        },
                      }}
                    />
                  </div>
                </SignedIn>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
