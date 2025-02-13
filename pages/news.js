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
        style={{ backgroundImage: "url('/events.webp')" }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-5xl font-bold text-center text-white">
              Events
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
