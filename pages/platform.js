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

  const policies = [
    "SEAL THE BORDER AND STOP THE MIGRANT INVASION",
    "CARRY OUT THE LARGEST DEPORTATION OPERATION IN AMERICAN HISTORY",
    "END INFLATION, AND MAKE AMERICA AFFORDABLE AGAIN",
    "MAKE AMERICA THE DOMINANT ENERGY PRODUCER IN THE WORLD, BY FAR!",
    "STOP OUTSOURCING, AND TURN THE UNITED STATES INTO A MANUFACTURING SUPERPOWER",
    "LARGE TAX CUTS FOR WORKERS, AND NO TAX ON TIPS!",
    "DEFEND OUR CONSTITUTION, OUR BILL OF RIGHTS, AND OUR FUNDAMENTAL FREEDOMS, INCLUDING FREEDOM OF SPEECH, FREEDOM OF RELIGION, AND THE RIGHT TO KEEP AND BEAR ARMS",
    "PREVENT WORLD WAR THREE, RESTORE PEACE IN EUROPE AND IN THE MIDDLE EAST, AND BUILD A GREAT IRON DOME MISSILE DEFENSE SHIELD OVER OUR ENTIRE COUNTRY -- ALL MADE IN AMERICA",
    "END THE WEAPONIZATION OF GOVERNMENT AGAINST THE AMERICAN PEOPLE",
    "STOP THE MIGRANT CRIME EPIDEMIC, DEMOLISH THE FOREIGN DRUG CARTELS, CRUSH GANG VIOLENCE, AND LOCK UP VIOLENT OFFENDERS",
  ];

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
          backgroundImage: "url('/news.webp')",
          filter: "grayscale(30%)",
        }}
      >
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-center h-full">
            <h1 className="text-5xl font-bold text-center text-white">News</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12">
        <h2 className="text-xl font-bold mb-4">Policy Priorities</h2>
        <ul className="list-none space-y-2">
          {policies.map((policy, index) => (
            <li key={index} className="flex items-start space-x-6">
              <span className="w-6 h-6 bg-blue-900 p-4 text-white flex items-center justify-center font-bold rounded">
                {index + 1}
              </span>
              <span className="text-lg font-medium">{policy}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
