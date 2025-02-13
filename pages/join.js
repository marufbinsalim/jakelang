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
            <a href="sms://31996;?&amp;body=%20TRUMP">
              <b>Text Jake Lang in 31996</b>
            </a>
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
          <div className="flex items-center justify-center h-full">
            <h1 className="text-5xl font-bold text-center text-white">
              Get Involved
            </h1>
          </div>
        </div>
      </div>

      <VolunteerSignup />
      <Footer />
    </div>
  );
}
