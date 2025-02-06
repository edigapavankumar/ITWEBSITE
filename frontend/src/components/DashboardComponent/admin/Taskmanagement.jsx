import React, { useState } from 'react';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Design Homepage', assignedTo: 'John', status: 'Pending' },
    {
      id: 2,
      title: 'Fix Backend Bug',
      assignedTo: 'Alice',
      status: 'In Progress',
    },
    { id: 3, title: 'Deploy App', assignedTo: 'Bob', status: 'Completed' },
  ]);

  const updateStatus = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task,
      ),
    );
  };

  return (
    <div className="p-5  min-h-screen text-[#F1F1F2]">
      <h1 className="text-2xl font-bold mb-4">Admin Task Management</h1>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 bg-[#A1D6E2] rounded-lg flex justify-between text-black"
          >
            <div>
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <p className="text-sm">Assigned to: {task.assignedTo}</p>
              <p className="text-sm">Status: {task.status}</p>
            </div>
            <select
              className="bg-[#F1F1F2] p-2 rounded"
              value={task.status}
              onChange={(e) => updateStatus(task.id, e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManagement;
