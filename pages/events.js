import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0); // Allow some scroll before hiding
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Wrapper to prevent layout shift */}
      <div className="sticky top-0 z-50 w-full transition-all duration-300 ease-in-out">
        {/* Red banner with smooth height transition */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isTop ? "h-[50px] opacity-100" : "h-0 opacity-0"
          } bg-red-600`}
        >
          <p className="text-white text-center w-full py-4">
            100% BAKING TRUMP AGENDA
          </p>
        </div>

        {/* Navbar (Always Present) */}
        <Navbar />
      </div>

      <div
        className="h-[70vh] bg-gray-100 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/events.webp')" }}
      >
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-center h-full">
            <h1 className="text-5xl font-bold text-center text-white">
              Events
            </h1>
          </div>
        </div>
      </div>
      <div>
        <img src="/no.png" alt="News" className="w-20 m-auto mt-10" />
        <p className="text-center text-gray-500 py-8">
          No Events yet. Check back later!
        </p>
      </div>
      <Footer />
    </div>
  );
}
