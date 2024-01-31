import React from 'react';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const data = {
    labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
    datasets: [
      {
        label: 'Acquisitions by year',
        data: [10, 20, 15, 25, 22, 30, 28],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
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
      {/* <Bar data={data} options={options} /> */}
    </div>
  );
};

export default Dashboard;
