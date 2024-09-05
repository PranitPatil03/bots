import { MessageCircle, Calendar } from "lucide-react";

const ChatbotComponent = () => { 
  const chatItems = [
    {
      icon: MessageCircle, 
      title: "Chat with GPT",
    },
    {
      icon: Calendar,
      title: "Schedule a Session",
    },
  ];

  return (
    <>
      {chatItems.map((item, key) => {
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

export default ChatbotComponent;
