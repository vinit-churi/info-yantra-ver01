import Image from "next/image";
import React from "react";
import { IoRocketOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
const WhoWeAre = () => {
  return (
    <div className="w-[90%] relative max-w-[1280px] mx-auto mt-[130px] flex gap-16">
      <div className="relative flex-[1_1_50%] ">
        <div className="w-full h-[500px]">
          <Image
            src="/images/who-we-are.jpg"
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
        <div className="absolute h-[180px] w-[180px] rounded-full top-[-50px] my-0 gap-0 left-[0px] flex flex-col z-30 items-center justify-center bg-white custom-shadow-one ">
          <h2 className="text-[60px] leading-[70px] text-textSecondary font-bold ">
            25+
          </h2>
          <p className="text-sm font-bold">Years of Experience</p>
        </div>
      </div>
      <div className="flex-[1_1_50%] relative">
        <Image
          src="/images/small_arrow.png"
          width={50}
          height={50}
          className="absolute top-[60px] left-[-60px] "
          alt="small arrow"
        />
        <p className="text-textSecondary/50 font-semibold">WHO WE ARE</p>
        <h3 className="text-4xl font-bold mt-5 max-w-[500px]">
          Real people delivering real results.
        </h3>
        <p className="mt-5 mb-10 text-sm text-slate-500/80 max-w-[550px]">
          Realizing digital dreams demands more than creativity; it requires
          expertise, dedication, and a passion for excellence. At our agency,
          real people deliver tangible results, turning your ideas into
          captivating online experiences.
        </p>
        <div className="flex ">
          <VscGraph className="flex-[0_0_max-content] mr-6 text-textSecondary text-5xl text-left" />
          <div>
            <h4 className="text-xl font-bold">Web Agency</h4>
            <p className="mt-2 mb-5 text-sm text-slate-500/80 max-w-[450px]">
              Crafting digital masterpieces tailored to your unique needs, our
              Custom Website Development services ensure a strong online
              presence. From sleek, user-friendly designs to robust backend
              functionalities, we bring your vision to life.
            </p>
          </div>
        </div>
        <div className="flex">
          <IoRocketOutline className="flex-[0_0_max-content] mr-6 text-textSecondary text-5xl text-left" />
          <div>
            <h4 className="text-xl font-bold">SEO Services</h4>
            <p className="mt-2 mb-5 text-sm text-slate-500/80 max-w-[450px]">
              Boost your online visibility and climb the search engine ranks
              with our SEO services. We employ data-driven strategies to
              optimize your website, ensuring it stands out in search results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
