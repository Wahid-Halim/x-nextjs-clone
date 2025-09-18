// import { GoFileMedia } from "react-icons/go";
import { HiOutlinePhotograph } from "react-icons/hi";

const Input = ({ session }) => {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <img
          src={session?.user.image}
          alt="user image"
          className="w-[40px] h-[40px] object-cover  rounded-full "
        />

        <input
          type="text"
          placeholder="What's happening?"
          className="text-stone-50 placeholder:text-stone-300 placeholder:text-lg w-full"
        />
      </div>
      {/* <GoFileMedia  /> */}
      <div className="flex items-center justify-between">
        <HiOutlinePhotograph className="text-blue-400 ml-7 text-2xl" />
        <button className="bg-sky-400 text-white border-none font-semibold rounded-full px-4 py-2 ">
          Post
        </button>
      </div>
    </>
  );
};

export default Input;
