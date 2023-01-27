import logo from "../assets/images/logo.svg";
import hamburgeMenu from "../assets/images/icon-hamburger.svg";
const NavBar = () => {
  return (
    <nav className="relative top-10">
      <div className="flex justify-between w-auto">
        <div>
          <img
            src={logo}
            alt="logo"
            className="sm:w-[110px] lg:w-[200px] sm:ml-9 lg:ml-[125px]"
          />
        </div>
        <div>
          <div id="hamburger-menu" className="lg:hidden mr-9">
            <img src={hamburgeMenu} alt="hamburger menu" />
          </div>
          <div className="sm:hidden lg:flex lg:mr-[125px]">
            <ul className="lg:flex lg:text-white lg:flex-row lg:justify-start mr-10 space-x-14 font-alata text-lg">
              <li className="">About</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Products</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
