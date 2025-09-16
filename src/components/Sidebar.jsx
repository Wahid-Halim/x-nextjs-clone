"use client";

import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { TbCircleLetterBFilled, TbCricket } from "react-icons/tb";
import { TbCircleLetterT } from "react-icons/tb";
import Button from "./Button";

//NextAuth
import { signIn, signOut, useSession } from "next-auth/react";
import MiniProfile from "./MiniProfile";

// BuzzTalk
const Sidebar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col justify-between  h-screen">
      <div>
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
        {session ? (
          <Button className="mt-3 hidden xl:inline-block" onClick={signOut}>
            Sign Out
          </Button>
        ) : (
          <Button className="mt-3 hidden xl:inline-block" onClick={signIn}>
            Sign In
          </Button>
        )}
      </div>

      {session && <MiniProfile session={session} />}
    </div>
  );
};

export default Sidebar;
