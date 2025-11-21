// // Footer.jsx
// import React from "react";
//
// export default function Footer() {
//   return (
//     <footer className="flex flex-row bg-white shadow-inner py-4 text-center text-gray-600 text-sm">
//
//                   <div className="flex flex-col text-left">
//                       <h3 className="font-bold">Cowboy Quad</h3>
//                       <h4>Discover the Art of Cowboy Quad</h4>
//                        © {new Date().getFullYear()} Mitchell Art Portfolio. All rights reserved.
//                   </div>
//                   <div className="flex flex-col">
//                       <h3>Navigation</h3>
//                       <h4>Home</h4>
//                       <h4>About</h4>
//                       <h4>Gallery</h4>
//                       <h4>Contact</h4>
//                   </div>
//                   <div></div>
//                   <div></div>
//
//
//     </footer>
//   );
// }
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate py-12 text-gray-600">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-semibold text-lg mb-2">Cowboy Quad</h3>
          <p>Discover the Art of Cowboy Quad</p>
          <p>© {new Date().getFullYear()} Mitchell Art Portfolio. All rights reserved.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>
        <div></div>
      </div>
    </footer>
  );
}
