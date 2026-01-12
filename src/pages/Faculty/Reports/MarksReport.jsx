import React from "react";
import { dummyStudents } from "../../../utils/dummyData";

const MarksReport = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Marks Report</h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            <tr>
              <th className="p-4 border-b dark:border-gray-600">Roll No</th>
              <th className="p-4 border-b dark:border-gray-600">Name</th>
              <th className="p-4 border-b dark:border-gray-600 text-center">Mid-Sem (30)</th>
              <th className="p-4 border-b dark:border-gray-600 text-center">End-Sem (50)</th>
              <th className="p-4 border-b dark:border-gray-600 text-center">Internal (20)</th>
              <th className="p-4 border-b dark:border-gray-600 text-center">Total (100)</th>
              <th className="p-4 border-b dark:border-gray-600 text-center">Grade</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            {dummyStudents.map((student, i) => {
              // Mock marks logic based on index
              const mid = 20 + (i % 10);
              const end = 35 + (i % 15);
              const internal = 15 + (i % 5);
              const total = mid + end + internal;
              
              return (
                <tr key={student.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 border-b dark:border-gray-700 last:border-none">
                  <td className="p-4 font-mono">{student.rollNo}</td>
                  <td className="p-4 font-medium">{student.name}</td>
                  <td className="p-4 text-center">{mid}</td>
                  <td className="p-4 text-center">{end}</td>
                  <td className="p-4 text-center">{internal}</td>
                  <td className="p-4 text-center font-bold text-indigo-600 dark:text-indigo-400">{total}</td>
                  <td className="p-4 text-center font-bold">
                    <span className={total >= 80 ? 'text-green-600' : total >= 60 ? 'text-blue-600' : 'text-orange-600'}>
                      {total >= 80 ? 'A' : total >= 60 ? 'B' : 'C'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarksReport;
