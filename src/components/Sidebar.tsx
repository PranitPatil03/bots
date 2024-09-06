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
  X
} from "lucide-react";
import { Button } from "./ui/button";
import { logo, vect } from "@/assets/icons";
import AnalyticsComponent from "./sidebar/AnalyticsComponent";
import UsersComponent from "./sidebar/UsersComponent";
import CalendarComponent from "./sidebar/CalendarComponent";
import NotificationsComponent from "./sidebar/NotificationsComponent";
import SettingsComponent from "./sidebar/SettingsComponent";
import HomeComponent from "./sidebar/HomeComponent";

const sidebarItems = [
  { icon: Home, label: "Home", content: HomeComponent },
  { icon: BarChart2, label: "Analytics", content: AnalyticsComponent },
  { icon: Users, label: "Users", content: UsersComponent },
  { icon: Calendar, label: "Calendar", content: CalendarComponent },
  { icon: Bell, label: "Notifications", content: NotificationsComponent },
  { icon: Settings, label: "Settings", content: SettingsComponent },
];

interface DynamicSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const DynamicSidebar: React.FC<DynamicSidebarProps> = ({ isOpen, onClose }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const toggleActiveItem = (index: number) => {
    setActiveItem(activeItem === index ? null : index);
  };

  const SidebarIcon: React.FC<{
    Icon: React.ElementType;
    isActive: boolean;
    onClick: () => void;
  }> = ({ Icon, isActive, onClick }) => (
    <div
      className={`w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer
        ${isActive ? "bg-gray-700 text-white" : "text-gray-400 hover:bg-gray-700 hover:text-white"}`}
      onClick={onClick}
    >
      <Icon size={20} />
    </div>
  );

  const desktopSidebar = (
    <div className="hidden lg:flex h-screen">
      <div className="w-16 flex flex-col items-center py-4 space-y-6 border-r bg-white">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl">
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
        </div>
        {sidebarItems.map((item, index) => (
          <SidebarIcon
            key={index}
            Icon={item.icon}
            isActive={activeItem === index}
            onClick={() => toggleActiveItem(index)}
          />
        ))}
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
                <img src={vect} alt="logo icon" className="h-8 w-8 object-contain" />
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
            <div className="p-4">
              {activeItem !== null && React.createElement(sidebarItems[activeItem].content)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const mobileSidebar = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 lg:hidden"
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold">Menu</h2>
              <Button onClick={onClose} className="focus:outline-none" variant="ghost">
                <X size={24} />
              </Button>
            </div>
            <div className="flex-grow overflow-y-auto">
              {sidebarItems.map((item, index) => (
                <div
                  key={index}
                  className="p-4 flex items-center space-x-4 cursor-pointer hover:bg-gray-100"
                  onClick={() => toggleActiveItem(index)}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {desktopSidebar}
      {mobileSidebar}
    </>
  );
};

export default DynamicSidebar;