import Navbar from "@/components/Navbar";
export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  );
}
