import React, { useState } from "react";

const PerformanceManagementEmp = () => {
  const [performanceData, setPerformanceData] = useState([
    { id: 1, task: "Design homepage", status: "Completed", rating: "Excellent" },
    { id: 2, task: "Fix login bug", status: "In Progress", rating: "Good" },
    { id: 3, task: "Update user dashboard", status: "Pending", rating: "N/A" },
  ]);

  return (
    <div className="p-5 min-h-screen text-black">
      <h1 className="text-2xl font-bold mb-4">Employee Performance Tracking</h1>
      <div className="space-y-4">
        {performanceData.map((record) => (
          <div key={record.id} className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold">Task: {record.task}</h3>
            <p className="text-sm">Status: {record.status}</p>
            <p className="text-sm">Rating: {record.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceManagementEmp;
