import { useEffect, useState } from "react";

export default function Home() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 100); // Allow some scroll before hiding
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
            <a href="sms://88022;?&amp;body=%20TRUMP">
              <b>
                Text Jake Lang to 31996 to get updates on my latest projects.
              </b>
            </a>
          </p>
        </div>

        {/* Navbar (Always Present) */}
        <div className="flex items-center justify-between w-full h-16 px-4 bg-white shadow-md">
          Navbar
        </div>
      </div>

      <div className="h-screen bg-gray-100">
        <div className="container mx-auto">
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-3xl font-bold text-center text-gray-800">
              Jake Lang 1
            </h1>
          </div>
        </div>
      </div>

      <div className="h-screen bg-gray-100">
        <div className="container mx-auto">
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-3xl font-bold text-center text-gray-800">
              Jake Lang 2
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
