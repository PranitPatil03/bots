import { logo, vect } from "@/assets/icons";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  BarChart2,
  Users,
  Calendar,
  Bell,
  Settings,
  Pencil,
} from "lucide-react";
import { Button } from "./ui/button";
import AnalyticsComponent from "./sidebar/AnalyticsComponent";
import UsersComponent from "./sidebar/UsersComponent";
import CalendarComponent from "./sidebar/CalendarComponent";
import NotificationsComponent from "./sidebar/NotificationsComponent";
import SettingsComponent from "./sidebar/SettingsComponent";
import HomeComponent from "./sidebar/HomeComponent";

const sidebarItems = [
  { icon: Home, label: "Home", content: "Dashboard" },
  { icon: BarChart2, label: "Analytics", content: "View Analytics" },
  { icon: Users, label: "Users", content: "Manage Users" },
  { icon: Calendar, label: "Calendar", content: "View Calendar" },
  { icon: Bell, label: "Notifications", content: "Your Notifications" },
];

const DynamicSidebar = () => {
  const [activeItem, setActiveItem] = useState<number | string | null>(null);

  return (
    <div className="flex h-screen">
      <div className="w-16 flex flex-col items-center py-4 space-y-6 border">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl">
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
        </div>
        {sidebarItems.map((item, index) => (
          <SidebarIcon
            key={index}
            Icon={item.icon}
            isActive={activeItem === index}
            onClick={() => setActiveItem(activeItem === index ? null : index)}
          />
        ))}
        <div className="flex-grow" />
        <SidebarIcon
          Icon={Settings}
          isActive={activeItem === "settings"}
          onClick={() =>
            setActiveItem(activeItem === "settings" ? null : "settings")
          }
        />
      </div>

      <AnimatePresence>
        {activeItem !== null && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 300, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-lg overflow-hidden border-r"
          >
            <div className="p-3 border-b flex items-center justify-between">
              <div className="flex flex-row gap-4 items-center">
                <img
                  src={vect}
                  alt="logo icon"
                  className="h-8 w-8 object-contain"
                />
                <p className="text-3xl font-medium">Bots</p>
              </div>
              <Button
                className="focus:outline-none rounded-full p-2"
                aria-label="Edit"
                variant="outline"
              >
                <Pencil className="w-5 h-5" />
              </Button>
            </div>
            <div>
              <div className="text-lg mb-4 border-b p-4">
                {activeItem === 0 && <HomeComponent />}
                {activeItem === 1 && <AnalyticsComponent />}
                {activeItem === 2 && <UsersComponent />}
                {activeItem === 3 && <CalendarComponent />}
                {activeItem === 4 && <NotificationsComponent />}
                {activeItem === "settings" && <SettingsComponent />}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SidebarIcon: React.FC<{
  Icon: React.ElementType;
  isActive: boolean;
  onClick: () => void;
}> = ({ Icon, isActive, onClick }) => {
  return (
    <div
      className={`w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer
        ${
          isActive
            ? "bg-gray-700 text-white"
            : "text-gray-400 hover:bg-gray-700 hover:text-white "
        }`}
      onClick={onClick}
    >
      <Icon size={20} />
    </div>
  );
};

export default DynamicSidebar;
