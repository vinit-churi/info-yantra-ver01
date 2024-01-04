import React from "react";
import { PiChatsDuotone } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const FeaturedServices = () => {
  return (
    <div className="w-[90%] relative max-w-[1280px] mx-auto mt-[130px]">
      <h4 className="text-textSecondary/90 text-center font-semibold">
        FEATURED SERVICES
      </h4>
      <h2 className="text-4xl font-bold mt-6 max-w-[600px] mx-auto text-center">
        You&apos;ve got a business, we have got brilliant minds
      </h2>
      <div className="flex mt-16 gap-4">
        <div className="flex-[0_1_25%] relative top-[-30px] custom-button-background rounded-2xl p-6 pb-0 text-white">
          <div className="h-max w-max p-3 rounded-2xl bg-white">
            <PiChatsDuotone className="text-textSecondary text-6xl" />
          </div>
          <h2 className="mt-6 text-3xl font-medium">
            Digital Strategy Consultation
          </h2>
          <p className="text-sm my-3">
            Embark on a journey of digital success with our personalized
            consultation services. We provide expert guidance, helping you
            define and implement effective digital strategies aligned with your
            unique business goals. Let&apos;s shape your digital future
            together.
          </p>
        </div>
        <div className="flex-[0_1_25%] custom-button-background rounded-2xl p-6 pb-0 text-white">
          <div className="h-max w-max p-3 rounded-2xl bg-white">
            <CgWebsite className="text-textSecondary text-6xl" />
          </div>
          <h2 className="mt-6 text-3xl font-medium">
            Website Design and Development
          </h2>
          <p className="text-sm my-3">
            We specialize in crafting visually stunning and user-friendly
            websites tailored to your unique needs. Our goal is to establish a
            compelling online presence for your business, bringing your vision
            to life through thoughtful design and robust development.
          </p>
        </div>
        <div className="flex-[0_1_25%] custom-button-background relative top-[-30px] rounded-2xl p-6 pb-0 text-white">
          <div className="h-max w-max p-3 rounded-2xl bg-white">
            <MdOutlineScreenSearchDesktop className="text-textSecondary text-6xl" />
          </div>
          <h2 className="mt-6 text-3xl font-medium">
            Search Engine Optimization
          </h2>
          <p className="text-sm my-3">
            Boosting your online visibility is our expertise. Through strategic
            SEO practices, we ensure your website not only attracts organic
            traffic but also climbs the ranks on search engines, making you
            stand out in the digital landscape.
          </p>
        </div>
        <div className="flex-[0_1_25%] custom-button-background rounded-2xl p-6 pb-0 text-white">
          <div className="h-max w-max p-3 rounded-2xl bg-white">
            <MdOutlineProductionQuantityLimits className="text-textSecondary text-6xl" />
          </div>
          <h2 className="mt-6 text-3xl font-medium">E-Commerce Solutions</h2>
          <p className="text-sm my-3">
            Our team excels at developing and optimizing online stores,
            providing you with a secure and efficient platform to showcase and
            sell your products or services. We create seamless and engaging
            e-commerce experiences for your customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
