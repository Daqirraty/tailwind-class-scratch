import logo from "../assets/logo.svg";
import { IoIosArrowDown, IoIosSearch} from "react-icons/io";
// import { CiSearch } from "react-icons/ci";
import { FaBasketballBall } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full text-white bg-black/15 backdrop-opacity-10 absolute top flex justify-center">
      <div className="w-[70%] flex gap-5 items-center py-5 ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex justify-between items-center w-full">
            <ul className="w-[75%] flex justify-around py-5 font-black">
          <Link to="/loginnn">
            <li className="flex items-center gap-2">
            Login
            <IoIosArrowDown />
          </li>
          </Link>
          
          <Link to="/contact">  
          <li className="flex items-center gap-2">
            Bolu
            <IoIosArrowDown />
          </li>
          </Link>
          <li className="flex items-center gap-2">
            Responsiveness
            <IoIosArrowDown />
          </li>
          <li className="flex items-center gap-2">
            About
            <IoIosArrowDown />
          </li>
          <li className="flex items-center gap-2">
            About
            <IoIosArrowDown />
          </li>
          <li className="flex items-center gap-2">
            About
            <IoIosArrowDown />
          </li>
        </ul>

        <div className="flex items-center gap-2 ">
            <IoIosSearch />
            <FaBasketballBall />
            <p>search</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

