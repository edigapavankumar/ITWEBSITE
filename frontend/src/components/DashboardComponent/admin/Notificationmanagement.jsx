import React, { useState } from 'react';

const NotificationManagement = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: 'New task assigned',
      type: 'Task',
      status: 'Unread',
      scope: 'Individual',
    },
    {
      id: 2,
      message: 'Payment received',
      type: 'Finance',
      status: 'Read',
      scope: 'Individual',
    },
    {
      id: 3,
      message: 'Meeting scheduled',
      type: 'General',
      status: 'Unread',
      scope: 'System-wide',
    },
    {
      id: 4,
      message: 'System maintenance update',
      type: 'System',
      status: 'Unread',
      scope: 'System-wide',
    },
  ]);

  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id
          ? { ...notification, status: 'Read' }
          : notification,
      ),
    );
  };

  return (
    <div className="p-5 min-h-screen text-black">
      <h1 className="text-2xl font-bold mb-4">Admin Notification Management</h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="p-4 border rounded-lg flex justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold">{notification.message}</h3>
              <p className="text-sm">Type: {notification.type}</p>
              <p className="text-sm">Scope: {notification.scope}</p>
              <p className="text-sm">Status: {notification.status}</p>
            </div>
            {notification.status === 'Unread' && (
              <button
                className="bg-blue-500 text-white p-2 rounded"
                onClick={() => markAsRead(notification.id)}
              >
                Mark as Read
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationManagement;
