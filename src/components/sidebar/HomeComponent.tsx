import { Cpu, Lightbulb, ShoppingCart } from "lucide-react";
import { useState } from "react";

const HomeComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const dashboardItems = [
    {
      icon: Cpu,
      title: "Explore GPTs",
    },
    {
      icon: ShoppingCart,
      title: "GPT Store",
    },
    {
      icon: Lightbulb,
      title: "Custom Instructions",
    },
  ];

  return (
    <>
      {dashboardItems.map((item, index) => {
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

export default HomeComponent;
