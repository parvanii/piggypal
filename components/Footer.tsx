'use client';

import Link from 'next/link';
import { Mail, Phone, PiggyBank } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-pink-900/20 border-t border-gray-100/50 dark:border-gray-700/50'>
      {/* Gradient accent line */}
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* Logo and Tagline */}
          <div className='text-center md:text-left'>
            <div className='inline-flex items-center gap-2 mb-4'>
              <div className='w-10 h-10 bg-gradient-to-br from-pink-500 via-pink-400 to-pink-300 rounded-xl flex items-center justify-center shadow-lg animate-pulse'>
                <span className='text-white text-xl'>🐷</span>
              </div>
              <h2 className='text-xl font-bold bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent'>
                PiggyPal
              </h2>
            </div>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed max-w-sm'>
              Making personal finance cute, fun, and smart! Track expenses, manage budgets, and get AI insights — all in one place.
            </p>
          </div>

          {/* Navigation Links */}
          <div className='text-center md:text-left'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4'>
              Quick Links
            </h3>
            <div className='flex flex-col space-y-3'>
              <Link
                href='/'
                className='group inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 text-sm font-medium transition-colors duration-200'
              >
                <span className='w-2 h-2 bg-pink-500 dark:bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                Home
              </Link>
              <Link
                href='/about'
                className='group inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 text-sm font-medium transition-colors duration-200'
              >
                <span className='w-2 h-2 bg-pink-500 dark:bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                About
              </Link>
              <Link
                href='/contact'
                className='group inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 text-sm font-medium transition-colors duration-200'
              >
                <span className='w-2 h-2 bg-pink-500 dark:bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                Contact
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className='text-center md:text-left'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4'>
              Features
            </h3>
            <div className='space-y-3'>
              <div className='flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm'>
                <Mail className='text-pink-500' size={16} />
                Cute AI Insights
              </div>
              <div className='flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm'>
                <Phone className='text-pink-400' size={16} />
                Smart Categorization
              </div>
              <div className='flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm'>
                <PiggyBank className='text-pink-300' size={16} />
                Piggy Dashboard
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Made by */}
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-500 dark:text-gray-400 text-sm mb-2 md:mb-0 text-center md:text-left'>
            © {new Date().getFullYear()} PiggyPal. All rights reserved.
          </p>
          <div className='inline-flex items-center gap-2 bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-3 py-1 rounded-full text-xs font-medium'>
            <span className='w-2 h-2 bg-pink-500 dark:bg-pink-400 rounded-full animate-pulse'></span>
            Made with ❤️ by Parvani
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
