'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { useState, useEffect } from 'react';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define the type for a record
interface Record {
  date: string; // ISO date string
  amount: number; // Amount spent
  category: string; // Expense category
}

const BarChart = ({ records }: { records: Record[] }) => {
  const [windowWidth, setWindowWidth] = useState(1024); // Default desktop width

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;

  // Aggregate expenses by date
  const aggregateByDate = (records: Record[]) => {
    const dateMap = new Map<
      string,
      { total: number; categories: string[]; originalDate: string }
    >();

    records.forEach((record) => {
      const dateObj = new Date(record.date);
      const year = dateObj.getUTCFullYear();
      const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0');
      const day = String(dateObj.getUTCDate()).padStart(2, '0');
      const dateKey = `${year}-${month}-${day}`;
      const existing = dateMap.get(dateKey);

      if (existing) {
        existing.total += record.amount;
        if (!existing.categories.includes(record.category)) {
          existing.categories.push(record.category);
        }
      } else {
        dateMap.set(dateKey, {
          total: record.amount,
          categories: [record.category],
          originalDate: record.date,
        });
      }
    });

    return Array.from(dateMap.entries())
      .map(([date, data]) => ({
        date,
        amount: data.total,
        categories: data.categories,
        originalDate: data.originalDate,
      }))
      .sort(
        (a, b) =>
          new Date(a.originalDate).getTime() -
          new Date(b.originalDate).getTime()
      );
  };

  const aggregatedData = aggregateByDate(records);

  // Pink color scale based on amount
  const getAmountColor = (amount: number) => {
    if (amount > 200)
      return { bg: 'rgba(236, 72, 153, 0.3)', border: 'rgba(236, 72, 153, 0.9)' }; // Deep pink
    if (amount > 100)
      return { bg: 'rgba(244, 114, 182, 0.3)', border: 'rgba(244, 114, 182, 0.9)' }; // Medium pink
    if (amount > 50)
      return { bg: 'rgba(251, 182, 206, 0.4)', border: 'rgba(251, 182, 206, 0.9)' }; // Soft pink
    return { bg: 'rgba(252, 231, 243, 0.6)', border: 'rgba(252, 231, 243, 0.9)' }; // Very light pink
  };

  // Chart data
  const data = {
    labels: aggregatedData.map((item) => {
      const [, month, day] = item.date.split('-');
      return `${month}/${day}`;
    }),
    datasets: [
      {
        data: aggregatedData.map((item) => item.amount),
        backgroundColor: aggregatedData.map((item) => getAmountColor(item.amount).bg),
        borderColor: aggregatedData.map((item) => getAmountColor(item.amount).border),
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#ec4899', // strong pink
        bodyColor: '#6b7280', // gray
        borderColor: '#f472b6', // medium pink border
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function (context: { dataIndex: number }) {
            const item = aggregatedData[context.dataIndex];
            const categoriesText =
              item.categories.length > 1
                ? `Categories: ${item.categories.join(', ')}`
                : `Category: ${item.categories[0]}`;
            return [`Total: ₹${item.amount.toFixed(2)}`, categoriesText];
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
          font: { size: isMobile ? 12 : 14, weight: 'bold' as const },
          color: '#ec4899',
        },
        ticks: {
          font: { size: isMobile ? 10 : 12 },
          color: '#6b7280',
          maxRotation: isMobile ? 45 : 0,
          minRotation: isMobile ? 45 : 0,
        },
        grid: { display: false },
      },
      y: {
        title: {
          display: true,
          text: 'Amount (₹)',
          font: { size: isMobile ? 12 : 16, weight: 'bold' as const },
          color: '#ec4899',
        },
        ticks: {
          font: { size: isMobile ? 10 : 12 },
          color: '#6b7280',
          callback: (value: string | number) => `₹${value}`,
        },
        grid: { color: '#fbcfe8' }, // pale pink grid lines
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="relative w-full h-64 sm:h-72 md:h-80">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
