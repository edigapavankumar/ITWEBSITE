import React from 'react';

const CommunicationThird = () => {
  // Dummy data for messages from super admins
  const messages = [
    {
      id: 1,
      sender: 'Super Admin 1',
      subject: 'Task Update',
      message:
        'Please ensure to complete the pending tasks by the end of the week.',
      date: '2025-02-06',
    },
    {
      id: 2,
      sender: 'Super Admin 2',
      subject: 'System Maintenance',
      message:
        'The system will be down for maintenance on 2025-02-07 from 2:00 AM to 4:00 AM.',
      date: '2025-02-05',
    },
    {
      id: 3,
      sender: 'Super Admin 3',
      subject: 'New Guidelines',
      message:
        'New guidelines have been issued for task reporting. Please read them carefully.',
      date: '2025-02-04',
    },
  ];

  return (
    <div className="p-4  rounded-lg">
      <h2 className="text-xl font-bold mb-4">Communication</h2>

      {/* Render messages dynamically */}
      {messages.map((message) => (
        <div
          key={message.id}
          className="mb-4 p-4 bg-white shadow-md rounded-lg"
        >
          <h3 className="text-lg font-semibold">{message.subject}</h3>
          <p className="text-sm text-gray-600">From: {message.sender}</p>
          <p className="text-sm text-gray-600">{message.message}</p>
          <p className="text-xs text-gray-400">Sent on: {message.date}</p>
        </div>
      ))}
    </div>
  );
};

export default CommunicationThird;
