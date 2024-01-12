"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { testimonialsData } from "@/constants/viewConstants";

import Image from "next/image";
const Testimonials = () => {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));

  return (
    <div className="w-[90%] relative max-w-[1280px] mx-auto mt-[130px] flex gap-16">
      <div className="flex-[1_1_60%] relative flex flex-col pt-[50px]">
        <div className="h-full w-full z-[-1] absolute inset-0">
          <Image
            src="/images/bg_header_2.png"
            fill
            className="object-cover"
            alt="person"
          />
          <div className="absolute inset-0 w-full h-full bg-custom_transparent"></div>
        </div>
        <p className="text-textSecondary/50 font-semibold">TESTIMONIAL</p>
        <h3 className="text-4xl font-bold mt-5 max-w-[500px]">
          What they say about us
        </h3>
        <p className="mt-5 mb-10 text-sm text-slate-500/80 max-w-[550px]">
          Discover the experiences of our clients and the impact our web
          solutions have had on their success stories.
        </p>
        <div className="w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full max-w-full"
          >
            <CarouselContent>
              {testimonialsData.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="lg:basis-1/2">
                  <div className="w-auto  overflow-hidden relative bg-white rounded-xl p-2">
                    <p className="text-center text-base text-slate-600">
                      &ldquo;{testimonial.description}&rdquo;
                    </p>
                    <div className="flex items-center gap-2 justify-center my-4">
                      <Image
                        src={testimonial.image}
                        height={40}
                        width={40}
                        className="rounded-full h-max w-max"
                        alt="person"
                      />
                      <div>
                        <p className="font-semibold text-sm">
                          {testimonial.name}
                        </p>
                        <p className="uppercase text-textSecondary font-bold text-base">
                          {testimonial.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div className="relative flex-[1_1_40%] ">
        <div className="w-full h-[500px]">
          <Image
            src="/images/lady-with-laptop.png"
            fill
            className="absolute z-10 object-contain left-0 right-0 mx-auto"
            alt="who we are background"
          />
          <Image
            src="/images/orange_blob_2.png"
            fill
            className="object-contain absolute top-0"
            alt="who we are background"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
