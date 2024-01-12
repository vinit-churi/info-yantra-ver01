import React from "react";
import Image from "next/image";

const OurProject = () => {
  return (
    <div className="w-[90%] relative max-w-[1280px] mx-auto mt-[130px] flex gap-16">
      <div className="relative flex-[1_1_50%] ">
        <div className="w-full h-[500px]">
          <Image
            src="/images/our-project.jpg"
            fill
            className="absolute z-10  object-cover custom-image-mask  "
            alt="who we are background"
          />
          <Image
            src="/images/orange_blob_1.png"
            fill
            className="object-contain absolute top-0"
            alt="who we are background"
          />
        </div>
      </div>
      <div className="flex-[1_1_max-content] relative flex flex-col justify-center">
        <p className="text-textSecondary/50 font-semibold">Our Project</p>
        <h3 className="text-4xl font-bold mt-5 max-w-[500px]">
          Real people delivering real results.
        </h3>
        <p className="mt-5 mb-10 text-sm text-slate-500/80 max-w-[550px]">
          We are dedicated to delivering satisfaction in every project. Your
          success is our priority, ensuring a seamless experience.
        </p>
        <div className="flex gap-10 ">
          <div className="">
            <p className="text-textSecondary font-bold text-5xl text-center mb-2">
              18+
            </p>
            <p>PROJECT DONE</p>
          </div>
          <div>
            <p className="text-textSecondary font-bold text-5xl text-center mb-2">
              4.7/5
            </p>
            <p>CUSTOMER RATING</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProject;
