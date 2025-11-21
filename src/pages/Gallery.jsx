// // src/pages/Gallery.jsx
// import React from "react";
// import art1 from '../assets/images/art1.png';
//
//
// const artworks = [
//   {
//     id: 1,
//     title: "Morning Mist Over Mountains",
//     src: art1,
//     description: "An ethereal landscape of misty mountains at dawn.",
//   },
//   {
//     id: 2,
//     title: "Sacred Eagle",
//     src: "/images/art2.jpg",
//     description: "Native American eagle symbol painted with vibrant colors.",
//   },
//   // Add more artworks as needed
// ];
//
// export default function Gallery() {
//   return (
//     <section className="gallery" aria-labelledby="gallery-title">
//       <h2 id="gallery-title">Artist Gallery</h2>
//       <div className="gallery-grid">
//         {artworks.map(({ id, title, src, description }) => (
//           <figure key={id} tabIndex={0} className="artwork-item">
//             <img src={src} alt={`${title} - ${description}`} />
//             <figcaption>
//               <strong>{title}</strong>
//               <p>{description}</p>
//             </figcaption>
//           </figure>
//         ))}
//       </div>
//     </section>
//   );
// }
import React from "react";
import art1 from "../assets/images/art1.png";

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
];

export default function Gallery() {
  return (
    <section className="py-16 bg-white container mx-auto px-6">
      <h1 className="text-4xl sm:text-5xl font-serif mb-12 text-center">
        Artist Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {artworks.map(({ id, title, src, description }) => (
          <figure
            key={id}
            tabIndex={0}
            className="rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out bg-white"
          >
            <img src={src} alt={`${title} - ${description}`} className="w-full h-64 object-cover" />
            <figcaption className="p-4">
              <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
