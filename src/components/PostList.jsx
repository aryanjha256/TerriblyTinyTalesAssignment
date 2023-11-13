import Post from "./Post";
import { user } from "../data/info.json";

const PostList = () => {
  return (
    <div className="px-6 max-w-3xl mx-auto">
      <div className="text-teal-600 font-bold">{user.posts.length} Posts</div>
      <Post />
    </div>
  );
};

export default PostList;
