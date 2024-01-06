import React from "react";
import { PiChatsDuotone } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const FeaturedServices = () => {
  return (
    <div className="w-[90%] relative max-w-[1280px] mx-auto mt-[130px] mb-40">
      <h4 className="text-textSecondary/90 text-center font-semibold">
        FEATURED SERVICES
      </h4>
      <h2 className="text-4xl font-bold mt-6 max-w-[600px] mx-auto text-center">
        You&apos;ve got a business, we have got brilliant minds
      </h2>
      <div className="flex mt-16 gap-4">
        <div className="flex-[0_1_25%] relative top-[-30px] custom-button-background rounded-2xl p-6 pb-2 text-white">
          <div className="h-max w-max p-3 rounded-2xl bg-white">
            <PiChatsDuotone className="text-textSecondary text-6xl" />
          </div>
          <h2 className="mt-6 text-3xl font-medium">
            Digital Strategy Consultation
          </h2>
          <p className="text-sm my-3 text-white">
            Embark on a digital success journey with personalized consultation.
            Get expert guidance for effective strategies aligned with your
            business goals.
          </p>
        </div>
        <div className="flex-[0_1_25%] custom-shadow-one text-black rounded-2xl p-6 pb-2">
          <div className="h-max w-max p-3 rounded-2xl bg-textSecondary">
            <CgWebsite className="text-white text-6xl" />
          </div>
          <h2 className="mt-6 text-3xl font-medium">
            Website Design and Development
          </h2>
          <p className="text-sm my-3 text-slate-500/70">
            Craft visually stunning, user-friendly websites tailored to your
            unique needs. Establish a compelling online presence through
            thoughtful design and robust development.
          </p>
        </div>
        <div className="flex-[0_1_25%] custom-button-background relative top-[-30px] rounded-2xl p-6 pb-2 text-white">
          <div className="h-max w-max p-3 rounded-2xl bg-white">
            <MdOutlineScreenSearchDesktop className="text-textSecondary text-6xl" />
          </div>
          <h2 className="mt-6 text-3xl font-medium">
            Search Engine Optimization
          </h2>
          <p className="text-sm my-3">
            Boost online visibility with strategic SEO practices. Ensure your
            website attracts organic traffic and climbs search engine ranks,
            standing out in the digital landscape.
          </p>
        </div>
        <div className="flex-[0_1_25%] custom-shadow-one text-black rounded-2xl p-6 pb-2">
          <div className="h-max w-max p-3 rounded-2xl bg-textSecondary">
            <MdOutlineProductionQuantityLimits className="text-white text-6xl" />
          </div>
          <h2 className="mt-6 text-3xl font-medium">E-Commerce Solutions</h2>
          <p className="text-sm my-3 text-slate-500/70">
            Excel in developing and optimizing online stores. Get a secure
            platform to showcase and sell your products, creating seamless
            e-commerce experiences for customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
