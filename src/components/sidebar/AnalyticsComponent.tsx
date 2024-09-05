import { BarChart, Users, MessageCircle } from "lucide-react";
import { useState } from "react";

const ChatbotAnalyticsComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  const analyticsItems = [
    {
      icon: BarChart,
      title: "Chatbot Performance",
    },
    {
      icon: Users,
      title: "User Engagement",
    },
    {
      icon: MessageCircle,
      title: "Feedback Insights",
    },
  ];

  return (
    <>
      {analyticsItems.map((item, index) => {
        const isSelected = selectedIndex === index;
        return (
          <div
            className={`flex gap-4 p-3 cursor-pointer rounded-xl m-1 hover:bg-gray-100 ${isSelected ? 'bg-gray-100' : ''}`}
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            <item.icon className="w-6 h-6 flex items-center justify-center rounded-lg cursor-pointer text-gray-400 "></item.icon>
            <p className="text-base font-medium">{item.title}</p>
          </div>
        );
      })}
    </>
  );
};

export default ChatbotAnalyticsComponent;
