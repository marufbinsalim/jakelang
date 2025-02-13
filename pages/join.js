import { useEffect, useState } from "react";

function VolunteerSignup() {
  return (
    <div className="bg-white shadow-lg mx-auto w-full md:w-3/4 lg:w-2/3 rounded-lg overflow-hidden my-10">
      {/* Header */}
      <div className="bg-red-600 text-white text-center py-6 px-4">
        <h2 className="text-3xl font-bold">SIGN UP TO VOLUNTEER!</h2>
        <p className="text-lg font-semibold mt-1">HELP JAKE LANG!</p>
      </div>

      {/* Description */}
      <div className="p-6 text-center text-gray-800">
        <p>
          The forgotten men and women are the heart and soul of our incredible
          movement to Make America Great Again. The only force strong enough to
          defeat the massive corruption we are up against is you, the American
          People. In order to restore the fabric of our glorious nation, we need
          every patriot to support our campaign and make your voices heard.
        </p>
      </div>

      {/* Form */}
      <form className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="FIRST NAME"
            className="border border-gray-400 px-4 py-3 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="LAST NAME"
            className="border border-gray-400 px-4 py-3 rounded-md w-full"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="email"
            placeholder="EMAIL"
            className="border border-gray-400 px-4 py-3 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="PHONE"
            className="border border-gray-400 px-4 py-3 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="ZIP"
            className="border border-gray-400 px-4 py-3 rounded-md w-full"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="CITY"
            className="border border-gray-400 px-4 py-3 rounded-md w-full"
          />
          <select className="border border-gray-400 px-4 py-3 rounded-md w-full">
            <option value="">STATE</option>
            <option value="NY">New York</option>
            <option value="CA">California</option>
            <option value="TX">Texas</option>
            {/* Add more states as needed */}
          </select>
        </div>
        <textarea
          placeholder="MESSAGE"
          className="border border-gray-400 px-4 py-3 rounded-md w-full h-24"
        ></textarea>

        {/* Checkbox */}
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="h-4 w-4" />
          <p className="text-sm text-gray-700">
            BY PROVIDING THIS INFORMATION YOU ARE ACKNOWLEDGING AND AGREEING TO
            THE <span className="text-red-600 font-bold">PRIVACY POLICY</span>
          </p>
        </div>

        {/* Submit Button */}
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded w-full">
          SIGN UP
        </button>
      </form>
    </div>
  );
}

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
        className="h-[70vh] bg-gray-100 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/join.webp')",
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
    </div>
  );
}
