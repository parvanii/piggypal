import getRecords from '@/app/actions/getRecords';
import BarChart from './BarChart';
import { BarChart2, TrendingUp, AlertTriangle } from 'lucide-react';

const RecordChart = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-pink-200/50 dark:border-pink-700/50 hover:shadow-2xl">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg">
            <BarChart2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
              Expense Chart
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Visual representation of your spending
            </p>
          </div>
        </div>
        <div className="bg-rose-50/80 dark:bg-rose-900/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl border-l-4 border-l-rose-500">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-rose-100 dark:bg-rose-800 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-300" />
            </div>
            <p className="text-rose-800 dark:text-rose-300 font-semibold text-sm">
              Error loading chart data
            </p>
          </div>
          <p className="text-rose-700 dark:text-rose-400 text-xs ml-8">{error}</p>
        </div>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-pink-200/50 dark:border-pink-700/50 hover:shadow-2xl">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg">
            <BarChart2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
              Expense Chart
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Visual representation of your spending
            </p>
          </div>
        </div>
        <div className="text-center py-6 sm:py-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-700 dark:to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <TrendingUp className="w-8 h-8 text-pink-600 dark:text-pink-300" />
          </div>
          <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
            No Data to Display
          </h4>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed text-sm">
            Start tracking your expenses to see your spending patterns
            visualized in this chart.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-pink-200/50 dark:border-pink-700/50 hover:shadow-2xl">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg">
          <BarChart2 className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
            Expense Chart
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Visual representation of your spending
          </p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <BarChart
          records={records.map((record) => ({
            ...record,
            date: String(record.date),
          }))}
        />
      </div>
    </div>
  );
};

export default RecordChart;
