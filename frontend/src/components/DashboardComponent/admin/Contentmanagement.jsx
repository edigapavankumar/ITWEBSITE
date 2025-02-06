import React from 'react';

const dummyData = [
  { id: 1, title: 'Article 1', author: 'John Doe', date: '2023-10-01' },
  { id: 2, title: 'Article 2', author: 'Jane Smith', date: '2023-10-02' },
  { id: 3, title: 'Article 3', author: 'Alice Johnson', date: '2023-10-03' },
  { id: 4, title: 'Article 4', author: 'Bob Brown', date: '2023-10-04' },
];

const ContentManagement = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Content Management</h1>
      <div className="space-y-4">
        {dummyData.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-600">Author: {item.author}</p>
            <p className="text-gray-600">Date: {item.date}</p>
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
  );
};

export default ContentManagement;
