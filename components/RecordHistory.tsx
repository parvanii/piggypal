import getRecords from '@/app/actions/getRecords';
import RecordItem from './RecordItem';
import { Record } from '@/types/Record';
import { NotebookText, AlertTriangle, BarChart2 } from 'lucide-react';

const RecordHistory = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-pink-200/50 dark:border-pink-700/50">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg">
            <NotebookText className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              Expense History
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Your spending timeline
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border-l-4 border-l-pink-500 p-3 sm:p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-100 dark:bg-pink-800 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-pink-600 dark:text-pink-300" />
            </div>
            <h4 className="font-bold text-pink-800 dark:text-pink-300 text-sm">
              Error loading expense history
            </h4>
          </div>
          <p className="text-pink-700 dark:text-pink-400 ml-8 sm:ml-10 text-xs">
            {error}
          </p>
        </div>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-pink-200/50 dark:border-pink-700/50">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg">
            <NotebookText className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
              Expense History
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Your spending timeline
            </p>
          </div>
        </div>
        <div className="text-center py-6 sm:py-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-100 to-rose-200 dark:from-pink-700 dark:to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BarChart2 className="w-8 h-8 text-pink-600 dark:text-pink-300" />
          </div>
          <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
            No Expense Records Found
          </h4>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto text-sm">
            Start tracking your expenses to see your spending history and
            patterns here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-pink-200/50 dark:border-pink-700/50 hover:shadow-2xl">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg">
          <NotebookText className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
            Expense History
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Your spending timeline
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
        {records.map((record: Record) => (
          <RecordItem key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
};

export default RecordHistory;
