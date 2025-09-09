import AddNewRecord from '@/components/AddNewRecord';
import AIInsights from '@/components/AIInsights';
import ExpenseStats from '@/components/ExpenseStats';
import Guest from '@/components/Guest';
import RecordChart from '@/components/RecordChart';
import RecordHistory from '@/components/RecordHistory';
import { currentUser } from '@clerk/nextjs/server';
import { Hand, Calendar, Zap, BadgeCheck } from 'lucide-react';
import Image from 'next/image';

export default async function HomePage() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <main className="bg-pink-50 dark:bg-pink-950 text-gray-800 dark:text-pink-100 font-sans min-h-screen transition-colors duration-300">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left column */}
          <div className="space-y-6 sm:space-y-8">
            {/* Welcome section */}
            <div className="bg-white/90 dark:bg-pink-900/70 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-xl border border-pink-100/50 dark:border-pink-700/50 hover:shadow-2xl transition-all flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* User Image */}
              <div className="relative flex-shrink-0">
                <Image
                  src={user.imageUrl}
                  alt={`${user.firstName}&apos;s profile`}
                  width={112} // matches w-28
                  height={112} // matches h-28
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl border-4 border-pink-200 dark:border-pink-700 shadow-lg object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full border-2 border-white dark:border-pink-900 flex items-center justify-center shadow-md">
                  <BadgeCheck size={16} className="text-white" />
                </div>
              </div>

              {/* User Details */}
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Hand size={20} className="text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-pink-50">
                    Welcome Back, {user.firstName}!
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-pink-200 mb-6 max-w-md mx-auto sm:mx-0">
                  Track your spending, discover patterns, and let PiggyPal make
                  managing money as fun as it is smart ✨
                </p>

                {/* Badges */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
                  <div className="bg-pink-50 dark:bg-pink-800/50 border border-pink-200 dark:border-pink-700 px-4 py-3 rounded-2xl flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg flex items-center justify-center text-white">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-500 dark:text-pink-300 block">
                        Joined
                      </span>
                      <span className="text-sm font-semibold text-gray-800 dark:text-pink-50">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="bg-pink-100 dark:bg-pink-700/50 border border-pink-200 dark:border-pink-600 px-4 py-3 rounded-2xl flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center text-white">
                      <Zap size={16} />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-500 dark:text-pink-300 block">
                        Last Active
                      </span>
                      <span className="text-sm font-semibold text-gray-800 dark:text-pink-50">
                        {user.lastActiveAt
                          ? new Date(user.lastActiveAt).toLocaleDateString()
                          : 'Today'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add New Expense */}
            <AddNewRecord />
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8">
            <RecordChart />
            <ExpenseStats />
          </div>
        </div>

        {/* Full-width sections */}
        <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
          <AIInsights />
          <RecordHistory />
        </div>
      </div>
    </main>
  );
}
