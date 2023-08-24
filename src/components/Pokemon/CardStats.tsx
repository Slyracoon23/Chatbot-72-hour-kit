import React from "react";
import { FaTrophy } from "react-icons/fa";

const CardStats = ({
  stats = [
    { name: "Score", value: 80 },
    { name: "Accuracy", value: 60 },
    { name: "Speed", value: 90 },
  ],
}) => {
  const maxStat = Math.max(...stats.map((stat) => stat.value));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded p-4 w-64">
        <h2 className="text-xl font-semibold mb-4">Stats</h2>
        {stats.map((stat, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">{stat.name}</span>
              <span className="text-gray-800">{stat.value}</span>
            </div>
            <div className="relative mt-2">
              <div className="bg-gray-200 w-full h-2 rounded-full">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{
                    width: `${(stat.value / maxStat) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
        <FaTrophy className="text-yellow-400 w-6 h-6" />
      </div>
    </div>
  );
};

export default CardStats;
