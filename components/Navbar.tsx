"use client";
import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  const [showServices, setShowServices] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  function mouseEnterLink(id: string) {
    if (id === "services") {
      setShowServices(true);
    } else {
      setShowExplore(true);
    }
  }

  function mouseLeaveLink(id: string) {
    if (id === "services") {
      setShowServices(false);
    } else {
      setShowExplore(false);
    }
  }
  return (
    <nav className="relative z-10 h-[96px] border-b border-[#DCDCDE] border-solid">
      <div className="flex w-[90%] max-w-[1280px] items-center h-full mx-auto justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 no-underline outline-none focus:shadow-md"
        >
          <Image
            src="/images/Logo_ver06.svg"
            alt="shadcn/ui"
            width={200}
            height={100}
          />
        </Link>
        <ul className="flex items-center gap-6">
          <li className="">
            <Link
              href="/"
              className="font-medium hover:text-orange-600 transition-colors duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              href="/"
              className="font-medium hover:text-orange-600 transition-colors duration-300 ease-in-out"
            >
              About Us
            </Link>
          </li>
          <li className="">
            <div
              className="relative"
              onClick={() => setShowServices(!showServices)}
              onMouseLeave={() => mouseLeaveLink("services")}
              onMouseEnter={() => mouseEnterLink("services")}
            >
              {/* <Button variant={"default"}>Services</Button> */}
              <span
                className={`cursor-pointer relative z-20 py-8 font-medium flex items-center gap-1 ${
                  showServices
                    ? "text-orange-600 transition-colors duration-300 ease-in-out"
                    : null
                }`}
              >
                Services <MdKeyboardArrowDown />
              </span>
              <ul
                className={`absolute top-0 mt-16 w-[125px] z-30  bg-white rounded-lg ${
                  showServices ? "" : "hidden"
                }`}
              >
                <li className="px-4 py-1 hover:bg-orange-600 hover:text-white transition-colors duration-300 ease-in-out rounded-t-lg">
                  <Link href="/" className="">
                    Services
                  </Link>
                </li>
                <li className="px-4 py-1 hover:bg-orange-600 hover:text-white transition-colors duration-300 ease-in-out">
                  <Link href="/" className="">
                    Pricing Plan
                  </Link>
                </li>
                <li className="px-4 py-1 hover:bg-orange-600 hover:text-white transition-colors duration-300 ease-in-out rounded-b-lg">
                  <Link href="/" className="">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="hover:text-orange-600 transition-colors duration-300 ease-in-out">
            <Link href="/" className="font-medium">
              Contact Us
            </Link>
          </li>
          <li className=" ">
            <div
              className="relative w-full"
              onClick={() => setShowExplore(!showExplore)}
              onMouseLeave={() => mouseLeaveLink("explore")}
              onMouseEnter={() => mouseEnterLink("explore")}
            >
              <span
                className={`cursor-pointer relative z-20 font-medium flex items-center gap-1 py-6 ${
                  showExplore
                    ? "text-orange-600 transition-colors duration-300 ease-in-out"
                    : null
                }`}
              >
                Explore <MdKeyboardArrowDown />
              </span>
              <ul
                className={`absolute top-0 mt-16 w-[125px]  bg-white rounded-lg ${
                  showExplore ? "" : "hidden"
                }`}
              >
                <li className="px-4 py-1 hover:bg-orange-600 hover:text-white transition-colors duration-300 ease-in-out rounded-t-lg">
                  <Link href="/">FAQs</Link>
                </li>
                <li className="px-4 py-1 hover:bg-orange-600 hover:text-white transition-colors duration-300 ease-in-out">
                  <Link href="/">Team</Link>
                </li>
                <li className="px-4 py-1 hover:bg-orange-600 hover:text-white transition-colors duration-300 ease-in-out rounded-b-lg">
                  <Link href="/">Blog</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link
              href="/"
              className={`${buttonVariants({
                variant: "outline",
              })} font-semibold custom-button-background text-white px-6 py-6 text-lg rounded-md hover:text-white transition-colors duration-300 ease-in-out`}
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
