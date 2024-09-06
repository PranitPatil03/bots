import Navbar from "@/components/Navbar";
import Chat from "./Chat";
import { useState } from "react";

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=" bg-gray-100 h-screen">
      <div className="hidden md:block">
        <Navbar onMenuClick={toggleSidebar} />
      </div>
      <Chat></Chat>
    </div>
  );
};

export default HomePage;
