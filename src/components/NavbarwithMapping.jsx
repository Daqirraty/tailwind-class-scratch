import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { FaBasketballBall } from "react-icons/fa";
import { navData } from "../data/navData";
import {Link} from "react-router-dom"
const NavbarwithMapping = () => {
  return (
    <div className="relative group-hover:bg-purple-700 border-2 border-red-600 flex justify-center">
      <div className=" w-[75%] flex justify-center items-center gap-5">
        <div>Image</div>
        <div className=" w-[75%] flex items-center justify-between border-4 border-cyan-800">
          <ul className="w-[75%] flex justify-around items-center">
            {navData.map((items) => (
            <Link to={'#'} className="group flex items-center">
                <li className="w-fit p-5 border-2 border-red-600">{items.title}</li>
                <IoIosArrowDown />
                 
               
                 {/* disapperaing div */}
                 {items.dropdown &&
                 <div className="w-[100%] h-[18rem] bg-purple-700 hidden group-hover:flex justify-center justify-center items-center absolute top-[4.6rem] left-0 border-2 border-green-700">
                    <div className="border-2 border-green-800 grid grid-cols-3 gap-5">
                        {
                            items.subMenu.map((subMenu) => (
                            <div key={subMenu.subMenutitle}>
                                <h3>{subMenu.subMenutitle}</h3>
                                <ul>
                                    {subMenu.menuList.map((menuListItems) => (
                                        <Link to={menuListItems.listLink}>
                                        <li>{menuListItems.listName} </li>
                                        </Link>
                                    ))}
                                    
                                </ul>
                            </div>
                            ))
                        }
                            
                    </div>
                </div>
                 }
                 
            </Link>
          ))}
           
           
           
          </ul>
          <div className="flex items-center gap-2 ">
            <IoIosSearch />
            <FaBasketballBall />
            <p>search</p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default NavbarwithMapping;
