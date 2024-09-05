import { avatar } from "@/assets/icons";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MenuIcon, Moon, Settings, Sun } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="px-7 py-3 border-b flex items-center justify-between">
        <div>
          <Select>
            <SelectTrigger className="w-[150px] outline-none border-none">
              <SelectValue placeholder="Select a chatbot" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Sun className="cursor-pointer" />
          <Moon className="cursor-pointer" />
        </div>
        <div className="flex flex-row gap-5 items-center justify-center cursor-pointer">
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
      </div>
    </>
  );
};

export default Navbar;
