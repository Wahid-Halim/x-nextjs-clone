"use client";
import { GoFileMedia } from "react-icons/go";

import { useSession } from "next-auth/react";
import Input from "./PostInputBox";
import PostInputBox from "@/components/PostInputBox";

const AddPost = () => {
  const { data: session } = useSession();
  return (
    <div className="border border-stone-800 w-full px-4 py-2 flex flex-col gap-y-4">
      {!session ? null : <PostInputBox session={session} />}
    </div>
  );
};

export default AddPost;
