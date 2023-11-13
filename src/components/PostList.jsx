import Post from "./Post";
import { user } from "../data/info.json";

const PostList = () => {
  return (
    <div className="mx-2 px-2">
      <div className="text-teal-600 font-bold">{user.posts.length} Posts</div>
      <Post />
    </div>
  );
};

export default PostList;
