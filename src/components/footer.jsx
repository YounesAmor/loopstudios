import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";
const Footer = () => {
  return (
    <footer>
      <div className="w-full bg-black p-8">
        <div className="sm:hidden w-full lg:flex justify-between">
          <div>
            <img
              src={logo}
              alt="logo"
              className="sm:w-[110px] lg:w-[200px] lg:ml-[100px]"
            />
          </div>
          <div className="mr-[100px]">
            <ul className="flex text-white lg:flex-row lg:justify-start space-x-2">
              <li>
                <img
                  src={facebook}
                  alt="facobook logo"
                  className="inline-block"
                />
              </li>
              <li>
                <img
                  src={twitter}
                  alt="facobook logo"
                  className="inline-block"
                />
              </li>
              <li>
                <img
                  src={pinterest}
                  alt="facobook logo"
                  className="inline-block"
                />
              </li>
              <li>
                <img
                  src={instagram}
                  alt="facobook logo"
                  className="inline-block"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:hidden w-full lg:flex justify-between items-center mt-6">
          <div className="mx-[100px]">
            <ul className="lg:flex lg:text-white lg:flex-row lg:justify-start space-x-14 font-alata text-lg">
              <li>About</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Products</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="mr-[100px]">
            <p className="text-gray-400 flex font-josefin text-lg">
              © 2021 Loopstudios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full bg-black">
        <div className="flex flex-col items-center justify-center">
          <img src={logo} alt="logo" className="w-[120px] mt-4" />
          <ul className="text-white font-josefin space-y-3 text-md font-medium my-4">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
          <ul className="flex text-white space-x-3 mb-4">
            <li>
              <img
                src={facebook}
                alt="facobook logo"
                className="inline-block"
              />
            </li>
            <li>
              <img src={twitter} alt="facobook logo" className="inline-block" />
            </li>
            <li>
              <img
                src={pinterest}
                alt="facobook logo"
                className="inline-block"
              />
            </li>
            <li>
              <img
                src={instagram}
                alt="facobook logo"
                className="inline-block"
              />
            </li>
          </ul>
          <p className="text-gray-400 flex font-josefin text-md mb-4">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
