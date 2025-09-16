import { HiDotsHorizontal } from "react-icons/hi";

const MiniProfile = ({ session }) => {
  const {
    user: { username, image, email, name },
  } = session;
  console.log(username, image, email);
  return (
    <div className="flex items-center gap-3 self-end mb-5">
      <img
        src={image}
        alt="user image"
        className="w-[40px] h-[40px] object-cover  rounded-full"
      />
      <div className="text-stone-200 flex flex-col ">
        <span className="font-bold text-sm">{name}</span>
        <span className="text-stone-400 text-sm">@{username}</span>
      </div>
      <span className="text-stone-50 ml-auto">
        <HiDotsHorizontal />
      </span>
    </div>
  );
};

export default MiniProfile;
