// // Contact.jsx
// import React, { useState } from "react";
//
// export default function Contact() {
//   const [formState, setFormState] = useState({ name: "", email: "", message: "" });
//   const [submitted, setSubmitted] = useState(false);
//
//   function handleChange(event) {
//     const { name, value } = event.target;
//     setFormState((prev) => ({ ...prev, [name]: value }));
//   }
//
//   function handleSubmit(event) {
//     event.preventDefault();
//     // Add backend or email API integration here
//     setSubmitted(true);
//   }
//
//   return (
//     <section className="max-w-xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-semibold mb-6">Contact Mitchell</h1>
//       {submitted ? (
//         <p className="text-green-600">Thank you for reaching out! We will respond as soon as possible.</p>
//       ) : (
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <label className="block">
//             <span className="text-gray-700 font-medium">Name</span>
//             <input
//               type="text"
//               name="name"
//               value={formState.name}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//               placeholder="Your full name"
//             />
//           </label>
//           <label className="block">
//             <span className="text-gray-700 font-medium">Email</span>
//             <input
//               type="email"
//               name="email"
//               value={formState.email}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//               placeholder="you@example.com"
//             />
//           </label>
//           <label className="block">
//             <span className="text-gray-700 font-medium">Message</span>
//             <textarea
//               name="message"
//               value={formState.message}
//               onChange={handleChange}
//               rows={5}
//               required
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//               placeholder="Your message"
//             />
//           </label>
//           <button
//             type="submit"
//             className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
//           >
//             Send Message
//           </button>
//         </form>
//       )}
//     </section>
//   );
// }
import React, { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-4xl sm:text-5xl font-serif mb-8 text-center">Contact Mitchell</h1>
      {submitted ? (
        <p className="text-green-600 text-center">Thank you! We will respond as soon as possible.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {["name", "email", "message"].map((field) => (
            <label key={field} className="block">
              <span className="text-gray-700 font-medium capitalize">{field}</span>
              {field !== "message" ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formState[field]}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  placeholder={field === "email" ? "you@example.com" : `Your ${field}`}
                />
              ) : (
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  placeholder="Your message"
                />
              )}
            </label>
          ))}
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
