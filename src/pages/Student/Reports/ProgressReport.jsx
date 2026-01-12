import React from "react";
import { dummyGroups } from "../../../utils/dummyData";

const ProgressReport = () => {
  const myGroup = dummyGroups[0];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Progress Report</h2>
      
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
         <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-8 border-indigo-100 dark:border-indigo-900 mb-4">
               <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{myGroup.progress}%</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Overall Completion</h3>
            <p className="text-gray-500 dark:text-gray-400">Based on phases completed</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
               <h4 className="font-bold text-gray-700 dark:text-gray-200 mb-4">Phase Breakdown</h4>
               <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1 text-gray-700 dark:text-gray-300">
                      <span>Requirement Analysis</span>
                      <span className="font-bold text-green-600">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1 text-gray-700 dark:text-gray-300">
                      <span>Design</span>
                      <span className="font-bold text-green-600">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1 text-gray-700 dark:text-gray-300">
                      <span>Coding</span>
                      <span className="font-bold text-blue-600">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                      <div className="h-2 rounded-full bg-blue-500" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1 text-gray-700 dark:text-gray-300">
                      <span>Testing</span>
                      <span className="font-bold text-gray-400">0%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                       <div className="h-2 rounded-full bg-gray-400" style={{ width: "0%" }}></div>
                    </div>
                  </div>
               </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
               <h4 className="font-bold text-gray-700 dark:text-gray-200 mb-4">Faculty Remarks</h4>
               <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-600 shadow-sm">
                     <p className="text-sm text-gray-600 dark:text-gray-300 italic">"Good progress on the design phase. Make sure to update the sequence diagrams."</p>
                     <p className="text-xs text-right text-gray-400 mt-2">- Prof. Rajesh Sharma, 15 Oct</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-600 shadow-sm">
                     <p className="text-sm text-gray-600 dark:text-gray-300 italic">"Synopsis approved. Proceed with implementation."</p>
                     <p className="text-xs text-right text-gray-400 mt-2">- Prof. Rajesh Sharma, 01 Oct</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ProgressReport;
