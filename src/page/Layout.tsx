import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DynamicSidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="md:hidden">
        <Navbar onMenuClick={toggleSidebar} />
      </div>
      <div className="flex flex-grow overflow-hidden">
        <DynamicSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <div className="flex-grow overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;