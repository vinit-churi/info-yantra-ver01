import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa";
export default function Home() {
  return (
    <main className="relative h-screen min-h-[600px] z-10 ">
      {/* <Image src="/images/bg_header_1.jpg" fill alt="bg-one" /> */}
      <div className="w-[90%] max-w-[1280px]  mx-auto flex  justify-between">
        <div className="flex flex-col justify-center">
          <Badge
            variant="outline"
            className="custom-button-background w-max mb-2 text-white cursor-pointer font-medium text-base py-1 px-4 "
          >
            #PREMIUM SERVICES
          </Badge>
          <h1 className="text-[48px] w-[544px] font-bold mb-3">
            You’ve got a business, we have got brilliant minds.
          </h1>
          <p className="w-[544px] text-slate-900/50">
            Partner with us for a stunning online presence that aligns with your
            goals. Our team crafts tailored websites for a lasting impression.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <Button className="custom-button-background px-8 py-6">
              Discover More
            </Button>
            <div className="h-14 w-14 cursor-pointer flex items-center justify-center rounded-full border-orange-500 border-2 border-solid relative bg-white ">
              <FaPlay className="text-orange-500" />
            </div>
          </div>
        </div>
        <div className="relative  w-[640px]">
          <Image
            height={500}
            width={500}
            src="/images/hero_main.png"
            className="object-contain mx-auto block relative z-10"
            alt="hero main"
          />
          <Image
            height={600}
            width={600}
            src="/images/orange_blob_1.png"
            className="absolute object-contain mx-auto block top-[50%] translate-y-[-50%] left-0 right-0 bottom-0 "
            alt="hero main"
          />
          <div className="h-[120px] w-[230px] absolute left-[-20px]  rounded-2xl top-[30%]">
            <Image
              src="/images/hero_overlay_one.png"
              fill
              alt="overlay one"
              className="object-contain rounded-2xl"
            />
          </div>
          <Image
            src="/images/hero_overlay_two.png"
            height={100}
            width={150}
            alt="overlay two"
            className="absolute top-5 right-0 rounded-2xl"
          />
          <Image
            src="/images/hero_overlay_three.png"
            height={100}
            width={180}
            alt="overlay three"
            className="absolute bottom-8 right-[-40px] rounded-2xl z-20"
          />
        </div>
      </div>
    </main>
  );
}
