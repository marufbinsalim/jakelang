import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ShopSection from "@/components/Shop";
import Link from "next/link";
import { useEffect, useState } from "react";

const VideoPlayer = ({ src, poster }) => {
  return (
    <div className="flex justify-center items-center p-[5%] py-[80px] bg-red-600 flex-col gap-4">
      <p className="text-white text-2xl font-bold text-left w-[100%]">
        Watch Jake Lang's Message
      </p>
      <video className="shadow-lg w-full rounded-lg" controls poster={poster}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

function CampaignIntro() {
  return (
    <section className="bg-blue-800 p-[40px] md:p-[80px] text-white text-left">
      <div className="mx-auto">
        <h1 className="text-4xl font-bold mb-4">Vote Jake Lang for Senate</h1>

        {/* profile section */}
        <div className="flex flex-row items-center gap-4">
          <img
            src="/jake.jpeg"
            alt="Jake Lang"
            className="w-12 h-12 rounded-full shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold">Jake Lang</h2>
            <p className="text-lg">
              Candidate for U.S. Senate,{" "}
              <span className="font-bold">Florida</span>
            </p>
          </div>
        </div>

        {/* line */}
        <div className="w-full h-[1px] bg-gray-500 my-6"></div>

        <p className="text-lg mb-6 md:max-w-3xl">
          A leader for the people, Jake Lang is running for U.S. Senate to bring
          real change to Florida. With a vision for a stronger economy, better
          healthcare, and a brighter future, Jake is committed to fighting for
          every Floridian. Join the movement and make your voice heard.
        </p>
        {/* <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-200 transition">
          Join the Campaign
        </button> */}
        <Link href="/join">
          <button className="bg-red-600 text-white text-2xl font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition">
            Join the Campaign
          </button>
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const [isTop, setIsTop] = useState(true);
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");

  async function handleSubmit(e) {
    await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({
        subject: "We have a new user from Jakelangforsenate.com",
        message: `
        A user with
        Email: ${email}
        zip code: ${zip}
        is interested in joining the movement.
        from Jakelangforsenate.com"
        `,
        html: `
        <p>A user with</p>
        <p>Email: ${email}</p>
        <p>zip code: ${zip}</p>
        <p>is interested in joining the movement.</p>
        <p>from Jakelangforsenate.com</p>
        `,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setEmail("");
    setZip("");
  }

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
        className="bg-gray-100 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/jake.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <div className="container mx-auto relative z-10 flex flex-col justify-center h-full">
          <div className="max-w-2xl text-left text-white  mt-auto w-[90%] md:w-[80%]">
            <h2 className="text-3xl md:text-4xl font-bold mt-[50px] px-4">
              January 6th was a cry for change.
            </h2>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight px-4 py-2 inline-block">
              And I am that change.
            </h1>
            <p className="mt-2 text-lg px-4 py-2 inline-block"> - Jake Lang</p>

            <div className="mt-6 px-4 flex space-x-4">
              <Link
                href="https://secure.winred.com/jake-lang-for-senate-inc/donate-hd?sc=winred-directory&money_bomb=false&recurring=false"
                target="_blank"
              >
                <button className="bg-red-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                  CONTRIBUTE
                </button>
              </Link>
              <Link href="/join">
                <button className="bg-blue-800 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded">
                  VOLUNTEER
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white shadow-lg w-[92%] md:w-1/2 m-auto md:ml-auto md:mr-0 rounded-lg mt-[100px] mb-16">
            <div className="bg-red-600 text-white px-9 py-10 text-2xl md:text-4xl font-bold rounded-t-lg">
              Join Our Movement!
              <p className="text-lg font-thin">
                {" "}
                Vote Jake Lang for United States Senate
              </p>
            </div>
            <div className="p-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="border border-gray-400 px-4 py-3 w-full md:w-2/3 rounded-md focus:outline-none"
              />
              <input
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                type="text"
                placeholder="ZIP"
                className="border border-gray-400 px-4 py-3 w-full md:w-1/3 rounded-md focus:outline-none"
              />
              <button
                onClick={handleSubmit}
                className="text-blue-900 font-bold text-xl"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <ShopSection /> */}
      <CampaignIntro />
      <VideoPlayer
        src="https://pg1aksyh5a.ufs.sh/f/F43hPbKWmpQOveJWioM2e9YSOxXgFhbGTVc5miMRdjPUz34n"
        poster="/jake.jpeg"
      />
      <Footer />
    </div>
  );
}
