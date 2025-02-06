import React from 'react';

const PerformanceMetricsThird = () => {
  // Dummy data for task completion rates and feedback
  const performanceData = [
    {
      id: 1,
      taskName: 'Task 1',
      taskCompletionRate: 85,
      feedback: 'Great work, keep it up!',
    },
    {
      id: 2,
      taskName: 'Task 2',
      taskCompletionRate: 70,
      feedback: 'Needs improvement, focus more on quality.',
    },
    {
      id: 3,
      taskName: 'Task 3',
      taskCompletionRate: 92,
      feedback: 'Excellent performance!',
    },
  ];

  return (
    <div className="p-4  rounded-lg">
      <h2 className="text-xl font-bold mb-4">Performance Metrics</h2>
      {performanceData.map((data) => (
        <div key={data.id} className="mb-4 p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">{data.taskName}</h3>
          <div className="mb-2">
            <p className="text-sm text-gray-600 font-semibold">
              Task Completion Rate:
            </p>
            <p className="text-sm text-gray-800">{data.taskCompletionRate}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 font-semibold">Feedback:</p>
            <p className="text-sm text-gray-800">{data.feedback}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PerformanceMetricsThird;
