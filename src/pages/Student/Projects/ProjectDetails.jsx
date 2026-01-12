import React from "react";
import { dummyGroups } from "../../../utils/dummyData";

const ProjectDetails = () => {
  const myGroup = dummyGroups[0];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Project Details</h2>
      
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 space-y-6">
        <div>
          <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{myGroup.project}</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">Domain: Artificial Intelligence & Machine Learning</p>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Abstract</h4>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This project aims to develop a robust attendance management system using facial recognition technology. 
            It addresses the inefficiencies of manual attendance taking by automating the process. 
            The system essentially consists of a camera module to capture faces, a processing unit to identify students, 
            and a database to record attendance logs in real-time.
          </p>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Technologies Used</h4>
          <div className="flex flex-wrap gap-3">
             {["Python", "OpenCV", "React.js", "Node.js", "MongoDB", "TensorFlow"].map((tech) => (
               <span key={tech} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-semibold border border-gray-200 dark:border-gray-600">
                 {tech}
               </span>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
