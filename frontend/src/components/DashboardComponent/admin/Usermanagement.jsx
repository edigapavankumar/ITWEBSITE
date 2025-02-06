import React from 'react';

const dummyData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'emp' },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'emp',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    role: 'emp',
  },
  { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', role: 'emp' },
];

const Usermanagement = () => {
  return (
    <div>
      {' '}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">User Management</h1>
        <div className="space-y-4">
          {dummyData.map((user) => (
            <div key={user.id} className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">Email: {user.email}</p>
              <p className="text-gray-600">Role: {user.role}</p>
              <div className="mt-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Usermanagement;
