import React from 'react';
// Admin Pages
import Usermanagement from '../components/DashboardComponent/admin/Usermanagement';
import Contentmanagement from '../components/DashboardComponent/admin/Contentmanagement';
import Taskmanagement from '../components/DashboardComponent/admin/Taskmanagement';
import Notificationmanagement from '../components/DashboardComponent/admin/Notificationmanagement';
import Financialmanagement from '../components/DashboardComponent/admin/Financialmanagement';

// Employee Pages
import Notificationmanagementemp from '../components/DashboardComponent/emp/Notificationmanagementemp';
import Taskmanagementemp from '../components/DashboardComponent/emp/Taskmanagementemp';
import Performancemanagementemp from '../components/DashboardComponent/emp/Performancemanagementemp';

// Third-party Pages
import TaskOverviewThird from '../components/DashboardComponent/thirdparty/TaskOverviewThird';
import EarningsManagementThird from '../components/DashboardComponent/thirdparty/EarningsManagementThird';
import PerformanceMetricsThird from '../components/DashboardComponent/thirdparty/PerformanceMetricsThird';
import CommunicationThird from '../components/DashboardComponent/thirdparty/CommunicationThird';
const Dashboard = () => {
  return (
    <div>
      <Sidebar role={role} />
      <div className="w-full p-6">
        <Route path="/" element={<Home />} />
        {/* Admin Routes */}
        {role === 'admin' && (
          <>
            <Route path="/usermanagement" element={<Usermanagement />} />
            <Route path="/contentmanagement" element={<Contentmanagement />} />
            <Route path="/taskmanagement" element={<Taskmanagement />} />
            <Route
              path="/notificationmanagement"
              element={<Notificationmanagement />}
            />
            <Route
              path="/financialmanagement"
              element={<Financialmanagement />}
            />
          </>
        )}

        {/* Employee Routes */}
        {role === 'emp' && (
          <>
            <Route path="/taskmanagementemp" element={<Taskmanagementemp />} />
            <Route
              path="/performancemanagementemp"
              element={<Performancemanagementemp />}
            />
            <Route
              path="/notificationmanagementemp"
              element={<Notificationmanagementemp />}
            />
          </>
        )}

        {/* Third-Party Routes */}
        {role === 'thirdparty' && (
          <>
            <Route path="/taskoverviewthird" element={<TaskOverviewThird />} />
            <Route
              path="/earningsmanagementthird"
              element={<EarningsManagementThird />}
            />
            <Route
              path="/performancemetricsthird"
              element={<PerformanceMetricsThird />}
            />
            <Route
              path="/communicationthird"
              element={<CommunicationThird />}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
