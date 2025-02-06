import React from "react";
import Home from "./pages/Home";
import Navbar1 from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
import Login1 from "./pages/Login2step";
import DashboardLayoutBasic from "./components/DashboardComponent/Employee";
import Footer from "./components/Footer/Footer"; // Import Footer
import Home1 from "./pages/Home1";
import Login from "./pages/Login.jsx";
import { EmployeeListPage } from "./pages/getEmployees.jsx";
import { EmployeeContextProvider } from "./context/EmployeesContext";
import Sidebar from "./components/sidebar/Sidebar";
// Admin Pages
import Usermanagement from "./components/DashboardComponent/admin/Usermanagement";
import Contentmanagement from "./components/DashboardComponent/admin/Contentmanagement";
import Taskmanagement from "./components/DashboardComponent/admin/Taskmanagement";
import Notificationmanagement from "./components/DashboardComponent/admin/Notificationmanagement";
import Financialmanagement from "./components/DashboardComponent/admin/Financialmanagement";

// Employee Pages
import Notificationmanagementemp from "./components/DashboardComponent/emp/Notificationmanagementemp";
import Taskmanagementemp from "./components/DashboardComponent/emp/Taskmanagementemp";
import Performancemanagementemp from "./components/DashboardComponent/emp/Performancemanagementemp";

// Third-party Pages
import TaskOverviewThird from "./components/DashboardComponent/thirdparty/TaskOverviewThird";
import EarningsManagementThird from "./components/DashboardComponent/thirdparty/EarningsManagementThird";
import PerformanceMetricsThird from "./components/DashboardComponent/thirdparty/PerformanceMetricsThird";
import CommunicationThird from "./components/DashboardComponent/thirdparty/CommunicationThird";

function App() {
  const role = "thirdparty";
  const login = true;
  return (
    <div className="app">
      {/* <Navbar1 /> */}
      {/* <Sidebar role={role} /> */}
      {/* <div className="w-full p-6"> */}
        {/* <Routes> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* Admin Routes */}
          {/* {role === "admin" && ( */}
            {/* <> */}
              {/* <Route path="/usermanagement" element={<Usermanagement />} /> */}
              {/* <Route */}
                {/* path="/contentmanagement" */}
                {/* element={<Contentmanagement />} */}
              {/* /> */}
              {/* <Route path="/taskmanagement" element={<Taskmanagement />} /> */}
              {/* <Route */}
                {/* path="/notificationmanagement" */}
                {/* element={<Notificationmanagement />} */}
              {/* /> */}
              {/* <Route */}
                {/* path="/financialmanagement" */}
                {/* element={<Financialmanagement />} */}
              {/* /> */}
            {/* </> */}
          {/* )} */}

          {/* Employee Routes */}
          {/* {role === "emp" && ( */}
            {/* <>
              <Route
                path="/taskmanagementemp"
                element={<Taskmanagementemp />}
              />
              <Route
                path="/performancemanagementemp"
                element={<Performancemanagementemp />}
              />
              <Route
                path="/notificationmanagementemp"
                element={<Notificationmanagementemp />}
              />
            </> */}
          {/* )} */}

          {/* Third-Party Routes */}
          {/* {role === "thirdparty" && (
            <>
              <Route
                path="/taskoverviewthird"
                element={<TaskOverviewThird />}
              />
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
        </Routes>
      </div> */}
      <Navbar1 />
      <EmployeeContextProvider>
        <Routes>
          <Route path="/test" element={<DashboardLayoutBasic />} />
          <Route path="/" element={<Home1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login1" element={<Login1 />} />
          {/* <Route path="/home1" element={<Home1 />} /> */}

          <Route path="/getemp" element={<EmployeeListPage />} />
        </Routes>
      </EmployeeContextProvider>
      {/* <Home1 /> */}
      <Footer />
    </div>
  );
}

export default App;

//https://chatgpt.com/share/67a50a63-bc1c-800d-b12f-7c2e22e2203b
