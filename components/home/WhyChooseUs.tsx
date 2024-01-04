import React from "react";
import { PiCertificate } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaHeadphonesAlt } from "react-icons/fa";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="bg-[url('/images/bg_header_2.png')] py-[122px]">
      <div className="w-[90%] max-w-[1280px] mx-auto flex justify-between gap-[80px]">
        <div className="flex-[0_1_640px] p-4 relative pt-16 ">
          <p className="text-textSecondary/50 font-semibold">WHY CHOOSE US</p>
          <h3 className="text-4xl font-bold mt-5 max-w-[500px]">
            We are here for we always give you satisfaction.
          </h3>
          <p className="mt-5 mb-5 text-sm text-slate-500/80 max-w-[550px]">
            With a focus on excellence, we ensure that every interaction, every
            project, and every service we provide is geared towards giving you
            complete satisfaction. Our team is dedicated to delivering beyond
            expectations, making us the preferred choice for those who seek
            quality, reliability, and a customer-centric approach.
          </p>
          <Link
            href="/"
            className={`${buttonVariants({
              variant: "outline",
            })} font-semibold custom-button-background after:contents-[''] relative after:absolute after:inset-0 after:rounded-md after:opacity-0 after:hover:opacity-100 after:transition-opacity after:duration-300 after:ease-in-out after:bg-custom_gradient-02 text-white px-6 py-4 text-lg rounded-md hover:text-white transition-colors duration-300 ease-in-out`}
          >
            <p className="relative z-10">Get a Quote</p>
          </Link>
          <Image
            src="/images/arrow-round.png"
            alt="arrow-round"
            width={80}
            height={80}
            className="absolute z-0 top-[90px] left-[-70px]"
          />
        </div>
        <div className="flex-[0_1_640px] p-4 flex flex-col gap-6">
          <div className="flex bg-white p-4 rounded-2xl shadow-custom_shadow-01">
            <div className="flex items-center justify-center bg-textSecondary rounded-2xl flex-[0_0_80px] aspect-square mr-4 self-center">
              <PiCertificate className="text-5xl text-white " />
            </div>
            <div className="flex-[1_1_0px]">
              <h3 className="text-xl font-semibold mb-2">
                Certified Professional & Expert
              </h3>
              <p className="text-sm text-slate-500/80">
                Our team comprises certified professionals and experts dedicated
                to delivering top-tier services.
              </p>
            </div>
          </div>
          <div className="flex bg-white p-4 rounded-2xl shadow-custom_shadow-01">
            <div className="flex items-center justify-center bg-textSecondary rounded-2xl flex-[0_0_80px] aspect-square mr-4 self-center">
              <LiaShippingFastSolid className="text-5xl text-white " />
            </div>
            <div className="flex-[1_1_0px]">
              <h3 className="text-xl font-semibold mb-2">
                We&apos;re Fast, Accurate & Reliable
              </h3>
              <p className="text-sm text-slate-500/80">
                We prioritize efficiency to meet your project requirements with
                swift and reliable solutions.
              </p>
            </div>
          </div>
          <div className="flex bg-white p-4 rounded-2xl shadow-custom_shadow-01">
            <div className="flex items-center justify-center bg-textSecondary rounded-2xl flex-[0_0_80px] aspect-square mr-4 self-center">
              <FaHeadphonesAlt className="text-5xl text-white " />
            </div>
            <div className="flex-[1_1_0px]">
              <h3 className="text-xl font-semibold mb-2">
                Premium Business Hour Support
              </h3>
              <p className="text-sm text-slate-500/80">
                As your support team, we're here to assist you during our
                standard hours, Monday to Friday, from 9:00 AM to 5:00 PM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
