"use client";

import { SignInButton } from '@clerk/nextjs';
import { 
  PiggyBank, 
  Sparkles, 
  Heart, 
  Star, 
  BarChart3, 
  Wand2, 
  Plus, 
  Minus 
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const Guest = () => {
  const faqData = [
    {
      question: "Is PiggyPal free?",
      answer: "Yes! PiggyPal is completely free.",
    },
    {
      question: "What is PiggyPal?",
      answer: "PiggyPal is your AI-powered finance buddy that helps track, save, and advise on your spending.",
    },
    {
      question: "Can we remove transactions?",
      answer: "Yes! You can remove any transaction you want easily.",
    },
    {
      question: "Can PiggyPal give insights/advice after looking at history?",
      answer: "Yes! Our AI analyzes your history and gives personalized insights and advice.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-sans bg-gradient-to-br from-pink-50 via-white to-pink-50 dark:from-pink-900/20 dark:via-gray-800 dark:to-pink-900/20 text-gray-900 dark:text-gray-100 transition-all duration-300 min-h-screen">

      {/* Hero Section */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-pink-100/20 via-pink-50/10 to-pink-50/10 dark:from-pink-900/30 dark:via-pink-800/20 dark:to-pink-900/30">
        <div className="absolute inset-0 pointer-events-none">
          <Star className="absolute top-10 left-1/3 w-6 h-6 text-pink-400 animate-pulse" />
          <Heart className="absolute bottom-12 right-1/4 w-6 h-6 text-rose-400 animate-bounce" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto w-full">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 shadow-lg">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 dark:bg-pink-400 rounded-full animate-pulse"></span>
            Piggy-cute AI for your finances
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-gray-900 dark:text-gray-100">Welcome to </span>
            <span className="text-pink-600">PiggyPal</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12">
            Your adorable AI-powered money buddy. Track expenses, save smarter, 
            and let our piggy sprinkle some magic on your finances.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignInButton>
              <button className="group relative overflow-hidden bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 hover:from-pink-700 hover:via-pink-600 hover:to-pink-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-2xl transition-transform duration-200 transform hover:-translate-y-1">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Join PiggyPal
                  <Sparkles className="w-5 h-5" />
                </span>
              </button>
            </SignInButton>
            <Link
              href="#faq"
              className="group border-2 border-pink-500/20 dark:border-pink-400/20 text-pink-600 dark:text-pink-300 hover:bg-pink-50 dark:hover:bg-pink-900/20 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm hover:scale-105 flex items-center justify-center gap-2"
            >
              Learn More
              <Heart className="w-4 h-4 text-pink-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200">
            <div className="flex items-center justify-center mb-6 text-pink-500">
              <PiggyBank size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Piggy Insights</h3>
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
              Fun & smart tips to save more coins
            </p>
          </div>

          <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200">
            <div className="flex items-center justify-center mb-6 text-pink-500">
              <Wand2 size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Auto Categories</h3>
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
              Watch your piggy sort spending magically
            </p>
          </div>

          <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200">
            <div className="flex items-center justify-center mb-6 text-pink-500">
              <BarChart3 size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Cute Dashboard</h3>
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
              A bubbly, easy overview of your money world
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 sm:px-6 md:px-8 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-pink-600">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-2xl shadow-md border border-pink-100/40 dark:border-pink-800/40 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{item.question}</h3>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-pink-500" />
                ) : (
                  <Plus className="w-5 h-5 text-pink-500" />
                )}
              </div>
              {openIndex === index && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Guest;
