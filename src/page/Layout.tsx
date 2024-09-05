import { Outlet } from "react-router-dom";
import DynamicSidebar from "@/components/Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <DynamicSidebar />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
