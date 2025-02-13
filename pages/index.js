import { useEffect, useState } from "react";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full bg-white shadow-md border-b-2 border-red-600">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img src="/logo.png" alt="Trump Vance 2025" className="h-12" />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <a href="/platform" className="hover:text-red-600">
            PLATFORM
          </a>
          <a href="/news" className="hover:text-red-600">
            NEWS
          </a>
          <a href="/events" className="hover:text-red-600">
            EVENTS
          </a>
          <a href="/join" className="hover:text-red-600">
            GET INVOLVED
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-red-600 text-white px-4 py-2 font-bold rounded">
            CONTRIBUTE
          </button>
          <button className="bg-blue-900 text-white px-4 py-2 font-bold rounded">
            SHOP
          </button>
        </div>
      </div>
    </div>
  );
}

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
            <a href="sms://88022;?&amp;body=%20TRUMP">
              <b>Text Jake Lang in 31996</b>
            </a>
          </p>
        </div>

        {/* Navbar (Always Present) */}
        <Navbar />
      </div>

      <div
        className="h-screen bg-gray-100 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full">
          <div className="max-w-2xl text-left text-white  mt-auto">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight px-4 py-2 inline-block">
              "THE GOLDEN AGE OF AMERICA BEGINS RIGHT NOW."
            </h1>
            <p className="mt-2 text-lg px-4 py-2 inline-block"> - Jake Lang</p>

            <div className="mt-6 flex space-x-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded">
                CONTRIBUTE
              </button>
              <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded">
                <a href="/join" className="hover:text-red-600">
                  VOLUNTEER
                </a>
              </button>
            </div>
          </div>

          <div className="bg-white shadow-lg mx-auto w-full md:w-3/4 lg:w-1/2 rounded-lg overflow-hidden mt-auto mb-2">
            <div className="bg-red-600 text-white text-center py-4 text-2xl font-bold">
              Join Our Movement!
            </div>
            <div className="p-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="border border-gray-400 px-4 py-3 w-full md:w-2/3 rounded-md focus:outline-none"
              />
              <input
                type="text"
                placeholder="ZIP"
                className="border border-gray-400 px-4 py-3 w-full md:w-1/3 rounded-md focus:outline-none"
              />
              <button className="text-blue-900 font-bold text-xl">→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
