import Navbar from "@/components/Navbar";
import Image from "next/image";
export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[1000px] outline-2 outline-green-500 outline overflow-hidden">
      <Image
        src="/images/bg_header_1.jpg"
        fill
        alt="bg-one"
        className="object-cover object-right-bottom "
      />
      <div className="absolute z-10 h-full w-full bg-white opacity-60"></div>
      <Navbar />
      {children}
    </div>
  );
}
