import React from "react";

const Stats = () => {
  return (
    <div className="bg-[url('/images/people.jpg')] bg-repeat bg-contain relative after:contents-[''] after:inset-0 flow-root after:bg-[#3b3664]/90 z-[-2] after:z-[-1] after:absolute ">
      <h1 className="text-[69px] max-w-[1020px] text-center mx-auto text-white font-bold leading-[70px] mt-[150px]">
        Let us build the bridge between your brand and customer
      </h1>
      <p className="text-white text-base max-w-[1100px] mt-6 text-center mx-auto">
        With a commitment to excellence, we navigate the landscape of your brand
        to ensure a seamless bridge to your customers. Our dedicated team has
        successfully delivered over 18 projects. We take pride in our stellar
        customer rating of 4.7, a testament to the quality and satisfaction we
        bring to every project.
      </p>
      <div className="flex mx-auto w-max text-white gap-16 mt-14 mb-[150px]">
        <div className="">
          <p className="text-textSecondary font-bold text-5xl text-center mb-2">
            18+
          </p>
          <p>PROJECT DONE</p>
        </div>
        <div>
          <p className="text-textSecondary font-bold text-5xl text-center mb-2">
            18+
          </p>
          <p>HAPPY CUSTOMER</p>
        </div>
        <div>
          <p className="text-textSecondary font-bold text-5xl text-center mb-2">
            4.7
          </p>
          <p>CUSTOMER RATING</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
