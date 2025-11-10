// src/pages/Story.jsx
import React from "react";

export default function Story() {
  return (
    <section className="story" aria-labelledby="story-title">
      <h2 id="story-title">Mitchell's Story</h2>
      <blockquote>
        <p>
          "Art is my voice and my freedom. Painting with my mouth challenges me every day, but it has given me
          a way to express my identity and inspire others."
        </p>
      </blockquote>
      <p>
        Mitchell’s journey as a quadriplegic artist is one of triumph over adversity, rooted in his rich Native
        American heritage and his unyielding creative spirit.
      </p>
    </section>
  );
}
