import React from "react";

const Marks = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">My Marks</h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            <tr>
              <th className="p-4 border-b dark:border-gray-600">Evaluation Component</th>
              <th className="p-4 border-b dark:border-gray-600 text-center">Max Marks</th>
              <th className="p-4 border-b dark:border-gray-600 text-center">Obtained Marks</th>
              <th className="p-4 border-b dark:border-gray-600">Remarks</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b dark:border-gray-700">
              <td className="p-4 font-semibold">Synopsis</td>
              <td className="p-4 text-center">10</td>
              <td className="p-4 text-center font-bold text-green-600">9</td>
              <td className="p-4 text-sm">Well defined scope.</td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="p-4 font-semibold">Mid-Term Review</td>
              <td className="p-4 text-center">30</td>
              <td className="p-4 text-center font-bold text-green-600">25</td>
              <td className="p-4 text-sm">Good presentation.</td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="p-4 font-semibold">Internal Assessment</td>
              <td className="p-4 text-center">20</td>
              <td className="p-4 text-center font-bold text-blue-600">18</td>
              <td className="p-4 text-sm">-</td>
            </tr>
            <tr className="border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <td className="p-4 font-bold text-right">Total</td>
              <td className="p-4 text-center font-bold">60</td>
              <td className="p-4 text-center font-bold text-indigo-600 dark:text-indigo-400">52</td>
              <td className="p-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Marks;
