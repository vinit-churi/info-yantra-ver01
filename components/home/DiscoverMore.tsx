import Link from "next/link";
import React from "react";
import { MdSpeakerNotes } from "react-icons/md";
import { buttonVariants } from "../ui/button";
const DiscoverMore = () => {
  return (
    <div className="bg-[url('/images/boost.jpg')] bg-cover bg-no-repeat bg-center mt-28">
      <div className="mx-auto w-[90%] max-w-[1280px] py-28 flow-root text-white">
        <div className="h-max w-max p-5 mx-auto  rounded-2xl bg-textSecondary">
          <MdSpeakerNotes className="text-white text-6xl" />
        </div>
        <h3 className="text-4xl text-center mt-12 mb-8 mx-auto w-[90%] max-w-[800px] font-semibold">
          Experience the Impact of Strategic Marketing Communication
        </h3>
        <p className="w-[90%] max-w-[700px] mx-auto text-center text-white/80 text-sm">
          Unlock the potential of your brand with our powerful marketing
          communication solutions. Our team specializes in crafting compelling
          messages that resonate with your audience. Elevate your online
          presence and engage customers through effective and strategic
          communication strategies.
        </p>
        <Link
          href="/"
          className={`${buttonVariants({
            variant: "outline",
          })} mt-8 mb-0 border-textSecondary  !flex justify-center w-max items-center mx-auto font-semibold custom-button-background after:contents-[''] relative after:absolute after:inset-0 after:rounded-md after:opacity-0 after:hover:opacity-100 after:transition-opacity after:duration-300 after:ease-in-out after:bg-custom_gradient-02 text-white px-6 py-4 text-lg rounded-md hover:text-white transition-colors duration-300 ease-in-out`}
        >
          <p className="relative z-10">CONTACT US</p>
        </Link>
      </div>
    </div>
  );
};

export default DiscoverMore;
