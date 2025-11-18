// Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-row bg-white shadow-inner py-4 text-center text-gray-600 text-sm">

                  <div className="flex flex-col text-left">
                      <h3 className="font-bold">Cowboy Quad</h3>
                      <h4>Discover the Art of Cowboy Quad</h4>
                       © {new Date().getFullYear()} Mitchell Art Portfolio. All rights reserved.
                  </div>
                  <div className="flex flex-col">
                      <h3>Navigation</h3>
                      <h4>Home</h4>
                      <h4>About</h4>
                      <h4>Gallery</h4>
                      <h4>Contact</h4>
                  </div>
                  <div></div>
                  <div></div>


    </footer>
  );
}
