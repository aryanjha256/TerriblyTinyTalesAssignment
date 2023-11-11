import logo from "../assets/ttt.svg";

const NavBar = () => {
  return (
    <div className="bg-black flex justify-between text-white px-4 py-2">
      <div className="flex items-center">
        <img src={logo} alt="logo" />
        <span className="font-bold border-l border-yellow-200 ml-2 px-2">
          STORIES
        </span>
      </div>
      <button className=" text-black font-bold px-4 py-2 bg-yellow-200">
        Courses
      </button>
    </div>
  );
};

export default NavBar;
