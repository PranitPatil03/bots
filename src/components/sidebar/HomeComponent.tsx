import { Cpu, Lightbulb, ShoppingCart } from "lucide-react";

const HomeComponent = () => {
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
      {dashboardItems.map((item, key) => {
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

export default HomeComponent;
