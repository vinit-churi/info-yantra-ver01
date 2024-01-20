"use client";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import { Parallax } from "react-parallax";
const Contact = () => {
  return (
    <div className="">
      <Parallax
        blur={0}
        bgImage="/images/parallax_bg.jpg"
        bgImageAlt="the cat"
        strength={500}
      >
        <div className="h-[600px] relative bg-indigo-950/30">
          <Image
            src="/images/mask_image.png"
            fill
            className="object-contain"
            alt="blob"
          />
          <Image
            src="/images/orange_blob_1.png"
            fill
            className="object-contain opacity-80 "
            alt="blob"
          />
          <div className=" h-full absolute w-[90%] max-w-[400px] flex items-center left-0 right-0 mx-auto z-10">
            <iframe
              data-tally-src="https://tally.so/embed/n9Q4zY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="494"
              title="Get a Free consultation!"
            ></iframe>
            {
              <Script
                id="tally-js"
                src="https://tally.so/widgets/embed.js"
                onLoad={() => {
                  // @ts-ignore
                  Tally.loadEmbeds();
                }}
              />
            }
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Contact;
