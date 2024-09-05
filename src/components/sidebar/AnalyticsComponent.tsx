import { BarChart, Users, MessageCircle } from "lucide-react";

const ChatbotAnalyticsComponent = () => {
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
      {analyticsItems.map((item, key) => {
        return (
          <div className="flex gap-4 p-2 " key={key}>
            <item.icon className="w-6 h-6 flex items-center justify-center rounded-lg cursor-pointer text-gray-400"></item.icon>
            <p className="text-base font-medium">{item.title}</p>
          </div>
        );
      })}
    </>
  );
};

export default ChatbotAnalyticsComponent;
