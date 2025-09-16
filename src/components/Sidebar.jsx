import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { TbCircleLetterBFilled, TbCricket } from "react-icons/tb";
import { TbCircleLetterT } from "react-icons/tb";
import Button from "./Button";

// BuzzTalk
const Sidebar = () => {
  return (
    <div className="flex flex-col ">
      <Link
        href="/"
        className="flex p-3 hover:bg-[#1F1F1F] rounded-full w-fit "
      >
        <TbCircleLetterBFilled className="text-stone-50 text-3xl" />
        <TbCircleLetterT className="text-stone-50 text-3xl" />
      </Link>

      <Link
        href="/home"
        className="flex items-center gap-2 justify-center icon w-fit p-3 hover:bg-[#1F1F1F]"
      >
        <HiHome className="w-7 h-7 cursor-pointer icon" />
        <span className="font-bold hidden xl:inline">Home</span>
      </Link>

      <Button className="mt-3 hidden xl:inline-block">Sign In</Button>
    </div>
  );
};

export default Sidebar;
