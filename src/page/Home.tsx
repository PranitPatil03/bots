import Navbar from "@/components/Navbar";
import Chat from "./Chat";

const HomePage = () => {
  return (
    <div className=" bg-gray-100 h-screen ">
      <Navbar></Navbar>
      <Chat></Chat>
    </div>
  );
};

export default HomePage;
