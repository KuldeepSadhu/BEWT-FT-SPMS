import React from "react";
import { dummyGroups } from "../../../utils/dummyData";

const MemberMapping = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Member Mapping</h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            <tr>
              <th className="p-4 border-b dark:border-gray-600">Group ID</th>
              <th className="p-4 border-b dark:border-gray-600">Project Title</th>
              <th className="p-4 border-b dark:border-gray-600">Members</th>
              <th className="p-4 border-b dark:border-gray-600">Assigned Guide</th>
              <th className="p-4 border-b dark:border-gray-600">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            {dummyGroups.map((group) => (
              <tr key={group.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 border-b dark:border-gray-700 last:border-none">
                <td className="p-4 font-mono text-sm">{group.id}</td>
                <td className="p-4 font-semibold">{group.project}</td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {group.students.map((s, i) => (
                      <span key={i} className="bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4">{group.guide}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    group.status === "Approved" 
                      ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                      : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300"
                  }`}>
                    {group.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberMapping;
