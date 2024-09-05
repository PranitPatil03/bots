import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Paperclip, Mic, ArrowUp } from "lucide-react";
import { ai, avatar, pic } from "@/assets/icons";
import { Input } from "@/components/ui/input";

export default function ChatComponent() {
  const [messages] = useState([
    {
      role: "user",
      content: "do androids truly dream of electric sheep or not",
      timestamp: "02:22 AM",
    },
    {
      role: "assistant",
      content:
        "The question of whether androids dream of electric sheep is the title and central theme of the science fiction novel 'Do Androids Dream of Electric Sheep?' by Philip K. Dick.\n\n1. The book explores a world where androids are indistinguishable from humans except for a lack of empathy. The story follows Rick Deckard, a bounty hunter who tracks down rogue androids.\n\n2. The title refers to the empathy test used to distinguish between humans and androids. The test involves administering a fictional scenario and evaluating the subject's emotional response. Electric sheep are rare, real animals that people own as status symbols. Owning one is seen as a sign of empathy and a connection to the natural world.\n\n3. The book never definitively answers the question of whether androids dream or not. It explores the nature of reality, consciousness, and what it means to be human.\n\n4. The book inspired the movie Blade Runner, though there are some key differences in plot.",
      timestamp: "02:22 AM",
    },
    {
      role: "user",
      content: "let's say it does - what happens then?",
      timestamp: "02:22 AM",
    },
    {
      role: "assistant",
      content: "",
      timestamp: "02:22 AM",
      image: pic,
    },
  ]);

  return (
    <div className="flex flex-col h-[90vh] max-w-7xl mx-auto">
      <ScrollArea className="flex-grow">
        <div className="p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start space-x-3 ${
                  message.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src={message.role === "user" ? avatar : ai}
                    alt={message.role}
                  />
                  <AvatarFallback>
                    {message.role === "user" ? "You" : "SG"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-base">
                      {message.role === "user" ? "You" : "bots"}
                    </span>
                    <span className="text-xs text-gray-500">
                      {message.timestamp}
                    </span>
                  </div>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-[#F9FAFD]"
                    }`}
                  >
                    {message.image ? (
                      <div>
                        <img
                          src={message.image}
                          alt="Chat image"
                          className="rounded-lg w-full h-auto"
                        />
                      </div>
                    ) : (
                      <p className="whitespace-pre-wrap text-sm">
                        {message.content}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 flex flex-col items-center justify-center w-full">
        <div className="flex items-center space-x-2 w-full border p-2 px-3 rounded-3xl bg-white shadow-lg">
          <button>
            <Paperclip className="h-5 w-5 text-gray-500" />
          </button>
          <Input
            className="flex-grow outline-none border-none"
            placeholder="Message slothGPT..."
          />
          <button>
            <Mic className="h-5 w-5 text-gray-500" />
          </button>
          <button className="rounded-full p-3 bg-blue-600 text-white">
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
        <div className="flex mt-2 text-xs text-gray-500 items-center w-full justify-center">
          <p>slothGPT can make mistakes. Check our Terms & Conditions.</p>
        </div>
      </div>
    </div>
  );
}
