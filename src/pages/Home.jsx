import React from "react";
import cowboyquad from "../assets/images/cowboyquad.png";
import dancer1 from "../assets/images/dancer1.png";
import dancer2 from "../assets/images/dancer2.png";
import dancer3 from "../assets/images/dancer3.png";
import dancer4 from "../assets/images/dancer4.png";
import heroimage from "../assets/images/art1.png";
import mitchpaints from "../assets/images/mitchpaints.png";
import "../styles.css";

export default function Home() {
  return (
    <>
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center min-h-[600px]">
      {/* Text on the left */}
      <section className="md:w-1/2 flex flex-col justify-center items-start text-left md:pr-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-3 drop-shadow-lg">
          Mitchell Ray McCabe
        </h1>
        <p className="text-xl sm:text-2xl font-medium mb-6 text-bodytext max-w-xl">
          Brushstrokes of Resilience: Art from the Heart
        </p>
        <button className="font-bold py-3 px-8 rounded shadow hover:bg-sage transition-colors text-lg">
          Explore the Gallery
        </button>
      </section>

      {/* Image on the right */}
      <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
        <img
          src={heroimage}
          alt="Mitchell painting"
          className="w-[85%] object-cover rounded-xl"
          style={{ zIndex: 0 }}
        />
      </div>
    </div>

      {/* Featured Artworks Section */}
      <section className="bg-slate text-WarmBoneWhite py-12 pb-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Featured Artworks
        </h2>
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 dancer-group">
          {[dancer1, dancer2, dancer3, dancer4].map((src, index) => (
            <div
              key={index}
              className="rounded-xl shadow-md p-5 flex flex-col items-center"
            >
              <div className="border-4 bg-gradient-to-r w-48 h-48 overflow-hidden rounded-lg mb-2">
                <img
                  src={src}
                  alt={`Artwork ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-semibold mb-3 text-cream">Spirit of the River</p>
              <button className="mt-2  px-5 py-2 rounded hover:bg-gold transition">
                View Artwork
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
     <section className="relative bg-boneWhite z-0 pb-40">
       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center min-h-[500px] md:min-h-[600px]">
         {/* Image on the left, overlapping hero */}
         <div className="md:w-1/2 -mt-20 md:-mt-32 flex justify-start z-10">
           <img
             src={mitchpaints}
             alt="Mitchell painting more"
             className="w-[70%] md:w-[80%] object-cover rounded-xl shadow-lg"
           />
         </div>

         {/* Text on the right */}
         <div className="md:w-1/2 flex flex-col justify-center items-start text-left md:pl-8 mt-8 md:mt-0 z-20">
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-3 drop-shadow-lg">
             Dive Into His Process
           </h2>
           <p className="text-lg sm:text-xl font-medium mb-6 text-bodytext max-w-xl">
             Witness the journey of each brushstroke, where resilience meets creativity. Every canvas tells a story of triumph.
           </p>
           <button className="font-bold py-3 px-8 rounded shadow hover:bg-clayRed transition-colors text-lg">
             Learn More
           </button>
         </div>
       </div>
     </section>
    </>
  );
}
// import React from "react";
// import dancer1 from "../assets/images/dancer1.png";
// import dancer2 from "../assets/images/dancer2.png";
// import dancer3 from "../assets/images/dancer3.png";
// import dancer4 from "../assets/images/dancer4.png";
// import heroimage from "../assets/images/art1.png";
// import mitchpaints from "../assets/images/mitchpaints.png";
//
// export default function Home() {
//   return (
//     <main className="bg-white text-gray-900 font-sans">
//       {/* HERO SECTION */}
//       <section className="relative">
//         {/* Hero Image */}
//         <img
//           src={heroimage}
//           alt="Mitchell painting"
//           className="w-full h-[90vh] object-cover rounded-b-3xl shadow-xl"
//         />
//         {/* Overlay for text readability */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/10 flex items-center justify-start px-6 md:px-20">
//           <div className="max-w-2xl">
//             <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-white drop-shadow-lg mb-4">
//               Mitchell Ray McCabe
//             </h1>
//             <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-6">
//               Brushstrokes of Resilience: Art from the Heart
//             </p>
//             <button className="bg-sage text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-olive transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-olive/40">
//               Explore the Gallery
//             </button>
//           </div>
//         </div>
//       </section>
//
//       {/* FEATURED ARTWORKS */}
//       <section className="bg-blush py-16">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-12">
//           Featured Artworks
//         </h2>
//         <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {[dancer1, dancer2, dancer3, dancer4].map((src, index) => (
//             <figure
//               key={index}
//               tabIndex={0}
//               className="flex flex-col items-center rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out bg-white"
//             >
//               <img
//                 src={src}
//                 alt={`Artwork ${index + 1}`}
//                 className="w-full h-64 object-cover"
//               />
//               <figcaption className="p-4 text-center">
//                 <p className="font-semibold text-gray-800 mb-2">Spirit of the River</p>
//                 <button className="mt-2 px-5 py-2 bg-gold text-white rounded-lg font-medium hover:bg-olive transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-olive/40">
//                   View Artwork
//                 </button>
//               </figcaption>
//             </figure>
//           ))}
//         </div>
//       </section>
//
//       {/* STORY SECTION */}
//       <section className="relative bg-boneWhite py-20">
//         <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:space-x-12">
//           {/* Image */}
//           <div className="md:w-1/2 relative -mt-16 md:-mt-32 z-10">
//             <img
//               src={mitchpaints}
//               alt="Mitchell painting more"
//               className="w-full rounded-xl shadow-2xl object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
//             />
//           </div>
//           {/* Text */}
//           <div className="md:w-1/2 flex flex-col justify-center mt-8 md:mt-0">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 drop-shadow-md">
//               Dive Into His Process
//             </h2>
//             <p className="text-lg sm:text-xl font-medium text-gray-700 mb-6 max-w-lg">
//               Witness the journey of each brushstroke, where resilience meets creativity. Every canvas tells a story of triumph.
//             </p>
//             <button className="bg-clayRed text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-olive transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-clayRed/40">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
