import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsX, BsGithub } from "react-icons/bs";
import logo from "../assets/NSP LOGO.png";

export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
              <div className="flex items-center space-x-2">
                <img src={logo} alt="Logo" className="h-12" />{" "}
                {/* Adjust height and width as needed */}
                <div className="flex flex-col items-start">
                  <span className=" bg-gradient-to-r {from-indigo-500 via-purple-500 to-pink-500 rounded-xl} text-2xl font-bold text-sky-600">
                    Jyotideep
                  </span>
                  <span className="text-sm">Naya Savera Parivar</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.google.com"
                  target="_blank"
                  rel="nooppener noreferrer"
                >
                  100 Js Projects
                </Footer.Link>
                <Footer.Link as={"div"}>
                  <Link to="/about">Jyotideep's Blog</Link>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/PremRaj99"
                  target="_blank"
                  rel="nooppener noreferrer"
                >
                  Git Hub
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Leagal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; condition</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <div className="">
            <Footer.Copyright
              href="#"
              by="Jyotideep's blog"
              year={new Date().getFullYear()}
            />
          </div>
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/premraj.prajapati.737/"
              target="_blank"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/prem_raj_0009"
              target="_blank"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://github.com/PremRaj99"
              target="_blank"
              icon={BsGithub}
            />
            <Footer.Icon href="#" icon={BsX} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
