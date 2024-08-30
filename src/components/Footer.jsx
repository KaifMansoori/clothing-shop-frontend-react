import { Link } from "react-router-dom";
import logo from "../assets/rozy-clothing-logo-transparent.png";
const Footer = () => {
  return (
    <footer className=" bg-slate-200 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center md:justify-end">
          <img src={logo} className="h-[200px] w-[200px]" alt="logo" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800">
              JOIN OUR MAILING LIST
            </h2>
            <p className="text-gray-600 mt-2">
              Stay up to date with the latest news, updates, special offers and
              more!
            </p>
          </div>

          <div className="flex items-center md:justify-end">
            <input
              type="text"
              placeholder="Enter Your email Address"
              className="rounded-l-lg border border-gray-500 px-4 py-2 "
            />
            <button className=" bg-slate-800 text-white font-bold py-2 px-4 rounded-r-lg hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="my-4">
        <hr className="border-t border-gray-300" />
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <ul className="flex items-center gap-4 uppercase">
              <li className="cursor-pointer text-sm">
                <Link to="/new-arrival">New Arrival</Link>
              </li>
              <li className="cursor-pointer text-sm">
                <Link to="/custom-stitching">Custom Stitching</Link>
              </li>
              <li className="cursor-pointer text-sm">
                <Link to="/shop">Shop</Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-end">
              <li className="mr-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            <p className="text-gray-600 mt-2">©Copyright 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
