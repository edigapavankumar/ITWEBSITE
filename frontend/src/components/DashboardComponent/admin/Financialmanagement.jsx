import React, { useState } from 'react';

const FinancialManagement = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: 'Salary Payment',
      amount: 5000,
      status: 'Pending',
      recipient: 'Employee',
    },
    {
      id: 2,
      title: 'Office Rent',
      amount: 2000,
      status: 'Completed',
      recipient: 'Third Party',
    },
    {
      id: 3,
      title: 'Software Subscription',
      amount: 300,
      status: 'In Progress',
      recipient: 'Third Party',
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === id
          ? { ...transaction, status: newStatus }
          : transaction,
      ),
    );
  };

  return (
    <div className="p-5  min-h-screen text-[#F1F1F2]">
      <h1 className="text-2xl font-bold mb-4">Admin Financial Management</h1>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="p-4 bg-[#A1D6E2] rounded-lg flex justify-between text-black"
          >
            <div>
              <h3 className="text-lg font-semibold">{transaction.title}</h3>
              <p className="text-sm">Recipient: {transaction.recipient}</p>
              <p className="text-sm">Amount: ${transaction.amount}</p>
              <p className="text-sm">Status: {transaction.status}</p>
            </div>
            <select
              className="bg-[#F1F1F2] p-2 rounded"
              value={transaction.status}
              onChange={(e) => updateStatus(transaction.id, e.target.value)}
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

export default FinancialManagement;
