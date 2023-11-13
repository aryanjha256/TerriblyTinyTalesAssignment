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
                <div className=" flex items-center bg-teal-400 rounded-full">
                  <FaThumbsUp className="cursor-pointer text-sm text-white m-2" />
                </div>
              ) : (
                <div className=" flex items-center bg-white rounded-full">
                  <FaThumbsUp className="cursor-pointer text-sm text-black m-2" />
                </div>
              )}
            </div>
            <div className="my-2">
              <div>{post.postcontent}</div>
            </div>
            <div className=" flex justify-between text-sm">
              <div className=" font-semibold">
                <span className="cursor-pointer text-teal-600 ">
                  {post.category}
                </span>{" "}
                by {user.username}
              </div>
              <div>
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
