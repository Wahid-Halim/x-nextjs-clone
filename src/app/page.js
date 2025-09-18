import AddPost from "@/components/AddPost";

const page = () => {
  return (
    <div className="w-full">
      <div className="stick top-0 bg-gray-500">
        <h2 className="text-stone-100 text-lg">Home</h2>
      </div>
      <AddPost />
    </div>
  );
};

export default page;
