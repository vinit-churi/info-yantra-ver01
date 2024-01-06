import React from "react";
import { Badge } from "../ui/badge";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { FaRupeeSign } from "react-icons/fa";
const ChoosePlan = () => {
  return (
    <div>
      <p className="text-textSecondary/90 font-semibold mx-auto mt-10 text-center">
        CHOOSE PLAN
      </p>
      <h3 className="text-4xl font-bold mt-5 w-[90%] max-w-[500px] mx-auto text-center">
        Providing brilliant ideas for your business.
      </h3>
      <div className="w-[90%] max-w-[1280px] mx-auto flex my-16">
        <div className="w-[416px] shadow-custom_shadow-01 p-8 rounded-tl-2xl rounded-bl-2xl self-center h-max">
          <h3 className="text-center my-3 text-2xl font-medium">Basic Plan</h3>
          <p className=" text-center text-sm text-slate-500/80">
            Elevate your online presence with our essential web services.
            Perfect for startups and small businesses seeking a strong
            foundation.
          </p>
          <div className="flex text-4xl justify-center mt-6 text-textSecondary">
            <FaRupeeSign className="text-3xl self-center " />
            <p>15,000</p>
          </div>
          <ul className="mt-8">
            <li className="flex items-center gap-2 py-3 border-b-2 border-b-slate-200/50 border-solid">
              <FaCheckCircle className="text-textSecondary text-xl" />
              <p>Responsive Website Design</p>
            </li>
            <li className="flex items-center gap-2 py-3 border-b-2 border-b-slate-200/50 border-solid">
              <FaCheckCircle className="text-textSecondary text-xl" />
              <p>Monthly Maintenance Check</p>
            </li>
            <li className="flex items-center gap-2 py-3 ">
              <FaCheckCircle className="text-textSecondary text-xl" />
              <p>Email Support</p>
            </li>
          </ul>
          <Link
            href="/"
            className={`${buttonVariants({
              variant: "outline",
            })} w-full mt-6 font-semibold border-textSecondary border-2 border-solid  after:contents-[''] relative after:absolute after:inset-0 after:rounded-md after:opacity-0 after:hover:opacity-100 after:transition-opacity after:duration-300 after:ease-in-out after:bg-custom_gradient-02 text-white px-6 group py-4 text-lg rounded-md hover:text-white transition-colors duration-300 ease-in-out`}
          >
            <p className="relative z-10 text-black group-hover:text-white hover:text-white transition-colors duration-300 ease-in-out">
              Get a Quote
            </p>
          </Link>
          <p className="text-sm text-slate-500 w-[80%] mx-auto text-center mt-4">
            *Prices may be subject to change based on alterations in project
            requirements and scope.
          </p>
        </div>
        <div className="w-[416px] shadow-custom_shadow-01 bg-white p-8 rounded-2xl relative z-30">
          <Badge
            variant="secondary"
            className="mx-auto mt-5 block bg-custom_gradient-02 text-white w-max text-[15px] "
          >
            Most popular
          </Badge>
          <h3 className="text-center my-3 text-2xl font-medium">
            Premium Plan
          </h3>
          <p className=" text-center text-sm text-slate-500/80">
            Reach the pinnacle of digital excellence. Tailored for established
            businesses demanding top-tier web services and strategic innovation.
          </p>
          <div className="flex text-4xl justify-center mt-6 text-textSecondary">
            <FaRupeeSign className="text-3xl self-center " />
            <p>30,000</p>
          </div>
          <ul className="mt-8">
            <li className="flex items-center gap-2 py-3 border-b-2 border-b-slate-200/50 border-solid">
              <FaCheckCircle className="text-textSecondary text-xl" />
              <p>Everything included in Basic plus plan</p>
            </li>
            <li className="flex items-center gap-2 py-3 border-b-2 border-b-slate-200/50 border-solid">
              <FaCheckCircle className="text-textSecondary text-xl" />
              <p>Premium Website Features</p>
            </li>

            <li className="flex items-center gap-2 py-3 border-b-2 border-b-slate-200/50 border-solid">
              <FaCheckCircle className="text-textSecondary text-xl" />
              <p>SEO Optimization</p>
            </li>
            <li className="flex items-center gap-2 py-3 border-b-2 border-b-slate-200/50 border-solid">
              <FaCheckCircle className="text-textSecondary text-xl" />
              <p>Priority Support</p>
            </li>
            <li className="flex items-center gap-2 py-3 ">
              <FaCheckCircle className="text-textSecondary text-xl" />
              <p>Bi-Monthly Performance Reports</p>
            </li>
          </ul>
          <Link
            href="/"
            className={`${buttonVariants({
              variant: "outline",
            })} w-full mt-6 font-semibold custom-button-background after:contents-[''] relative after:absolute after:inset-0 after:rounded-md after:opacity-0 after:hover:opacity-100 after:transition-opacity after:duration-300 after:ease-in-out after:bg-custom_gradient-02 text-white px-6 py-4 text-lg rounded-md hover:text-white transition-colors duration-300 ease-in-out`}
          >
            <p className="relative z-10">Get a Quote</p>
          </Link>
          <p className="text-sm text-slate-500 w-[80%] mx-auto text-center mt-4">
            *Prices may be subject to change based on alterations in project
            requirements and scope.
          </p>
          {/* <Badge variant="secondary">Most popular</Badge> */}
        </div>
        <div className="w-[416px] shadow-custom_shadow-01 p-8 rounded-tr-2xl rounded-br-2xl h-max self-center">
          <h3 className="text-center my-3 text-2xl font-medium">
            Basic Plus Plan
          </h3>
          <p className=" text-center text-sm text-slate-500/80">
            Soar to new heights with advanced web solutions. Ideal for growing
            enterprises aiming for enhanced performance and user engagement.
          </p>
          <div className="flex text-4xl justify-center mt-6 text-textSecondary">
            <FaRupeeSign className="text-3xl self-center " />
            <p>25,000</p>
          </div>
          <ul className="mt-8">
            <li className="flex items-center gap-2 py-3 border-b-2 border-b-slate-200/50 border-solid">
              <FaCheckCircle className="text-textSecondary text-xl" />
              <p>Everything included in basic</p>
            </li>
            <li className="flex items-center gap-2 py-3 border-b-2 border-b-slate-200/50 border-solid">
              <FaCheckCircle className="text-textSecondary text-xl" />
              <p>Dedicated Account Manager</p>
            </li>
            <li className="flex items-center gap-2 py-3 ">
              <FaCheckCircle className="text-textSecondary text-xl" />
              <p>Quarterly Strategy Sessions</p>
            </li>
          </ul>
          <Link
            href="/"
            className={`${buttonVariants({
              variant: "outline",
            })} w-full mt-6 font-semibold border-textSecondary border-2 border-solid  after:contents-[''] relative after:absolute after:inset-0 after:rounded-md after:opacity-0 after:hover:opacity-100 after:transition-opacity after:duration-300 after:ease-in-out after:bg-custom_gradient-02 text-white px-6 group py-4 text-lg rounded-md hover:text-white transition-colors duration-300 ease-in-out`}
          >
            <p className="relative z-10 text-black group-hover:text-white hover:text-white transition-colors duration-300 ease-in-out">
              Get a Quote
            </p>
          </Link>
          <p className="text-sm text-slate-500 w-[80%] mx-auto text-center mt-4">
            *Prices may be subject to change based on alterations in project
            requirements and scope.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
