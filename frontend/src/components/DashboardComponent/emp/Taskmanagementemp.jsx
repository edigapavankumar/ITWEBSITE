import React, { useState } from "react";

const TaskManagementEmp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design homepage", description: "Create a modern UI for the homepage.", deadline: "2024-10-20", status: "In Progress" },
    { id: 2, title: "Fix login bug", description: "Resolve authentication issue on login page.", deadline: "2024-10-22", status: "Pending" },
    { id: 3, title: "Update dashboard", description: "Enhance user dashboard with new widgets.", deadline: "2024-10-25", status: "Completed" },
  ]);

  const updateTaskStatus = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="p-5 min-h-screen text-black">
      <h1 className="text-2xl font-bold mb-4">Employee Task Management</h1>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-sm">Description: {task.description}</p>
            <p className="text-sm">Deadline: {task.deadline}</p>
            <p className="text-sm">Status: {task.status}</p>
            {task.status !== "Completed" && (
              <button
                className="bg-green-500 text-white p-2 rounded mt-2"
                onClick={() => updateTaskStatus(task.id, "Completed")}
              >
                Mark as Completed
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManagementEmp;
