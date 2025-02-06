import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosClose, IoIosArrowForward } from 'react-icons/io';
import {
  IoMdPerson,
  IoMdCreate,
  IoMdList,
  IoMdStats,
  IoMdNotifications,
} from 'react-icons/io';

const Sidebar = ({ role }) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check if it's mobile
  const navItems = {
    admin: [
      {
        name: 'User Management',
        path: '/usermanagement',
        icon: <IoMdPerson />,
      },
      {
        name: 'Content Management',
        path: '/contentmanagement',
        icon: <IoMdCreate />,
      },
      { name: 'Task Management', path: '/taskmanagement', icon: <IoMdList /> },
      {
        name: 'Financial Management',
        path: '/financialmanagement',
        icon: <IoMdStats />,
      },
      {
        name: 'Notification Management',
        path: '/notificationmanagement',
        icon: <IoMdNotifications />,
      },
    ],
    emp: [
      {
        name: 'Task Management',
        path: '/taskmanagementemp',
        icon: <IoMdList />,
      },
      {
        name: 'Performance Management',
        path: '/performancemanagementemp',
        icon: <IoMdStats />,
      },
      {
        name: 'Notification Management',
        path: '/notificationmanagementemp',
        icon: <IoMdNotifications />,
      },
    ],
    thirdparty: [
      { name: 'Task Overview', path: '/taskoverviewthird', icon: <IoMdList /> },
      {
        name: 'Earnings Management',
        path: '/earningsmanagementthird',
        icon: <IoMdStats />,
      },
      {
        name: 'Performance Metrics',
        path: '/performancemetricsthird',
        icon: <IoMdStats />,
      },
      {
        name: 'Communication',
        path: '/communicationthird',
        icon: <IoMdNotifications />,
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Button to open the sidebar on mobile */}
      <div
        className={`fixed top-1/2 left-0 transform -translate-y-1/2 p-2 cursor-pointer ${
          sidebarVisible ? 'hidden' : 'block'
        }`}
        onClick={() => setSidebarVisible(true)}
      >
        <IoIosArrowForward size={30} className="text-white" />
      </div>

      {/* Sidebar container */}
      <aside
        className={`bg-[#1995AD] p-0 border-r border-gray-700 shadow-xl text-white rounded-r-xl transition-all duration-300 h-screen ${
          sidebarVisible ? 'w-[250px] p-0 m-0' : 'w-0'
        } overflow-hidden`}
      >
        {/* Close button for sidebar */}
        <div
          className="flex justify-end cursor-pointer"
          onClick={() => setSidebarVisible(false)}
        >
          <h1>
            {sidebarVisible ? (
              <IoIosClose size={30} className="text-white" />
            ) : (
              ''
            )}
          </h1>
        </div>

        {/* Sidebar Header */}
        {/* <h3
          className={`text-1xl font-bold text-center capitalize mb-6 border-b border-white text-gray px-3 py-3 ${
            sidebarVisible ? 'block' : 'hidden'
          } ${isMobile ? 'hidden' : 'block'}`}
        >
          {role} Dashboard
        </h3> */}

        {/* Navigation Links */}
        <nav>
          <ul className="space-y-3">
            {navItems[role]?.map(({ name, path, icon }, index) => (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-6 py-3 rounded-lg text-base text-white transition duration-300 w-fit ${
                      isActive
                        ? 'bg-white text-black'
                        : 'hover:bg-white hover:text-green-400'
                    }`
                  }
                >
                  <span className="text-lg">{icon}</span>
                  {/* Show text only on desktop */}
                  <span className={`${isMobile ? 'hidden' : 'block'}  text-sm`}>
                    
                    {name}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
