import React, { useState } from "react";

const NotificationManagementEmp = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New task assigned: Design homepage", type: "Task", status: "Unread", sender: "Admin" },
    { id: 2, message: "Deadline for project submission: Oct 15", type: "Deadline", status: "Unread", sender: "Admin" },
    { id: 3, message: "Company-wide meeting at 3 PM", type: "Announcement", status: "Read", sender: "Admin" },
  ]);

  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, status: "Read" } : notification
      )
    );
  };

  return (
    <div className="p-5 min-h-screen text-black">
      <h1 className="text-2xl font-bold mb-4">Employee Notification Center</h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="p-4 border rounded-lg flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">{notification.message}</h3>
              <p className="text-sm">Type: {notification.type}</p>
              <p className="text-sm">Sender: {notification.sender}</p>
              <p className="text-sm">Status: {notification.status}</p>
            </div>
            {notification.status === "Unread" && (
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

export default NotificationManagementEmp;
