import { FaThumbsUp } from "react-icons/fa";
import { user } from "../data/info.json";

// Helper function to truncate text to a 12 words.
const truncateText = (text, maxLength) => {
  const words = text.split(" ");
  if (words.length > maxLength) {
    return words.slice(0, maxLength).join(" ") + "...";
  }
  return text;
};

const Post = () => {
  return (
    <>
      {user.posts.map((post, index) => {
        const truncatedContent = truncateText(post.postcontent, 12);
        return (
          <div className="border-b py-4" key={index}>
            <div className="flex justify-between mb-2">
              <div className="font-bold text-lg">{post.title}</div>
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
              <div>{truncatedContent}</div>
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
