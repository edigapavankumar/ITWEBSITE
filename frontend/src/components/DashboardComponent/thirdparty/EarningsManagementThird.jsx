import React from 'react';

const EarningsManagementThird = () => {
  // Dummy data for payments and financial reports
  const earningsData = [
    {
      id: 1,
      taskName: 'Task 1',
      amount: 200,
      paymentStatus: 'Completed',
      date: '2025-02-05',
    },
    {
      id: 2,
      taskName: 'Task 2',
      amount: 150,
      paymentStatus: 'Pending',
      date: '2025-02-04',
    },
    {
      id: 3,
      taskName: 'Task 3',
      amount: 300,
      paymentStatus: 'Completed',
      date: '2025-02-03',
    },
  ];

  // Dummy financial report data
  const financialReports = [
    {
      month: 'January',
      totalEarnings: 5000,
      totalExpenses: 2000,
      netProfit: 3000,
    },
    {
      month: 'February',
      totalEarnings: 4000,
      totalExpenses: 1500,
      netProfit: 2500,
    },
  ];

  return (
    <div className="p-4  rounded-lg">
      <h2 className="text-xl font-bold mb-4">Earnings Management</h2>

      {/* Payment Monitoring Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">
          Payments for Completed Tasks
        </h3>
        {earningsData.map((data) => (
          <div key={data.id} className="mb-4 p-4 bg-white shadow-md rounded-lg">
            <h4 className="text-md font-semibold">{data.taskName}</h4>
            <p className="text-sm text-gray-600">Amount: ${data.amount}</p>
            <p className="text-sm text-gray-600">
              Payment Status:{' '}
              <span
                className={`font-semibold ${
                  data.paymentStatus === 'Completed'
                    ? 'text-green-500'
                    : 'text-yellow-500'
                }`}
              >
                {data.paymentStatus}
              </span>
            </p>
            <p className="text-sm text-gray-600">Date: {data.date}</p>
          </div>
        ))}
      </div>

      {/* Financial Reports Section */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Financial Reports</h3>
        {financialReports.map((report, index) => (
          <div key={index} className="mb-4 p-4 bg-white shadow-md rounded-lg">
            <h4 className="text-md font-semibold">{report.month} Report</h4>
            <p className="text-sm text-gray-600">
              Total Earnings: ${report.totalEarnings}
            </p>
            <p className="text-sm text-gray-600">
              Total Expenses: ${report.totalExpenses}
            </p>
            <p className="text-sm text-gray-600">
              Net Profit: ${report.netProfit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarningsManagementThird;
