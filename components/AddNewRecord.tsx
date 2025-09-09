'use client';
import { useRef, useState } from 'react';
import addExpenseRecord from '@/app/actions/addExpenseRecord';
import { suggestCategory } from '@/app/actions/suggestCategory';
import {
  CreditCard,
  Sparkles,
  Calendar,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

const AddRecord = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [amount, setAmount] = useState(50);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [isCategorizingAI, setIsCategorizingAI] = useState(false);

  const clientAction = async (formData: FormData) => {
    setIsLoading(true);
    setAlertMessage(null);

    formData.set('amount', amount.toString());
    formData.set('category', category);

    const { error } = await addExpenseRecord(formData);

    if (error) {
      setAlertMessage(`Error: ${error}`);
      setAlertType('error');
    } else {
      setAlertMessage('Expense record added successfully!');
      setAlertType('success');
      formRef.current?.reset();
      setAmount(50);
      setCategory('');
      setDescription('');
    }

    setIsLoading(false);
  };

  const handleAISuggestCategory = async () => {
    if (!description.trim()) {
      setAlertMessage('Please enter a description first');
      setAlertType('error');
      return;
    }

    setIsCategorizingAI(true);
    setAlertMessage(null);

    try {
      const result = await suggestCategory(description);
      if (result.error) {
        setAlertMessage(`AI Suggestion: ${result.error}`);
        setAlertType('error');
      } else {
        setCategory(result.category);
        setAlertMessage(`AI suggested category: ${result.category}`);
        setAlertType('success');
      }
    } catch {
      setAlertMessage('Failed to get AI category suggestion');
      setAlertType('error');
    } finally {
      setIsCategorizingAI(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-pink-400 via-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
          <CreditCard className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Add New Expense
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Track your spending with AI assistance
          </p>
        </div>
      </div>

      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(formRef.current!);
          clientAction(formData);
        }}
        className="space-y-6"
      >
        {/* Description + Date */}
        <div className="grid md:grid-cols-2 gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          {/* Description */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              Expense Description
            </label>
            <div className="relative">
              <input
                type="text"
                name="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Coffee, shopping, dinner..."
                className="w-full pl-3 pr-12 py-2.5 bg-white dark:bg-gray-800 border-2 border-pink-200 dark:border-pink-700 rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all"
                required
              />
              <button
                type="button"
                onClick={handleAISuggestCategory}
                disabled={isCategorizingAI || !description.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow hover:shadow-md disabled:opacity-40 transition"
              >
                {isCategorizingAI ? (
                  <div className="w-3 h-3 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <Sparkles className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Date */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              Expense Date
            </label>
            <div className="relative">
              <input
                type="date"
                name="date"
                className="w-full px-3 py-2.5 bg-white dark:bg-gray-800 border-2 border-pink-200 dark:border-pink-700 rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all"
                required
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-400" />
            </div>
          </div>
        </div>

        {/* Category + Amount */}
        <div className="grid md:grid-cols-2 gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          {/* Category */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              Category
            </label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2.5 bg-white dark:bg-gray-800 border-2 border-pink-200 dark:border-pink-700 rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all"
              required
            >
              <option value="" disabled>
                Select category...
              </option>
              <option value="Food">Food & Dining</option>
              <option value="Transportation">Transportation</option>
              <option value="Shopping">Shopping</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Bills">Bills & Utilities</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Amount */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400 font-semibold">
                ₹
              </span>
              <input
                type="number"
                name="amount"
                min="0"
                max="100000"
                step="1"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                className="w-full pl-6 pr-3 py-2.5 bg-white dark:bg-gray-800 border-2 border-pink-200 dark:border-pink-700 rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all font-semibold"
                placeholder="0.00"
                required
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Processing...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Add Expense
            </>
          )}
        </button>
      </form>

      {/* Alerts */}
      {alertMessage && (
        <div
          className={`mt-4 p-3 rounded-xl border-l-4 ${
            alertType === 'success'
              ? 'bg-green-50 border-green-400 text-green-800'
              : 'bg-rose-50 border-rose-500 text-rose-800'
          }`}
        >
          <div className="flex items-center gap-2">
            {alertType === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-rose-500" />
            )}
            <p className="text-sm font-medium">{alertMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddRecord;
