import { MenuIcon, Sun, Moon, Settings } from "lucide-react";
import { avatar } from "@/assets/icons";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Navbar = ({ onMenuClick }: { onMenuClick: () => void }) => {
  return (
    <nav className="p-3 flex items-center justify-between bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <button onClick={onMenuClick} className="mr-4 lg:hidden">
          <MenuIcon className="w-6 h-6" />
        </button>
        <Select>
          <SelectTrigger className="w-[150px] outline-none border-none">
            <SelectValue placeholder="Select a chatbot" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">Customer Support</SelectItem>
              <SelectItem value="banana">E-commerce</SelectItem>
              <SelectItem value="blueberry">Lead Generation</SelectItem>
              <SelectItem value="grapes">Assistant</SelectItem>
              <SelectItem value="pineapple">Marketing</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="hidden md:flex items-center justify-center gap-2 md:gap-5">
          <Sun className="cursor-pointer" />
          <Moon className="cursor-pointer" />
        </div>
        <div className="flex flex-row gap-2 md:gap-5 items-center justify-center cursor-pointer">
          <div className="rounded-full border p-2">
            <MenuIcon className="w-5 h-5"></MenuIcon>
          </div>
          <div className="rounded-full border p-2">
            <Settings className="w-5 h-5"></Settings>
          </div>
          <div className="">
            <img src={avatar} alt="avatar" className="w-8 h-8" />
          </div>
        </div>
    </nav>
  );
};

export default Navbar;