import { useState } from "react";

const Footer = () => {
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

  return (
    <footer className="bg-blue-900 text-white py-10 w-full">
      <div className="w-full p-2 px-4">
        <div className="flex flex-col md:w-[80%] w-full m-auto flex-wrap">
          <h3 className="text-lg font-semibold mb-4 text-left">
            Join Our Movement
            <p className="text-sm font-extralight">
              {`Vote Jake Lang for U.S. Senate, Florida`}
            </p>
          </h3>
          <div className="flex items-center gap-2 flex-wrap">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="px-4 py-2 border border-white bg-transparent text-white placeholder-white focus:outline-none"
            />
            <input
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              type="text"
              placeholder="ZIP"
              className="px-4 py-2 border border-white bg-transparent text-white placeholder-white focus:outline-none w-20"
            />
            <button
              className="px-4 py-2 border border-white bg-transparent text-white"
              onClick={handleSubmit}
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-6 flex gap-4 text-sm md:w-[80%] w-full m-auto flex-wrap">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
