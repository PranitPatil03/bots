import { MessageCircle, Calendar } from "lucide-react";
import { useState } from "react";

const SettingsComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const chatItems = [
    {
      icon: MessageCircle,
      title: "Chat with AI",
    },
    {
      icon: Calendar,
      title: "Schedule a Meeting",
    },
  ];

  return (
    <>
      {chatItems.map((item, index) => {
        const isSelected = selectedIndex === index;
        return (
          <div
            className={`flex gap-4 p-3 cursor-pointer rounded-xl m-1 hover:bg-gray-100 ${
              isSelected ? "bg-gray-100" : ""
            }`}
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            <item.icon className="w-6 h-6 flex items-center justify-center rounded-lg cursor-pointer text-gray-400"></item.icon>
            <p className="text-base font-medium">{item.title}</p>
          </div>
        );
      })}
    </>
  );
};

export default SettingsComponent;
