// src/pages/Gallery.jsx
import React from "react";
import art1 from '../assets/images/art1.png';


const artworks = [
  {
    id: 1,
    title: "Morning Mist Over Mountains",
    src: art1,
    description: "An ethereal landscape of misty mountains at dawn.",
  },
  {
    id: 2,
    title: "Sacred Eagle",
    src: "/images/art2.jpg",
    description: "Native American eagle symbol painted with vibrant colors.",
  },
  // Add more artworks as needed
];

export default function Gallery() {
  return (
    <section className="gallery" aria-labelledby="gallery-title">
      <h2 id="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {artworks.map(({ id, title, src, description }) => (
          <figure key={id} tabIndex={0} className="artwork-item">
            <img src={src} alt={`${title} - ${description}`} />
            <figcaption>
              <strong>{title}</strong>
              <p>{description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
