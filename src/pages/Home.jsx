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
      <div className="w-full relative overflow-hidden">
        <img
          src={heroimage}
          alt="Mitchell painting"
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
          style={{ zIndex: 0 }}
        />
        <section className="container mx-auto px-4 flex flex-col justify-center items-center min-h-[500px] sm:min-h-[600px] md:min-h-[700px] relative text-center z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 drop-shadow-lg">
            Mitchell Ray McCabe
          </h1>
          <p className="text-xl sm:text-2xl font-medium mb-6 text-bodytext max-w-xl">
            Brushstrokes of Resilience: Art from the Heart
          </p>
          <button className="font-bold py-3 px-8 rounded shadow hover:bg-sage transition-colors text-lg">
            Explore the Gallery
          </button>
        </section>
      </div>

      {/* Featured Artworks Section */}
      <section className="bg-blush py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Featured Artworks
        </h2>
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 dancer-group">
          {[dancer1, dancer2, dancer3, dancer4].map((src, index) => (
            <div
              key={index}
              className="rounded-xl shadow-md p-5 flex flex-col items-center"
            >
              <div className="w-48 h-48 overflow-hidden rounded-lg mb-2">
                <img
                  src={src}
                  alt={`Artwork ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-semibold text-bodytext mb-3">Spirit of the River</p>
              <button className="mt-2 bg-olive text-white px-5 py-2 rounded hover:bg-gold transition">
                View Artwork
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">
            His Journey: A Story of Resilience
          </h3>
          <p className="text-lg text-bodytext mb-6 max-w-lg">
            Mitchell Ray McCabe is an extraordinary Native American artist whose vibrant creations defy conventional boundaries. A quadriplegic, Mitch paints with his mouth, transforming challenges into a powerful testament to the human spirit. His art is not just visually stunning; it’s a narrative of determination, cultural heritage, and unwavering passion. Each stroke tells a story, inviting you to witness the beauty born from profound strength and unique perspective.
          </p>
          <button className="bg-olive hover:bg-sage text-white font-semibold py-3 px-6 rounded transition">
            Learn More About Mitchell
          </button>
        </div>
         <div className="flex justify-center items-center w-full md:w-auto">
        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-100 md:h-100 overflow-hidden rounded-full">
              <img
                src={mitchpaints}
                alt="mitch painting"
                className="object-cover w-full h-full object-contain shadow mitchpaints"
              />
            </div>
        </div>
      </section>
    </>
  );
}
