import React from "react";
import { dummyStudents } from "../../../utils/dummyData";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";

const StudentMaster = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Student Master</h2>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <FiPlus /> Add Student
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            <tr>
              <th className="p-4 border-b dark:border-gray-600">Roll No</th>
              <th className="p-4 border-b dark:border-gray-600">Name</th>
              <th className="p-4 border-b dark:border-gray-600">Department</th>
              <th className="p-4 border-b dark:border-gray-600">Year</th>
              <th className="p-4 border-b dark:border-gray-600">Status</th>
              <th className="p-4 border-b dark:border-gray-600 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            {dummyStudents.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 border-b dark:border-gray-700 last:border-none">
                <td className="p-4 font-medium">{student.rollNo}</td>
                <td className="p-4">
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{student.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{student.email}</p>
                  </div>
                </td>
                <td className="p-4">{student.department}</td>
                <td className="p-4">{student.year}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    student.status === "Active" 
                      ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300" 
                      : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
                  }`}>
                    {student.status}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <div className="flex justify-center gap-3">
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                      <FiEdit size={18} />
                    </button>
                    <button className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300">
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentMaster;
