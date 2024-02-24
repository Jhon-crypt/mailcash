import React from 'react';
import ChartJS from 'chart.js/auto';
import { CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const data = {
  labels,
  datasets: [
    {
      label: 'Income',
      data: [40000, 20000, 40000, 10000, 50000, 60000, 70000 ],
      backgroundColor: '#FFC107',
    },
    {
      label: 'Outcome',
      data: [20000, 20000, 30000, 40000, 50000, 80000, 70000],
      backgroundColor: '#FFFF00',
    },
  ],
};

export default function BarchartIncomeAnalytic() {
  return (

    <>
      <Bar options={options} data={data} style={{ height: "300px"}}/>
    </>

  )
}

