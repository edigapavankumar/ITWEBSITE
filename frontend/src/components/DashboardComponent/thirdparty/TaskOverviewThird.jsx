import React, { useState } from 'react';

const TaskOverviewThird = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Design Homepage',
      deadline: '2024-10-20',
      instructions: 'Create a modern UI for the homepage.',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'Fix Login Bug',
      deadline: '2024-10-22',
      instructions: 'Resolve authentication issue on login page.',
      status: 'In Progress',
    },
  ]);

  const submitTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: 'Submitted' } : task,
      ),
    );
  };

  return (
    <div className="p-5 min-h-screen text-black">
      <h1 className="text-2xl font-bold mb-4">Task Overview</h1>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-sm">Deadline: {task.deadline}</p>
            <p className="text-sm">Instructions: {task.instructions}</p>
            <p className="text-sm">Status: {task.status}</p>
            {task.status !== 'Submitted' && (
              <button
                className="bg-blue-500 text-white p-2 rounded mt-2"
                onClick={() => submitTask(task.id)}
              >
                Submit Task
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskOverviewThird;
