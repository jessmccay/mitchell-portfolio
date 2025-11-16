// Home.jsx
import React from "react";
import cowboyquad from "../assets/images/cowboyquad.png"
import dancer1 from "../assets/images/dancer1.png"
import dancer2 from "../assets/images/dancer2.png"
import dancer3 from "../assets/images/dancer3.png"
import dancer4 from "../assets/images/dancer4.png"
import heroimage from "../assets/images/art1.png"
import "../styles.css"

export default function Home() {
  return (
    <>
      <div className="w-full bg-orange-100 relative">
        <img
          src={heroimage}
          alt="Mitchell painting"
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
          style={{ zIndex: 0 }}
        />
        <section className="container mx-auto px-4 flex flex-col justify-center items-center min-h-[500px] sm:min-h-[600px] md:min-h-[700px] relative">
          <div className="text-center z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-2 drop-shadow-lg">
              Mitchell Ray McCabe
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 font-medium mb-6">
              Brushstrokes of Resilience: Art from the Heart
            </p>
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded transition">
              Explore the Gallery
            </button>
          </div>
        </section>
      </div>

      {/* Featured Artworks */}
      <section className="mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Artworks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 dancer-group">

          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src={dancer1} alt="Spirit of the River" className="w-full w-48 h-48 overflow-hidden object-cover rounded-md mb-2" />
            <p className="font-semibold">Spirit of the River</p>
            <button className="mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded transition">
              View Artwork
            </button>
          </div>

           <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src={dancer2} alt="Spirit of the River" className="w-full w-48 h-48 overflow-hidden object-cover rounded-md mb-2" />
              <p className="font-semibold">Spirit of the River</p>
              <button className="mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded transition">
                View Artwork
              </button>
           </div>
           <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src={dancer3} alt="Spirit of the River" className="w-full w-48 h-48 overflow-hidden object-cover rounded-md mb-2" />
              <p className="font-semibold">Spirit of the River</p>
              <button className="mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded transition">
                View Artwork
              </button>
           </div>
           <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src={dancer4} alt="Spirit of the River" className="w-full w-48 h-48 overflow-hidden object-cover rounded-md mb-2" />
              <p className="font-semibold">Spirit of the River</p>
              <button className="mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded transition">
                View Artwork
              </button>
           </div>
          {/* repeat for each artwork */}
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">
            His Journey: A Story of Resilience
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            {/* bio text here */}
          </p>
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded transition">
            Learn More About Mitchell
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={dancer1} alt="mitch painting" className="w-full object-contain rounded-lg shadow" />
        </div>
      </section>
    </>
  );
}
