// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <section className="home" aria-labelledby="home-title">
      <h1 id="home-title">Meet Mitchell</h1>
      <p className="intro-text">
        Mitchell is a remarkable Native American artist who paints breathtaking landscapes and cultural
        themes using his mouth to hold the brush.
      </p>
      <img
        src="/images/mitchell-hero-painting.jpg"
        alt="A breathtaking landscape painting by Mitchell created using his mouth-held brush"
        className="hero-image"
      />
    </section>
  );
}
