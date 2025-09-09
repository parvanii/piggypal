import React from 'react';
import { BarChart3, TrendingUp, TrendingDown, Loader2, AlertTriangle } from 'lucide-react';
import getUserRecord from '@/app/actions/getUserRecord';
import getBestWorstExpense from '@/app/actions/getBestWorstExpense';

const ExpenseStats = async () => {
  try {
    // Fetch both average and range data
    const [userRecordResult, rangeResult] = await Promise.all([
      getUserRecord(),
      getBestWorstExpense(),
    ]);

    const { record, daysWithRecords } = userRecordResult;
    const { bestExpense, worstExpense } = rangeResult;

    // Calculate average expense
    const validRecord = record || 0;
    const validDays = daysWithRecords && daysWithRecords > 0 ? daysWithRecords : 1;
    const averageExpense = validRecord / validDays;

    return (
      <div className="bg-white/80 dark:bg-pink-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-pink-100/50 dark:border-pink-700/50 hover:shadow-2xl">
        {/* Header */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-500 via-pink-400 to-rose-400 rounded-xl flex items-center justify-center shadow-lg">
            <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
              Expense Statistics
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-300 mt-0.5">
              Your spending insights and ranges
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-3 sm:space-y-4">
          {/* Average Daily Spending */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-800/30 dark:to-rose-800/30 rounded-xl p-3 sm:p-4 border border-pink-200/50 dark:border-pink-700/50">
            <div className="text-center">
              <p className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-2 tracking-wide uppercase">
                Average Daily Spending
              </p>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                ₹{averageExpense.toFixed(2)}
              </div>
              <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-2 py-1 rounded-full text-xs font-medium">
                <span className="w-1.5 h-1.5 bg-pink-500 dark:bg-pink-400 rounded-full"></span>
                Based on {validDays} days with expenses
              </div>
            </div>
          </div>

          {/* Expense Range */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {/* Highest Expense */}
            <div className="bg-rose-50/80 dark:bg-rose-900/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl border-l-4 border-l-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/30">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-rose-100 dark:bg-rose-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-rose-600 dark:text-rose-300" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 text-xs mb-0.5">
                    Highest
                  </h4>
                  <p className="text-lg font-bold text-rose-600 dark:text-rose-300">
                    {bestExpense !== undefined ? `₹${bestExpense}` : 'No data'}
                  </p>
                </div>
              </div>
            </div>

            {/* Lowest Expense */}
            <div className="bg-pink-50/80 dark:bg-pink-900/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl border-l-4 border-l-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/30">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-pink-100 dark:bg-pink-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-4 h-4 text-pink-600 dark:text-pink-300" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 text-xs mb-0.5">
                    Lowest
                  </h4>
                  <p className="text-lg font-bold text-pink-600 dark:text-pink-300">
                    {worstExpense !== undefined ? `₹${worstExpense}` : 'No data'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching expense statistics:', error);
    return (
      <div className="bg-white/80 dark:bg-pink-900/30 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-pink-100/50 dark:border-pink-700/50 hover:shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-pink-400 to-rose-400 rounded-xl flex items-center justify-center shadow-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-500 dark:from-pink-200 dark:to-rose-300 bg-clip-text text-transparent">
              Expense Statistics
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
              Your spending insights and ranges
            </p>
          </div>
        </div>
        <div className="bg-rose-50/80 dark:bg-rose-900/20 backdrop-blur-sm p-6 rounded-xl border-l-4 border-l-rose-500">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-rose-100 dark:bg-rose-800 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-300" />
            </div>
            <p className="text-rose-800 dark:text-rose-300 font-semibold">
              Unable to load expense statistics
            </p>
          </div>
          <p className="text-rose-700 dark:text-rose-400 text-sm ml-11">
            Please try again later
          </p>
        </div>
      </div>
    );
  }
};

export default ExpenseStats;
