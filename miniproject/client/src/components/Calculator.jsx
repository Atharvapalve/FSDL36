import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Calculator = () => {
  const [input, setInput] = useState({
    phones: 0,
    laptops: 0,
    chargers: 0,
    tablets: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: parseInt(value || 0) });
  };

  const calculateTotal = () => {
    return (
      input.phones * 0.2 +
      input.laptops * 2.5 +
      input.chargers * 0.3 +
      input.tablets * 0.8
    ).toFixed(2);
  };

  const chartData = {
    labels: ['Phones', 'Laptops', 'Chargers', 'Tablets'],
    datasets: [
      {
        label: 'E-Waste (kg)',
        data: [
          input.phones * 0.2,
          input.laptops * 2.5,
          input.chargers * 0.3,
          input.tablets * 0.8
        ],
        backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#9333ea'],
        borderRadius: 8
      }
    ]
  };

  return (
    <section id="calculator" className="py-20 bg-green-50 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-900">E-Waste Calculator</h2>
        <p className="text-green-700 mt-2">Estimate your e-waste impact below 👇</p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          {['phones', 'laptops', 'chargers', 'tablets'].map((item) => (
            <div key={item}>
              <label className="block mb-1 capitalize text-green-800">
                {item}:
              </label>
              <input
                type="number"
                min="0"
                name={item}
                value={input[item]}
                onChange={handleChange}
                className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          ))}

          <div className="mt-6 p-4 bg-white rounded shadow text-center text-xl text-green-900 font-semibold">
            Total E-Waste: {calculateTotal()} kg
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-md">
          <Bar data={chartData} />
        </div>
      </div>
    </section>
  );
};

export default Calculator;
