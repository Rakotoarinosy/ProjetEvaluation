import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

export const BarChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sample Data',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Bar Chart Example</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export const LineChart = () => {
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        {
          label: 'Sample Data',
          data: [65, 59, 80, 81, 56],
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    };
  
    const options = {
      scales: {
        x: {
          type: 'linear', // assurez-vous que le type est défini comme 'linear'
          position: 'bottom',
        },
        y: {
          type: 'linear', // assurez-vous que le type est défini comme 'linear'
          position: 'left',
        },
      },
    };
  
    return (
      <div>
        <h2>Line Chart Example</h2>
        <Line data={data} options={options} />
      </div>
    );
  };