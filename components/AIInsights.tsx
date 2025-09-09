'use client';

import { useState, useEffect } from 'react';
import { getAIInsights } from '@/app/actions/getAIInsights';
import { generateInsightAnswer } from '@/app/actions/generateInsightAnswe';
import {
  Bot,
  Info,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  RefreshCcw,
  Brain,
  ChevronRight,
  ChevronUp,
  Loader2,
} from 'lucide-react';

interface InsightData {
  id: string;
  type: 'warning' | 'info' | 'success' | 'tip';
  title: string;
  message: string;
  action?: string;
  confidence?: number;
}

interface AIAnswer {
  insightId: string;
  answer: string;
  isLoading: boolean;
}

const AIInsights = () => {
  const [insights, setInsights] = useState<InsightData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [aiAnswers, setAiAnswers] = useState<AIAnswer[]>([]);

  const loadInsights = async () => {
    setIsLoading(true);
    try {
      const newInsights = await getAIInsights();
      setInsights(newInsights);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('❌ AIInsights: Failed to load AI insights:', error);
      setInsights([
        {
          id: 'fallback-1',
          type: 'info',
          title: 'AI Temporarily Unavailable',
          message:
            "We're working to restore AI insights. Please check back soon.",
          action: 'Try again later',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleActionClick = async (insight: InsightData) => {
    if (!insight.action) return;

    const existingAnswer = aiAnswers.find((a) => a.insightId === insight.id);
    if (existingAnswer) {
      setAiAnswers((prev) => prev.filter((a) => a.insightId !== insight.id));
      return;
    }

    setAiAnswers((prev) => [
      ...prev,
      { insightId: insight.id, answer: '', isLoading: true },
    ]);

    try {
      const question = `${insight.title}: ${insight.action}`;
      const answer = await generateInsightAnswer(question);

      setAiAnswers((prev) =>
        prev.map((a) =>
          a.insightId === insight.id ? { ...a, answer, isLoading: false } : a
        )
      );
    } catch (error) {
      console.error('❌ Failed to generate AI answer:', error);
      setAiAnswers((prev) =>
        prev.map((a) =>
          a.insightId === insight.id
            ? {
                ...a,
                answer:
                  'Sorry, I was unable to generate a detailed answer. Please try again.',
                isLoading: false,
              }
            : a
        )
      );
    }
  };

  useEffect(() => {
    loadInsights();
  }, []);

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />;
      case 'success':
        return <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />;
      case 'tip':
        return <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />;
      case 'info':
        return <Info className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />;
      default:
        return <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />;
    }
  };

  const getInsightColors = (type: string) => {
    switch (type) {
      case 'warning':
        return 'border-l-pink-500 bg-pink-50 dark:bg-pink-900/20';
      case 'success':
        return 'border-l-pink-500 bg-pink-50 dark:bg-pink-900/20';
      case 'tip':
        return 'border-l-pink-500 bg-pink-50 dark:bg-pink-900/20';
      case 'info':
        return 'border-l-pink-500 bg-pink-50 dark:bg-pink-900/20';
      default:
        return 'border-l-pink-400 bg-pink-50 dark:bg-pink-900/30';
    }
  };

  const getButtonColors = () => {
    return 'text-pink-700 dark:text-pink-300 hover:text-pink-800 dark:hover:text-pink-200';
  };

  const formatLastUpdated = () => {
    if (!lastUpdated) return 'Loading...';

    const now = new Date();
    const diffMs = now.getTime() - lastUpdated.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;

    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;

    return lastUpdated.toLocaleDateString();
  };

  if (isLoading) {
    return (
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-pink-100/50 dark:border-pink-700/50">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-500 via-pink-400 to-pink-300 rounded-xl flex items-center justify-center shadow-lg">
            <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
              AI Insights
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Analyzing your spending patterns
            </p>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Loader2 className="w-5 h-5 animate-spin text-pink-500" />
            <span className="text-xs sm:text-sm text-pink-600 dark:text-pink-400 font-medium hidden sm:block">
              Analyzing...
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-pink-100/50 dark:border-pink-700/50 hover:shadow-2xl">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-500 via-pink-400 to-pink-300 rounded-xl flex items-center justify-center shadow-lg">
            <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
              AI Insights
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              AI financial analysis
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="inline-flex items-center gap-2 bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-2 py-1 rounded-full text-xs font-medium">
            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
            <span className="hidden sm:inline">{formatLastUpdated()}</span>
            <span className="sm:hidden">
              {formatLastUpdated().includes('ago')
                ? formatLastUpdated().replace(' ago', '')
                : formatLastUpdated()}
            </span>
          </div>
          <button
            onClick={loadInsights}
            className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 hover:from-pink-700 hover:via-pink-600 hover:to-pink-500 text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200"
            disabled={isLoading}
          >
            <RefreshCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
        {insights.map((insight) => {
          const currentAnswer = aiAnswers.find(
            (a) => a.insightId === insight.id
          );

          return (
            <div
              key={insight.id}
              className={`relative overflow-hidden rounded-xl p-3 sm:p-4 border-l-4 hover:shadow-lg transition-all duration-200 ${getInsightColors(
                insight.type
              )}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center bg-pink-100 dark:bg-pink-900/50">
                      {getInsightIcon(insight.type)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-0.5">
                        {insight.title}
                      </h4>
                      {insight.confidence && insight.confidence < 0.8 && (
                        <span className="inline-block px-2 py-0.5 bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 rounded-full text-xs font-medium">
                          Preliminary
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed mb-3">
                    {insight.message}
                  </p>
                  {insight.action && (
                    <div className="text-left">
                      <span
                        onClick={() => handleActionClick(insight)}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium text-xs cursor-pointer transition-all duration-200 ${getButtonColors()} hover:bg-white/50 dark:hover:bg-gray-700/50 ${
                          currentAnswer ? 'bg-white/50 dark:bg-gray-700/50' : ''
                        }`}
                      >
                        <span>{insight.action}</span>
                        {currentAnswer?.isLoading ? (
                          <Loader2 className="w-3 h-3 animate-spin" />
                        ) : currentAnswer ? (
                          <ChevronUp className="w-3 h-3" />
                        ) : (
                          <ChevronRight className="w-3 h-3" />
                        )}
                      </span>
                    </div>
                  )}

                  {currentAnswer && (
                    <div className="mt-3 p-3 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-lg border border-pink-200 dark:border-pink-600">
                      <div className="flex items-start gap-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-pink-500 via-pink-400 to-pink-300 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Bot className="w-3 h-3 text-white" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100 text-xs mb-1">
                            AI Answer:
                          </h5>
                          {currentAnswer.isLoading ? (
                            <div className="space-y-1">
                              <div className="animate-pulse bg-gray-200 dark:bg-gray-600 h-2 rounded-lg w-full"></div>
                              <div className="animate-pulse bg-gray-200 dark:bg-gray-600 h-2 rounded-lg w-3/4"></div>
                              <div className="animate-pulse bg-gray-200 dark:bg-gray-600 h-2 rounded-lg w-1/2"></div>
                            </div>
                          ) : (
                            <p className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed">
                              {currentAnswer.answer}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-pink-100 dark:border-pink-700">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-50 dark:bg-pink-900/30 rounded-lg flex items-center justify-center">
              <Brain className="w-4 h-4 text-pink-600" />
            </div>
            <span className="font-medium text-xs">Powered by AI analysis</span>
          </div>
          <button
            onClick={loadInsights}
            className="px-3 py-1.5 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 hover:from-pink-700 hover:via-pink-600 hover:to-pink-500 text-white rounded-lg font-medium text-xs shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <span className="sm:hidden">Refresh</span>
            <span className="hidden sm:inline">Refresh Insights →</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
