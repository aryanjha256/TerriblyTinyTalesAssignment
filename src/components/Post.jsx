import { FaThumbsUp } from "react-icons/fa";
import { user } from "../data/info.json";

const Post = () => {
  return (
    <>
      {user.posts.map((post, index) => {
        return (
          <div className="border-b py-4">
            <div className="flex justify-between mb-2">
              <div className="font-bold text-lg " key={index}>
                {post.title}
              </div>
              {post.liked ? (
                <div className=" flex items-center">
                  <FaThumbsUp className="cursor-pointer text-sm text-yellow-400" />
                </div>
              ) : (
                <div className=" flex items-center">
                  <FaThumbsUp className="cursor-pointer text-sm" />
                </div>
              )}
            </div>
            <div className="my-6 text-gray-500">
              <div>{post.postcontent}</div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between text-sm text-gray-400 text-right">
              <div className=" font-semibold">
                <span className="cursor-pointer text-teal-600 ">
                  {post.category}
                </span>{" "}
                by {user.username}
              </div>
              <div className="text-sm text-gray-400">
                {post.date} &middot; {post.readingtime} mins Read &middot;{" "}
                {post.views} Views
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Post;
