"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { companiesLogoPath } from "@/constants/viewConstants";
const CustomerCarousel = () => {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));
  return (
    <div className=" flow-root relative z-50 mb-10">
      <div className=" w-[90%] max-w-[1280px] flow-root mx-auto rounded-2xl custom-shadow-one ">
        <h2 className="text-center my-10 mb-6  font-bold text-3xl">
          Join our 30+ happy customers
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full mb-8 px-10"
        >
          <CarouselContent>
            {[...companiesLogoPath, ...companiesLogoPath].map(
              (imageSrc, index) => (
                <CarouselItem key={index} className="lg:basis-1/6">
                  <div className="h-[100px] w-[200px]  overflow-hidden relative">
                    <Image
                      src={imageSrc}
                      alt="company logo"
                      fill
                      className="object-contain w-full h-full"
                    />
                  </div>
                </CarouselItem>
              )
            )}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default CustomerCarousel;
