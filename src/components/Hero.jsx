import cover from "../assets/cover.jpg";
import headshot from "../assets/headshot.jpg";

const Hero = () => {
  return (
    <div>
      <div className="bg-gradient-to-bl h-3 bg-yellow-200"></div>
      <img
        className="max-h-56 w-full object-cover object-top"
        src={cover}
        alt="Cover Image"
      />
      <div className="">
        <img
          className="relative max-h-32"
          src={headshot}
          alt="Profile Picture"
        />
        <span>Aryan Kumar</span>
        <span>3200</span>
        <span>Followers</span>
        <span>32</span>
        <span>Following</span>
        <div>
          <div>a random python🐍 developer getting rusty.</div>
          <a
            href="https://github.com/aryanjha256"
            className="text-yellow-200 hover:text-yellow-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
