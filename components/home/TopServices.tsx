import React from "react";
import { MdOutlineWeb } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import { GrOptimize } from "react-icons/gr";
import { BsBodyText } from "react-icons/bs";
import { FaShopify } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const TopServices = () => {
  return (
    <div className="my-20">
      <p className="text-textSecondary/90 font-semibold mx-auto text-center">
        TOP SERVICES
      </p>
      <h3 className="text-4xl font-bold mt-5 w-[90%] max-w-[550px] mx-auto text-center">
        Elevate online presence with effective strategies.
      </h3>
      <div className="grid grid-rows-2 grid-cols-3 gap-6 w-[90%] max-w-[1280px] mx-auto mt-10">
        <div className="shadow-custom_shadow-00 rounded-xl h-[300px] group overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full rounded-xl group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out">
            <div className="h-max w-max p-4 mx-auto  rounded-2xl bg-textSecondary">
              <MdOutlineWeb className="text-5xl text-white" />
            </div>
            <h3 className="text-2xl font-semibold mt-4 mb-3 max-w-[300px] text-center mx-auto">
              Web Design & Development
            </h3>
            <p className="text-center px-9 text-slate-500/90">
              Crafting visually stunning websites tailored to your brand,
              ensuring a seamless user experience and optimal functionality.
            </p>
          </div>
          <div className="h-full w-full flex flex-col justify-center items-center bg-custom_gradient-01 rounded-xl group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out">
            <h3 className="text-2xl text-white mt-4 mb-3 max-w-[300px] text-center mx-auto">
              Web Design & Development
            </h3>
            <p className="text-center text-white px-9 ">
              Crafting visually stunning websites tailored to your brand,
              ensuring a seamless user experience and optimal functionality.
            </p>
            <Link
              href="/"
              className={`${buttonVariants({
                variant: "outline",
              })} font-semibold bg-transparent mt-6 hover:bg-orange-300 border-2 border-orange-300 border-solid text-white px-6 py-4 text-lg rounded-md hover:text-white transition-colors duration-300 ease-in-out`}
            >
              <p className="relative z-10">Learn more</p>
            </Link>
          </div>
        </div>
        <div className="shadow-custom_shadow-00 rounded-xl h-[300px] group overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full rounded-xl group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out">
            <div className="h-max w-max p-4 mx-auto  rounded-2xl bg-textSecondary">
              <IoIosGlobe className="text-5xl text-white" />
            </div>
            <h3 className="text-2xl font-semibold mt-4 mb-3 max-w-[300px] text-center mx-auto">
              Digital Marketing
            </h3>
            <p className="text-center px-9 text-slate-500/90">
              Elevating online presence through strategic digital marketing,
              maximizing reach, engagement, and conversion for business growth.
            </p>
          </div>
          <div className="h-full w-full flex flex-col justify-center items-center bg-custom_gradient-01 rounded-xl group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out">
            <h3 className="text-2xl text-white mt-4 mb-3 max-w-[300px] text-center mx-auto">
              Digital Marketing
            </h3>
            <p className="text-center text-white px-9 ">
              Elevating online presence through strategic digital marketing,
              maximizing reach, engagement, and conversion for business growth.
            </p>
            <Link
              href="/"
              className={`${buttonVariants({
                variant: "outline",
              })} font-semibold bg-transparent mt-6 hover:bg-orange-300 border-2 border-orange-300 border-solid text-white px-6 py-4 text-lg rounded-md hover:text-white transition-colors duration-300 ease-in-out`}
            >
              <p className="relative z-10">Learn more</p>
            </Link>
          </div>
        </div>
        <div className="shadow-custom_shadow-00 rounded-xl h-[300px] group overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full rounded-xl group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out">
            <div className="h-max w-max p-4 mx-auto  rounded-2xl bg-textSecondary">
              <GrOptimize className="text-5xl text-white" />
            </div>
            <h3 className="text-2xl font-semibold mt-4 mb-3 max-w-[300px] text-center mx-auto">
              Search Engine Optimization
            </h3>
            <p className="text-center px-9 text-slate-500/90">
              Boosting online visibility and climbing search engine ranks with
              proven SEO strategies, standing out in the digital landscape.
            </p>
          </div>
          <div className="h-full w-full flex flex-col justify-center items-center bg-custom_gradient-01 rounded-xl group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out">
            <h3 className="text-2xl text-white mt-4 mb-3 max-w-[300px] text-center mx-auto">
              Search Engine Optimization
            </h3>
            <p className="text-center text-white px-9 ">
              Boosting online visibility and climbing search engine ranks with
              proven SEO strategies, standing out in the digital landscape.
            </p>
            <Link
              href="/"
              className={`${buttonVariants({
                variant: "outline",
              })} font-semibold bg-transparent mt-6 hover:bg-orange-300 border-2 border-orange-300 border-solid text-white px-6 py-4 text-lg rounded-md hover:text-white transition-colors duration-300 ease-in-out`}
            >
              <p className="relative z-10">Learn more</p>
            </Link>
          </div>
        </div>
        <div className="shadow-custom_shadow-00 rounded-xl h-[300px] group overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full rounded-xl group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out">
            <div className="h-max w-max p-4 mx-auto  rounded-2xl bg-textSecondary">
              <BsBodyText className="text-5xl text-white" />
            </div>
            <h3 className="text-2xl font-semibold mt-4 mb-3 max-w-[300px] text-center mx-auto">
              Content Creation and Marketing
            </h3>
            <p className="text-center px-9 text-slate-500/90">
              Crafting compelling content to tell your brand&apos;s story,
              enhance engagement, and drive meaningful connections with your
              target audience.
            </p>
          </div>
          <div className="h-full w-full flex flex-col justify-center items-center bg-custom_gradient-01 rounded-xl group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out">
            <h3 className="text-2xl text-white mt-4 mb-3 max-w-[300px] text-center mx-auto">
              Content Creation and Marketing
            </h3>
            <p className="text-center text-white px-9 ">
              Crafting compelling content to tell your brand&apos;s story,
              enhance engagement, and drive meaningful connections with your
              target audience.
            </p>
            <Link
              href="/"
              className={`${buttonVariants({
                variant: "outline",
              })} font-semibold bg-transparent mt-6 hover:bg-orange-300 border-2 border-orange-300 border-solid text-white px-6 py-4 text-lg rounded-md hover:text-white transition-colors duration-300 ease-in-out`}
            >
              <p className="relative z-10">Learn more</p>
            </Link>
          </div>
        </div>
        <div className="shadow-custom_shadow-00 rounded-xl h-[300px] group overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full rounded-xl group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out">
            <div className="h-max w-max p-4 mx-auto  rounded-2xl bg-textSecondary">
              <FaShopify className="text-5xl text-white" />
            </div>
            <h3 className="text-2xl font-semibold mt-4 mb-3 max-w-[300px] text-center mx-auto">
              E-Commerce Solution
            </h3>
            <p className="text-center px-9 text-slate-500/90">
              Optimizing and developing secure online stores, providing a
              seamless platform to showcase and sell products or services
              effectively.
            </p>
          </div>
          <div className="h-full w-full flex flex-col justify-center items-center bg-custom_gradient-01 rounded-xl group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out">
            <h3 className="text-2xl text-white mt-4 mb-3 max-w-[300px] text-center mx-auto">
              E-Commerce Solution
            </h3>
            <p className="text-center text-white px-9 ">
              Optimizing and developing secure online stores, providing a
              seamless platform to showcase and sell products or services
              effectively.
            </p>
            <Link
              href="/"
              className={`${buttonVariants({
                variant: "outline",
              })} font-semibold bg-transparent mt-6 hover:bg-orange-300 border-2 border-orange-300 border-solid text-white px-6 py-4 text-lg rounded-md hover:text-white transition-colors duration-300 ease-in-out`}
            >
              <p className="relative z-10">Learn more</p>
            </Link>
          </div>
        </div>
        <div className="shadow-custom_shadow-00 rounded-xl h-[300px] group overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full rounded-xl group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out">
            <div className="h-max w-max p-4 mx-auto  rounded-2xl bg-textSecondary">
              <FaMobileAlt className="text-5xl text-white" />
            </div>
            <h3 className="text-2xl font-semibold mt-4 mb-3 max-w-[300px] text-center mx-auto">
              Mobile App Development
            </h3>
            <p className="text-center px-9 text-slate-500/90">
              Creating innovative mobile applications that enhance user
              experiences, align with business goals, and stay ahead in the
              digital evolution.
            </p>
          </div>
          <div className="h-full w-full flex flex-col justify-center items-center bg-custom_gradient-01 rounded-xl group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out">
            <h3 className="text-2xl text-white mt-4 mb-3 max-w-[300px] text-center mx-auto">
              Mobile App Development
            </h3>
            <p className="text-center text-white px-9 ">
              Creating innovative mobile applications that enhance user
              experiences, align with business goals, and stay ahead in the
              digital evolution.
            </p>
            <Link
              href="/"
              className={`${buttonVariants({
                variant: "outline",
              })} font-semibold bg-transparent mt-6 hover:bg-orange-300 border-2 border-orange-300 border-solid text-white px-6 py-4 text-lg rounded-md hover:text-white transition-colors duration-300 ease-in-out`}
            >
              <p className="relative z-10">Learn more</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
