import Post from "./Post";
import { user } from "../data/info.json";

const PostList = () => {
  return (
    <div className="px-6 max-w-3xl mx-auto">
      <div className="text-teal-600 font-bold mt-12 mb-4 px-4 py-2 border max-w-fit">
        {user.posts.length} Posts
      </div>
      <Post />
    </div>
  );
};

export default PostList;
