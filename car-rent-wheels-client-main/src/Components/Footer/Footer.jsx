import { FaSquareXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Link } from "react-router";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className="bg-[#001931] pt-[80px] text-white">
      <Container>
        <div className=" text-sm grid grid-cols-1 md:grid-cols-3 lg:grid-cols-11 gap-8 lg:gap-2 pb-[50px] border-b border-gray-800">
          <div className="col-span-full lg:col-span-3 space-y-3 text-left mb-0 md:mb-7 lg:mb-0 lg:pr-[60px]">
            <h3 className="font-semibold text-2xl">
              <span className="text-primary">Rent</span>{" "}
              <span className="text-white">Wheels</span>
            </h3>
            <p>
              Welcome to <strong>Rent Wheels</strong> — where every ride begins
              with freedom! We connect you to reliable, comfortable, and
              affordable cars for every journey. Drive your dreams, explore new
              roads.
            </p>
          </div>

          <div className="space-y-3  md:col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-medium">Company</h3>
            <ul className="space-y-2 flex flex-col">
              <li>
                {" "}
                <span className="hover:underline cursor-pointer inline-block">
                  About Us
                </span>
              </li>
              <li>
                <span className="hover:underline cursor-pointer inline-block">
                  Our Mission
                </span>
              </li>
              <li>
                <span className="hover:underline cursor-pointer inline-block">
                  Contact Us
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-3 md:col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-medium">Services</h3>
            <ul className="space-y-2 flex flex-col">
              <li>
                <span className="hover:underline cursor-pointer inline-block">
                  Products & Services
                </span>
              </li>
              <li>
                <span className="hover:underline cursor-pointer inline-block">
                  Customer Stories
                </span>
              </li>
              <li>
                <span className="hover:underline cursor-pointer inline-block">
                  Download Apps
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-3 md:col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-medium">Information</h3>
            <ul className="space-y-2">
              <li>
                <span className="hover:underline cursor-pointer inline-block">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:underline cursor-pointer inline-block">
                  Terms & Conditions
                </span>
              </li>
              <li>
                <span className="hover:underline cursor-pointer inline-block">
                  Join Us
                </span>
              </li>
            </ul>
          </div>

          <div className=" space-y-3 md:col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-medium">Social Links</h3>
            <ul className="space-y-2 flex flex-col">
              <li>
                <Link
                  className="inline-flex items-center gap-2 hover:underline cursor-pointer "
                  to="https://x.com/"
                  target="_blank"
                >
                  {" "}
                  <FaSquareXTwitter /> X
                </Link>
              </li>
              <li>
                <Link
                  className="inline-flex items-center gap-2 hover:underline cursor-pointer "
                  to="https://www.linkedin.com/"
                  target="_blank"
                >
                  {" "}
                  <ImLinkedin />
                  LinkeDin
                </Link>
              </li>
              <li>
                <Link
                  className="inline-flex items-center gap-2 hover:underline cursor-pointer "
                  to="https://www.facebook.com/nabilswear"
                  target="_blank"
                >
                  {" "}
                  <FaFacebookSquare /> Facebook
                </Link>
              </li>
              <li>
                <Link
                  className="inline-flex flex-wrap items-center gap-2 hover:underline cursor-pointer "
                  to="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                >
                  {" "}
                  <MdEmail className="text-lg  min-w-5" />
                  rentwheels@.gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm py-7">
          © 2025 Rent Wheels - All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
