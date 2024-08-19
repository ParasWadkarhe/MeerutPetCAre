import React, { useState } from "react";

const BookAService = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    email: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, date, email, time } = formData;

    const mailtoLink = `mailto:khushiagarwal3757@gmail.com?subject=Service%20Enquiry&body=Name:%20${encodeURIComponent(
      name
    )}%0D%0APhone:%20${encodeURIComponent(
      phone
    )}%0D%0AEmail:%20${encodeURIComponent(
      email
    )}%0D%0ADate:%20${encodeURIComponent(
      date
    )}%0D%0ATime:%20${encodeURIComponent(time)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0efeb] p-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8 text-[#800000]">
          Book A Service
        </h1>

        <div className="mb-4">
          <label
            className="block text-gray-700 sm:text-xl text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800000]"
          />
        </div>

        <div className="mb-4">
          <label
            className="block sm:text-xl text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800000]"
          />
        </div>

        <div className="mb-4">
          <label
            className="block sm:text-xl text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800000]"
          />
        </div>

        <div className="mb-4">
          <label
            className="block sm:text-xl text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800000]"
          />
        </div>

        <div className="mb-4">
          <label
            className="block sm:text-xl text-gray-700 text-sm font-bold mb-2"
            htmlFor="time"
          >
            Time Range (9 AM - 10 PM)
          </label>
          <input
            type="time"
            id="time"
            min="09:00"
            max="22:00"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800000]"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-[#800000] sm:text-xl text-white px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookAService;
