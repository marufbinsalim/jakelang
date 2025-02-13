import { useState } from "react";

function VolunteerSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior

    const formData = {
      firstName,
      lastName,
      email,
      phone,
      zip,
      city,
      state,
      message,
    };

    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        subject: "New Volunteer Signup from Jakelangforsenate.com",
        message: `
          A user has signed up to volunteer.

          Name: ${firstName} ${lastName}
          Email: ${email}
          Phone: ${phone}
          Zip Code: ${zip}
          City: ${city}, State: ${state}

          Message: ${message}
        `,
        html: `
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Zip Code:</strong> ${zip}</p>
          <p><strong>City:</strong> ${city}, <strong>State:</strong> ${state}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      }),
    });

    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setZip("");
    setCity("");
    setState("");
    setMessage("");
    setAgree(false);
  }

  return (
    <div className="bg-white shadow-lg mx-auto w-[90%] md:w-3/4 lg:w-2/3 rounded-lg overflow-hidden my-10">
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
      <form className="p-6 space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="FIRST NAME"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-gray-400 px-4 py-3 rounded-md w-full"
            required
          />
          <input
            type="text"
            placeholder="LAST NAME"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border border-gray-400 px-4 py-3 rounded-md w-full"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 px-4 py-3 rounded-md w-full"
            required
          />
          <input
            type="text"
            placeholder="PHONE"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-400 px-4 py-3 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="ZIP"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="border border-gray-400 px-4 py-3 rounded-md w-full"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="CITY"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-gray-400 px-4 py-3 rounded-md w-full"
          />
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="border border-gray-400 px-4 py-3 rounded-md w-full"
            required
          >
            <option value="">Select State</option>
            {STATES.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <textarea
          placeholder="MESSAGE"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-400 px-4 py-3 rounded-md w-full h-24"
        ></textarea>

        {/* Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="h-4 w-4"
            required
          />
          <p className="text-sm text-gray-700">
            BY PROVIDING THIS INFORMATION YOU ARE ACKNOWLEDGING AND AGREEING TO
            THE <span className="text-blue-600 font-bold">PRIVACY POLICY</span>
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!agree}
          className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded w-full disabled:opacity-50"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
}

const STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export default VolunteerSignup;
