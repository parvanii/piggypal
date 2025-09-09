import Link from "next/link";
import { UserCheck, TrendingUp, Target, Activity, CreditCard, BarChart2 } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-pink-900/20 text-gray-900 dark:text-gray-100 transition-all duration-300 min-h-screen">

      {/* Hero Section */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-pink-100/20 via-pink-200/10 to-pink-50/10 dark:from-pink-900/30 dark:via-pink-800/20 dark:to-pink-900/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 dark:bg-pink-400 rounded-full animate-pulse"></span>
            <span className="hidden sm:inline">Powered by Smart AI</span>
            <span className="sm:hidden">Smart AI</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent">
              PiggyPal
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0 mb-8">
            Your intelligent companion for mastering personal finance. Track expenses, optimize budgets, and achieve your goals effortlessly — all with the power of AI.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center px-2 sm:px-0">
            <Link
              href="/sign-in"
              className="group relative overflow-hidden bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 hover:from-pink-700 hover:via-pink-600 hover:to-pink-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-2xl transition-transform duration-200 transform hover:-translate-y-1"
            >
              <span className="relative z-10">Join PiggyPal</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl"></div>
            </Link>
            <Link
              href="/sign-in"
              className="group border-2 border-pink-500/20 dark:border-pink-400/20 text-pink-600 dark:text-pink-300 hover:bg-pink-50 dark:hover:bg-pink-900/20 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-pink-50/80 dark:bg-pink-900/80 backdrop-blur-sm relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-3 py-1 rounded-full text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-pink-500 dark:bg-pink-400 rounded-full"></span>
            Our Mission
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Making Personal Finance <span className="text-pink-600 dark:text-pink-400">Fun & Easy</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed max-w-3xl mx-auto mb-12">
            PiggyPal empowers you with actionable insights, smart recommendations, and real-time analytics so you can save smarter, spend wisely, and reach your financial goals faster than ever.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white/90 dark:bg-gray-800/80 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-4 text-pink-600 dark:text-pink-400">
                <UserCheck size={32} />
              </div>
              <div className="text-3xl font-bold mb-1">15K+</div>
              <div className="text-gray-700 dark:text-gray-200 font-medium">Active Users</div>
            </div>
            <div className="group relative bg-white/90 dark:bg-gray-800/80 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-4 text-pink-500 dark:text-pink-300">
                <TrendingUp size={32} />
              </div>
              <div className="text-3xl font-bold mb-1">$3M+</div>
              <div className="text-gray-700 dark:text-gray-200 font-medium">Money Tracked</div>
            </div>
            <div className="group relative bg-white/90 dark:bg-gray-800/80 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-4 text-pink-400 dark:text-pink-200">
                <Target size={32} />
              </div>
              <div className="text-3xl font-bold mb-1">97%</div>
              <div className="text-gray-700 dark:text-gray-200 font-medium">Satisfied Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-pink-50 via-white to-pink-50 dark:from-pink-900 dark:via-gray-800 dark:to-pink-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 bg-pink-500 dark:bg-pink-400 rounded-full"></span>
              Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Why PiggyPal Rocks
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-200 max-w-2xl mx-auto mb-12">
              Everything you need to manage finances smarter, not harder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-center justify-center mb-6 text-pink-500">
                <Activity size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Real-Time Analytics</h3>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                Track your spending in real-time and gain insights into your financial habits to make smarter decisions every day.
              </p>
            </div>

            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-center justify-center mb-6 text-pink-500">
                <CreditCard size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Smart Budgeting</h3>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                Automatically categorize your expenses and create smart budgets tailored to your lifestyle and goals.
              </p>
            </div>

            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-center justify-center mb-6 text-pink-500">
                <BarChart2 size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Beautiful Reports</h3>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                Visualize your financial journey with clear charts and insightful reports that make budgeting enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
