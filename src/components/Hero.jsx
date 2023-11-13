import cover from "../assets/cover.jpg";
import headshot from "../assets/headshot.jpg";
import { user } from "../data/info.json";

const Hero = () => {
  return (
    <div>
      <div className="bg-gradient-to-bl h-3 bg-yellow-200"></div>
      <img
        className="max-h-56 w-full object-cover object-top"
        src={cover}
        alt="Cover Image"
      />
      <div className="max-w-4xl m-auto flex">
        <img
          className="relative max-h-44 rounded-full -mt-12 border-4 border-white"
          src={headshot}
          alt="Profile Picture"
        />
        <div className="ml-4">
          <div className="font-bold">{user.name}</div>
          <div className="text-gray-500">@{user.username}</div>
          <div className="text-gray-600">
            <span>{user.followers}</span>
            <span>Followers</span>
            <span>{user.following}</span>
            <span>Following</span>
          </div>
          <div>
            <div>{user.bio}</div>
            <a
              href="https://github.com/aryanjha256"
              className="text-teal-300 hover:text-teal-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
