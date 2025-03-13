import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import VolunteerSignup from "@/components/Signup";
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
        className="h-[70vh] bg-gray-100 bg-center bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: "url('/jake3.jpg')",
          filter: "grayscale(30%)",
        }}
      >
        <div className="container mx-auto h-full">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-5xl font-bold px-4 md:text-center text-white mt-auto">
              Vote For Jake Lang
            </h1>
            <p className="text-2xl md:text-center px-4 text-white mb-[40px]">
              Jake Lang is running for U.S. Senate in 2025
            </p>
          </div>
        </div>
      </div>

      <VolunteerSignup />
      <Footer />
    </div>
  );
}
