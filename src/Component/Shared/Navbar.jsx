import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  return (
    <div>
      <div className="navbar my-2 max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-[#020043] menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li> 
              <li>
                <a>Service</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              
            </ul>
          </div>
          <a className="text-xl"><img src="../../../public/image/logo dark.png" alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-[#020043] menu-horizontal px-1">
          <li>
                <a>Home</a>
              </li> 
              <li>
                <a>Service</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>About us</a>
              </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn flex items-center gap-2 border-[1px] border-[#020043] text-[#020043] hover:border-none hover:text-[#FFF] hover:bg-[#020043]">Appointment<GoArrowUpRight /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
