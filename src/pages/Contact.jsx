// src/pages/Contact.jsx
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
    // Here you would handle submission, e.g., send data to backend or email API
    setSubmitted(true);
  };

  if (submitted) {
    return <p>Thank you for reaching out. Mitchell will get back to you soon!</p>;
  }

  return (
    <section className="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact Mitchell</h2>
      <form onSubmit={handleSubmit} aria-describedby="contact-desc">
        <p id="contact-desc">Use the form below to inquire about commissions or purchases.</p>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formState.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}
